import React from "react";
import TitleSection from "../../titleSection";
import ExpIcon from "../../../../../assets/images/layers.png";
import FolderTree from "../FolderTree";
import { experienceData } from "../../../MockData";

function Experience() {
  return (
    <div className='experience'>
      <div className='container'>
        <TitleSection title='experience' urlIcon={ExpIcon} />
        <FolderTree dataFolderTree={experienceData} tree='exp' />
      </div>
    </div>
  );
}

export default Experience;
