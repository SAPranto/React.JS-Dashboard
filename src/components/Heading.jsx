import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <span className="text-primary text-sm">{subtitle}</span>
    </div>
  );
};

export default Heading;
