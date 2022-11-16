import React,{useEffect} from 'react'
import './Presentation.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Presentation() {

      useEffect(() => {
        AOS.init({duration : 2000});
      }, [])

  return (
    <div id='presentation'>
        <div className='preCont'>
          <div id="Pdesc" data-aos="zoom-in-right">
            <div id='desc1'>L'agence de voyage Superbe fondée en 2021 après l'épidémie du Covid-19,<br/> élus meilleure agence de voyage en algérie dès sa première année. <br/> Assure plus de 80 déstinations entre le national et l'international grace aux services présentés et aux partenaires qui nous représente en hors pays juste pour votre sécurité. <br/><br/> "N'hésitez pas de nous rendre visite où de nous appelez au numéro cité dessous."</div>
            <div id="desc2">Superbe</div>
          </div> 

          <div id="Ppic" data-aos="zoom-in-left"></div>
        </div>
    </div>
  )
}

export default Presentation