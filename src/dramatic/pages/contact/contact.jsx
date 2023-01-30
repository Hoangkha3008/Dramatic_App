import { contacts } from "../../../data";
import "./contact.css";
import React from 'react'
import '../../font/themify-icons/themify-icons.css'
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';

const contact = () => {
  return (
    <div className="contact">
      <section id="contact-details" class="section-p1">
        <div className="details">
          {contacts.map(({ id, name, phone, address, map }) => {
            return (
              <div key={id} className='contact__map-title'>
                <div>
                  <h3>{name}</h3>
                  <li>
                    <i className="ti-map"></i>
                    <p>{address}</p>
                  </li>
                  <li>
                    <i className="ti-mobile"></i>
                    <p>{phone}</p>
                  </li>
                </div>
                <div className="map">
                  <iframe
                    title="Map"
                    src={map}
                    style={{
                      width: "600px",
                      height: "450px",
                      style: "border:0;",
                      allowfullscreen: "",
                      loading: "lazy",
                      referrerpolicy: "no-referrer-when-downgrade",
                    }}
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default contact;
