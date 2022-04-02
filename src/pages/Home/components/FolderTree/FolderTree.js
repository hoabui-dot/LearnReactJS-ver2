import React from "react";
import EduBox from "./EduBox/EduBox";
import "./FolderTree.scss";

const FolderTree = ({ tree, dataFolderTree }) => {
  return (
    <>
      <div className='folderTree'>
        <div className={`folderTree__tree folderTree__tree--${tree}`}></div>
        <ul className='folderTree__list'>
          {dataFolderTree.map((data, index) => {
            return (
              <li className={`folderTree__item ${data.flip}`} key={index}>
                <EduBox eduData={data} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FolderTree;
