import React, { useState, useEffect, ChangeEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { useFindMovie, useForm } from "../../../helpers/customHooks";
import Modal from "../../../common/Modal/Modal";
import PosterListItem from "../../PosterList/PosterListItem/PosterListItem";
import { ValidationType } from "../../../types/types";

const SearchBar = () => {
  const [isSearch, setIsSearch] = useState(false);

  const initialForm: Record<string, unknown> = {
    searchValue: "",
  };

  const validations: ValidationType = {
    string: undefined,
  };

  const { formData, setFormData, handleChange, isValidForm, formErrors } =
    useForm(initialForm, validations);

  useEffect(() => {
    setFormData({ ...initialForm });
  }, []);

  // @ts-ignore
  const { movies, error, isLoading } = useFindMovie(formData?.searchValue);

  const changeInputValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputField: string
  ) => {
    handleChange(inputField)({
      target: {
        value: e.target.value,
      },
    });
  };

  return (
    <div className="search-bar">
      <div className="search">
        <BsSearch className="search__icon" />
        <input
          className="search__input"
          onFocus={() => setIsSearch(true)}
          onBlur={() => setIsSearch(false)}
          onChange={(e) => changeInputValue(e, "searchValue")}
          type="text"
          placeholder="Search.."
          name="search"
        />
      </div>

      {isSearch && (
        <Modal id="suggestion-modal" title="Movies">
          <div className="search-bar__list">
            {

              movies?.results
                ? // @ts-ignore
                movies?.results.map((movie) => (
                    <PosterListItem
                      id={movie.id}
                      itemClass="search-bar__list__item"
                      posterPath={movie.poster_path}
                      title={movie.title}
                    />
                  ))
                : null
            }
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SearchBar;
