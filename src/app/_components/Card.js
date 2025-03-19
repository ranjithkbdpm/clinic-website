"use client";
import React from "react";
// import useIsClient from "../_hooks/useIsClient";

const Card = ({ title, content, buttonText, buttonAction, className = "", titleClass=""}) => {
  // const isClient = useIsClient();

  return (
    <div
      className={`border rounded-lg shadow-lg p-6 bg-white flex flex-col ${className}`}
    >
      <h3 className={`${titleClass}`}>{title}</h3>
      <div className="text-gray-600 mb-6">{content}</div>
      {buttonText && (
        <button
          onClick={buttonAction}
          className="bg-blue-500 text-neutralWhite px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
