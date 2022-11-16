import React,{useEffect} from 'react'
import './Service.css'
import { BiChevronsRight } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Service() {

    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div id='services'>
        <div className='servCont'>
      <div className='Spart1'>

          <div className='service1 ser' data-aos="fade-up" data-aos-duration="1000">
              <div className='Sphot sphot1'></div>
              <div className='Stit stit1'>
                    <h1>Tourisme intérieurs</h1>
                    

              </div>
              <div className='Sdesp sdesp1'>Des séjours organisés à plusieurs destinations à l'intérieur du pays pour savourer et découvrir différentes wilayas et villes des quatres coins ainsi que leurs cultures et traditions et leurs plats..</div>
              <div className='Sbtn sbtn1'>Voir plus <nav><BiChevronsRight size='1.2em'/></nav></div>
          </div>

          <div className='service2 ser' data-aos="fade-up" data-aos-duration="1400">
              <div className='Sphot sphot2'></div>
              <div className='Stit stit2'>
                  <h1>Tourisme extérieurs</h1>
              </div>
              <div className='Sdesp sdesp2'>Des séjours organisés à plusieurs destinations à l'extérieurs du pays pour savourer et découvrir différents pays des quatres coins du monde ainsi que leurs cultures et traditions et leurs histoires..</div>
              <div className='Sbtn sbtn2'>Voir plus <nav><BiChevronsRight size='1.2em'/></nav></div>
          </div>

      </div>

      <div className='Spart2'>

          <div className='service3 ser' data-aos="fade-up" data-aos-duration="1000">
              <div className='Sphot sphot3'></div>
              <div className='Stit stit3'>
                  <h1>Séjour linguistique</h1>
              </div>
              <div className='Sdesp sdesp3'>Partez pour un voyage ou séjour linguistique qui inclus un cours d'apprentissage de langue, d’un hébergement, un programme d’activités de loisirs et d’excursions..</div>
              <div className='Sbtn sbtn3'>Voir plus<nav><BiChevronsRight size='1.2em'/></nav></div>
          </div>

          <div className='service4 ser' data-aos="fade-up" data-aos-duration="1400">
              <div className='Sphot sphot4'></div>
              <div className='Stit stit4'>
                  <h1>Hadj & Omra</h1>
              </div>
            <div className='Sdesp sdesp4'>On s'occupe de tous vos procédures du Hadj ou Omra (Visa, billet d'avion, hotel) avec différents type (Simple ou VIP)..</div>
            <div className='Sbtn sbtn4'>Voir plus <nav><BiChevronsRight size='1.2em'/></nav></div>
          
          </div>
      </div>
      
    </div>
      </div>
  )
}

export default Service