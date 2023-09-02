import React, {useState, useEffect, useContext, MouseEventHandler} from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { ArrowType } from "../../types/types";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

const ArrowButton = ({ direction } : ArrowType) => {
  const {
    isFirstItemVisible,
    isLastItemVisible,
    scrollPrev,
    scrollNext,
    visibleElements,
    initComplete,
  } = useContext(VisibilityContext);

  const isLeft = direction === 'left';
  const isRight = direction === 'right';

  const [disabled, setDisabled] = useState(
    !initComplete ||
    (isLeft && isFirstItemVisible) ||
    (isRight && (!visibleElements.length || isLastItemVisible))
  );

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled((prevDisabled) =>
        isLeft ? isFirstItemVisible : isRight ? isLastItemVisible : prevDisabled
      );
    }
  }, [isFirstItemVisible, isLastItemVisible, visibleElements, isLeft, isRight]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (isLeft) {
      scrollPrev();
    } else if (isRight) {
      scrollNext();
    }
  };


  return (
    <button
      className={`button button__vertical ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
    >
      {isLeft ? (
        <BsChevronLeft className="arrow" />
      ) : isRight ? (
        <BsChevronRight className="arrow" />
      ) : null}
    </button>
  );
}

export default ArrowButton;


