import React from "react";
import EduBox from "./EduBox/EduBox";
import "./FolderTree.scss";

const FolderTree = ({ tree, dataFolderTree }) => {
  return (
    <>
      <div className='folderTree'>
        <div className={`folderTree__tree folderTree__tree--${tree}`}></div>
        <div className='folderTree__list'>
          {dataFolderTree.map((data, index) => (
            <EduBox key={index} flip={data.flip} eduData={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FolderTree;
