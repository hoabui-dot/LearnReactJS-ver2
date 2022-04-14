import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import TitleSection from "../TitleSection/TitleSection";
import letter from "../../../../assets/images/envelope.png";
import InputField from "./components/InputField/InputField";
import "./Contact.scss";

export default function Contact() {
  const [input, setInput] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleInputChange = e => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className='contact'>
      <div className='container'>
        <TitleSection title='contact' urlIcon={letter} />
        <div className='contact__wrap'>
          <div className='contact__form'>
            <InputField
              active={!input.name ? false : true}
              name='name'
              onChange={handleInputChange}
              value={input.name}
              inputType='input'
            />
            <InputField
              active={!input.subject ? false : true}
              name='subject'
              onChange={handleInputChange}
              value={input.subject}
              inputType='input'
            />
            <InputField
              active={!input.email ? false : true}
              name='email'
              onChange={handleInputChange}
              value={input.email}
              inputType='input'
            />
            <InputField
              active={!input.message ? false : true}
              name='message'
              onChange={handleInputChange}
              value={input.message}
              inputType='textarea'
            />
            <button type='button' className='form__button'>
              send
            </button>
          </div>
          <div className='map'>
            <GoogleMap
              zoom={10}
              center={{ lat: 10.782282, lng: 106.746741 }}
              mapContainerClassName='google__map'
            >
              <Marker position={{ lat: 10.78228, lng: 106.746741 }} />
            </GoogleMap>
          </div>
        </div>
        <div className='producer'>
          © Material CV. All right reserved by <a href='#'>Trimatrixlab</a>
        </div>
      </div>
    </section>
  );
}
