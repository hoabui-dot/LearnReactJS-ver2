import React from "react";
import LightBoxItem from "./LightBoxItem";

const LightBox = ({ data }) => {
  return (
    <>
      {data.map((dataIndex, index) => (
        <LightBoxItem data={dataIndex} key={index} />
      ))}
    </>
  );
};

export default LightBox;
