import React from 'react'
import './FirstPage.css'
// import NavBar from '../NavBar/NavBar'
import { BsChevronDoubleDown } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';


function FirstPage() {
  return (
    <div id='firstPage'>

            <div className='ContentPage1'>
                <div id="part1">
                    <div id='Rest'>
                        <div id='Explo'><p>EXP</p>LROER</div>
                        <div id='monde'>LE  M<p><BiWorld size="0.9em" margin-top="10Opx"/></p>NDE</div>
                        <div id='Pics'>
                            <div id='fpic1'></div>
                            {/* <div id='fpic2'></div>
                            <div id='fpic3'></div> */}
                        </div>
                    </div>
                </div>
                
                <div id="part2">
                    <div id='Ninfo'>
                        <div className='info1'><BsPeopleFill size="1.4em"/>+10000 voyageurs par an</div>
                        <div className='info2'><BiWorld size="1.4em"/>+80 destinations</div>
                    </div>
                    <div id="scroll">
                    <a href="#presentation"> Clique moi ! < BsChevronDoubleDown size="1.4em"/></a>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FirstPage