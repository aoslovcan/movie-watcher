import React, { useState, useEffect, ChangeEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { useFindMovie, useForm } from "../../../helpers/customHooks";
import Modal from "../../../common/Modal/Modal";

const SearchBar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const suggestionData = ["Movie Super", "MovieTwo", "Movie Three", "Movie 4"];
  let suggestionClassName = `suggestion ${isSearch ? "" : "hidde"}`;
  const [searchResult, setSearchResult] = useState([]);

  const initialForm: Record<string, unknown> = {
    searchValue: "",
  };

  const validations = {};

  const { formData, setFormData, handleChange, isValidForm, formErrors } =
    useForm(
      initialForm,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      validations
    );

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

    // @ts-ignore
  };


  return (
    <div className="search-bar">
      <div className="search">
        <BsSearch className="search__icon" />
        <input
          className="search__input"
          onFocus={() => setIsSearch(true)}
          onChange={(e) => changeInputValue(e, "searchValue")}
          type="text"
          placeholder="Search.."
          //value={formData.searchValue}
          name="search"
        />
      </div>

      {isSearch ? <Modal id="suggestion-modal" title="">
        <div className="suggestion__list">
          {// @ts-ignore
            movies?.results ? movies?.results.map((movie) => ( <div className="suggestion__list__item">
            <img alt="test" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <div className="info">
              <h3>{movie.title}</h3>
            </div>
          </div>)) : null
          }
        </div>
      </Modal> : (<p>Items</p>)}



    </div>
  );
};

export default SearchBar;
