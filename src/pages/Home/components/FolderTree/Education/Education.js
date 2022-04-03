import React from "react";
import "./Education.scss";
import TitleSection from "../../TitleSection/TitleSection";
import { educationData } from "../../../MockData";
import IconEdu from "../../../../../assets/images/book.png";
import FolderTree from "../FolderTree";

const Education = () => {
  return (
    <section className='education'>
      <div className='container'>
        <TitleSection title='education' urlIcon={IconEdu} />
        <FolderTree dataFolderTree={educationData} tree='edu' />
      </div>
    </section>
  );
};

export default Education;
