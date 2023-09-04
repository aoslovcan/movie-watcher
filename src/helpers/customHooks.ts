import { useState, useEffect } from "react";
import { ValidationType } from "../types/types";
import { useQuery } from "react-query";
import { MovieClient } from "../utils/MoviApiClient/MoviClient";

const movieClient = new MovieClient();

type MapQuery = {
  [key: string]: keyof MovieClient;
};

type MovieClientFunctions = (params: string) => Promise<any>;

export const useMovies = (queryParams: string, queryType: string) => {
  const mapQuery: MapQuery = {
    newest: "getNewestMovies",
    popular: "getPopularMovies",
  };

  const fetchMovies = async () => {
    const queryFunctionName = mapQuery[queryType];
    const fetchFunction = movieClient[
      queryFunctionName
    ] as MovieClientFunctions;
    return await fetchFunction(queryParams);
  };

  const { data, error, isLoading } = useQuery(
    [`${queryType}-movies`],
    fetchMovies,
    {
      staleTime: 24 * (60 * 60 * 1000),
      cacheTime: 24 * (60 * 60 * 1000),
    }
  );

  return { [queryType]: data, error, isLoading };
};

export const useForm = (
  initialState: Record<string, unknown>,
  validations: ValidationType
) => {
  const [formData, setFormData] = useState(initialState || {});
  const [isValidForm, setIsValidForm] = useState(true);
  const [formErrors, setFormErrors] = useState({});

  const checkValidation = () => {
    if (!validations) {
      return;
    }

    const newErrors = Object.entries(validations).reduce(
      (errors, [fieldName, validation]) => {
        const value: string | number | unknown = formData[fieldName];
        const valueRequired = validation?.required.value;
        const customIsValid = validation?.custom?.isValid;
        const valueLength =
          typeof value === "string" ? value?.trim().length : 0;

        if (valueRequired && !value) {
          return {
            ...errors,
            [fieldName]: validation?.required?.message,
          };
        }
        //required and custom validation
        if (
          ((!valueRequired && value) || valueRequired) &&
          customIsValid &&
          !customIsValid(formData)
        ) {
          return {
            ...errors,
            [fieldName]: validation?.custom?.message,
          };
        }

        if (
          ((!valueRequired && value) || valueRequired) &&
          validation?.minLength?.value &&
          valueLength < validation.minLength.value
        ) {
          return {
            ...errors,
            [fieldName]: validation.minLength.message,
          };
        }

        if (
          ((!valueRequired && value) || valueRequired) &&
          validation?.maxLength?.value &&
          valueLength >= validation.maxLength.value
        ) {
          return {
            ...errors,
            [fieldName]: validation.maxLength.message,
          };
        }

        return errors;
      },
      {}
    );

    if (Object.keys(newErrors).length) {
      setFormErrors({ ...newErrors });
      setIsValidForm(false);
      return;
    }

    setFormErrors({});
    setIsValidForm(true);
  };

  useEffect(() => {
    checkValidation();
  }, [formData]);

  const handleChange =
    (formField: string) =>
    ({ target }: any) => {
      const value = target.value;

      setFormData({
        ...formData,
        [formField]: value,
      });
    };

  return {
    formData,
    formErrors,
    isValidForm,
    setFormData,
    handleChange,
  };
};
