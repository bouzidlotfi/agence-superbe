import React from 'react'
import './Contact.css'
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter, BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {GiPositionMarker} from 'react-icons/gi';

function Contact() {
  return (
    <div id='contact'>

        <div id="ConContact">
            <div id="sieges">
              <ul id="adress">
                <li id='adrs'><GiPositionMarker size="1.2em"/> 2068 logements,Bab Ezzouar Batiment n°12</li>
                <li id='adrs'><GiPositionMarker size="1.2em"/> Rue Tripoli, hussein dey (prochainement)</li>
              </ul>
            </div>
            <div id="coord">
              <ul id="nums">
                <li id='email'><MdEmail size="1.2em"/> superbe@contact.com</li>
                <li id='num'><BsFillTelephoneFill size="1.2em"/> 06 66 66 66 66</li>
                <li id='num'><BsFillTelephoneFill size="1.2em"/> 05 55 55 55 55</li>
                <li id='num'><BsFillTelephoneFill size="1.2em"/> 07 77 77 77 77</li>
              </ul>
            </div>
            <div id="reseau">
              <ul id="rsx">
                <a href='https://www.facebook.com/'><li id='facebook'><BsFacebook/> Facebook</li></a>
                <a href='instagram.com/?hl=fr'><li id='insta'><BsInstagram/> Instagram</li></a>
                <a href='https://www.whatsapp.com/?lang=fr'><li id='wtsp'><BsWhatsapp/> WhatsApp</li></a>
                <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZnIifQ%3D%3D%22%7D'><li id='twit'><BsTwitter/> Twitter</li></a>
              </ul>
            </div>
        </div>

    </div>
  )
}

export default Contact