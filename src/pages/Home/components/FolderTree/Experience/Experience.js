import React from "react";
import TitleSection from "../../TitleSection/TitleSection";
import ExpIcon from "../../../../../assets/images/layers.png";
import FolderTree from "../FolderTree";
import { experienceData } from "../../../MockData";

const Experience = () => {
  return (
    <section className='experience'>
      <div className='container'>
        <TitleSection title='experience' urlIcon={ExpIcon} />
        <FolderTree dataFolderTree={experienceData} tree='exp' />
      </div>
    </section>
  );
};

export default Experience;
