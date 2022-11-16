import React from 'react'
import './NavBar.css'
import { GiCommercialAirplane } from 'react-icons/gi';

function NavBar() {
  return (
    <div className='navBar'>
        <div className='NavContent'>
            <div id="logo">Superbe <GiCommercialAirplane/></div>
            
            <ul id="NavItems">
              <a href="#firstPage"><li id='Acc'>Accueil</li></a>
              <a href="#presentation"><li id='Qsn'>Qui somme nous ?</li></a>
              <a href='#services'><li id='Srv'>Services</li></a>  
              <a href='#contact'><li id='Cnt'>Contact</li></a>
            </ul>
            
        </div>
    </div>
  )
}
export default NavBar