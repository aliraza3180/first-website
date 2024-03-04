import React from "react";

const Button = ({ title, type, buttonType, href, id, onClick }) => {
  let className = "";
  if (type === "primary") {
    className =
      "xs:px-6 xxs:px-4 py-2 text-center text-text-primary font-semibold bg-primary rounded-full shadow-lg shadow-black hover:shadow-none hover:-translate-x-0 hover:translate-y-1 duration-300";
  } else {
    className =
      "xs:px-6 xxs:px-4 py-2 text-center text-text-primary font-semibold bg-secondary rounded-full shadow-md shadow-primary hover:shadow-none hover:translate-x-0 hover:translate-y-1 duration-300 ";
  }

  return (
    <button type={buttonType} className={className} id={id} onClick={onClick}>
      <a href={href}>{title}</a>
    </button>
  );
};

export default Button;
