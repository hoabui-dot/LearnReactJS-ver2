import React, { useState } from "react";
import TitleSection from "../../TitleSection/TitleSection";
import { educationData } from "../../../../../utils/MockData";
import IconEdu from "../../../../../assets/images/book.png";
import FolderTree from "../FolderTree";
import MoreInfo from "./MoreInfo/MoreInfo";
import "./Education.scss";

const Education = ({ setValue }) => {
  const [state, setState] = useState(false);
  return (
    <section className='education'>
      <div className='container'>
        <TitleSection title='education' urlIcon={IconEdu} />
        <FolderTree
          setValue={setValue}
          setState={setState}
          dataFolderTree={educationData}
          tree='edu'
        />
        <MoreInfo setValue={setValue} state={state} setState={setState} />
      </div>
    </section>
  );
};

export default Education;
