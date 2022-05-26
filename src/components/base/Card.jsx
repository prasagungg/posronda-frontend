import React from "react";

function Card({ children, props }) {
  return (
    <div className="bg-primary-gray py-4 shadow-md w-full h-auto">
      {children}
    </div>
  );
}

export default Card;
