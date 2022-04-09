import React from "react";

function Card({ children }) {
  return (
    <div className="bg-primary-gray px-4 py-4 shadow-md w-full h-auto">
      {children}
    </div>
  );
}

export default Card;
