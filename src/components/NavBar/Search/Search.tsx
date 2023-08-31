import React, { useState, useEffect, ChangeEvent } from "react";
import {BsSearch} from "react-icons/bs";
import {useForm} from "../../../helpers/customHooks";


const SearchBar = () => {

  const [isSearch, setIsSearch] = useState(false);
  const suggestionData = ["Movie Super", "MovieTwo", "Movie Three", "Movie 4"]
  let suggestionClassName = `suggestion ${isSearch ? "" : "hidde"}`

  const initialForm: Record<string, unknown> = {
    searchValue: "",
  }

  const validations = {
  }

  const { formData, setFormData, handleChange, isValidForm, formErrors } =
    useForm(
      initialForm,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      validations
    )

  useEffect(() => {
    setFormData({ ...initialForm })
  }, [])

  const changeInputValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputField: string
  ) => {
    handleChange(inputField)({
      target: {
        value: e.target.value,
      },
    })
  }

  return(
    <div className="search-bar">
      <div className="search">
        <BsSearch className="search__icon"/>
        <input
          className="search__input"
          onFocus={() => setIsSearch(true)}
          onBlur={() => setIsSearch(false)}
          onChange={(e) => changeInputValue(e,"searchValue" )}
          type="text"
          placeholder="Search.."
          //value={formData.searchValue}
          name="search"/>
      </div>

      <div className={suggestionClassName}>
        <ul className="suggestion__list">
          {!formData?.searchValue ?
            suggestionData.map((item) => (
              <li className="suggestion__list__item">
                <button className="button button__rounded medium transparent">
                  <BsSearch/> {item}
                </button>

              </li>
            )) : <p>List of movies goes here</p>
          }
        </ul>

      </div>
    </div>

  )
}

export default SearchBar;
