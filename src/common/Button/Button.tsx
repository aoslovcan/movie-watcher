import React from "react";


type ButtonProps = {
  buttonLabel: string;
  buttonType: string;
  buttonSize: string;
  buttonColor: string;
}

const Button = ({buttonLabel, buttonType, buttonSize, buttonColor} : ButtonProps) => {

  const btnClassName = `button ${buttonType} ${buttonSize} ${buttonColor}`

  return(
    <button className={btnClassName}>
      {buttonLabel}
    </button>
  )
}

export default Button;
