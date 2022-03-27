import React from "react";

const menu = ({ keyName, menuList }) => {
  return (
    <div className='menu'>
      <div className='menu-avt'>
        <span>{keyName}</span>
      </div>
      <div className='menu-list'>{menuList}</div>
    </div>
  );
};
s;

export default menu;
