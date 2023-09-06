import { useState, useEffect } from "react";
import { ValidationType } from "../types/types";
import { useQuery } from "react-query";
import { MovieClient } from "../utils/MoviApiClient/MoviClient";

const movieClient = new MovieClient();

export const useNewestMovies = (queryParams: string) => {
  const { data, error, isLoading } = useQuery(
    [`newest-movies`],
    async () => await movieClient.getNewestMovies(queryParams),
    {
      staleTime: 24 * (60 * 60 * 1000),
      cacheTime: 24 * (60 * 60 * 1000)
    }
  );

  return { newestMovies: data, error, isLoading };
};

export const usePopularMovies = (queryParams: string) => {
  const { data, error, isLoading } = useQuery(
    [`popular-movies`],
    async () => await movieClient.getPopularMovies(queryParams),
    {
      staleTime: 24 * (60 * 60 * 1000),
      cacheTime: 24 * (60 * 60 * 1000)
    }
  );

  return { popularMovies: data, error, isLoading };
};

export const useGenre = () => {
  const { data, error, isLoading } = useQuery(
    [`movie-genres`],
    async () => await movieClient.getMovieGenre(),
    {
      staleTime: 24 * (60 * 60 * 1000),
      cacheTime: 24 * (60 * 60 * 1000)
    }
  );

  return { genres: data, error, isLoading };
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
            [fieldName]: validation?.required?.message
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
            [fieldName]: validation?.custom?.message
          };
        }

        if (
          ((!valueRequired && value) || valueRequired) &&
          validation?.minLength?.value &&
          valueLength < validation.minLength.value
        ) {
          return {
            ...errors,
            [fieldName]: validation.minLength.message
          };
        }

        if (
          ((!valueRequired && value) || valueRequired) &&
          validation?.maxLength?.value &&
          valueLength >= validation.maxLength.value
        ) {
          return {
            ...errors,
            [fieldName]: validation.maxLength.message
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
          [formField]: value
        });
      };

  return {
    formData,
    formErrors,
    isValidForm,
    setFormData,
    handleChange
  };
};

export const getDataFromStorage = (name: string | null) => {

  const storageName = name || "";
  return JSON.parse(localStorage.getItem(storageName) || "[]");
};

export const useStorage = (data: any, name: string | null, message: string) => {
  const storageName = name || "";

  const addToLocalStorage = () => {
    const storageData = getDataFromStorage(storageName) || [];

    if (storageData.some((item : any) => item.id !== data.id)) {
      alert(message);
      return;
    }
    storageData.push(data);
    localStorage.setItem(storageName, JSON.stringify(storageData));
  };
  const removeFromLocalStorage = () => {
    const storageData = getDataFromStorage(storageName) || [];

    const filterStorage = storageData.filter((item : any) => item.id !== data.id);
    localStorage.setItem(storageName, JSON.stringify(filterStorage));
  };

  return [addToLocalStorage, removeFromLocalStorage];

};
