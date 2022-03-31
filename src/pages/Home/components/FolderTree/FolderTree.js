import React from "react";
import EduBox from "./EduBox/eduBox";
import "./FolderTree.scss";

function FolderTree({ tree, dataFolderTree }) {
  return (
    <>
      <div className='folderTree'>
        <div className={`folderTree__tree folderTree__tree--${tree}`}></div>
        <ul className='folderTree__list'>
          {dataFolderTree.map((data, index) => {
            return (
              <li className={`folderTree__item ${data.flip}`} key={index}>
                <EduBox
                  job={data.job}
                  jobDesc={data.jobDesc}
                  time={data.time}
                  desc={data.desc}
                  keywords={data.keywords}
                  icon={data.icon}
                  more={data.more}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FolderTree;
