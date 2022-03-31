import React from "react";
import "./education.scss";
import TitleSection from "../../titleSection";
import { educationData } from "../../../MockData";
import IconEdu from "../../../../../assets/images/book.png";
import FolderTree from "../FolderTree";

function Education() {
  return (
    <>
      <section className='education'>
        <div className='container'>
          <TitleSection title='education' urlIcon={IconEdu} />
          <FolderTree dataFolderTree={educationData} tree='edu' />
        </div>
      </section>
    </>
  );
}

export default Education;
