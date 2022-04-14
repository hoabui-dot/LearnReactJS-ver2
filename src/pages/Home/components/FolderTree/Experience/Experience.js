import React, { useState } from "react";
import TitleSection from "../../TitleSection/TitleSection";
import ExpIcon from "../../../../../assets/images/layers.png";
import FolderTree from "../FolderTree";
import MoreInfoExp from "./MoreInfoExp/MoreInfoExp";
import { experienceData } from "../../../../../utils/MockData";

const Experience = ({ setValue }) => {
  const [state, setState] = useState(false);
  const [click, setClick] = useState(true);

  return (
    <section className='experience'>
      <div className='container'>
        <TitleSection title='experience' urlIcon={ExpIcon} />
        <FolderTree
          setState={setState}
          dataFolderTree={experienceData}
          tree='exp'
          setValue={setValue}
        />
        <MoreInfoExp setValue={setValue} state={state} setState={setState} />
      </div>
    </section>
  );
};

export default Experience;
