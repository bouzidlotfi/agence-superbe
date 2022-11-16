import React from 'react'
import Contact from './Contact/Contact'
import Presentation from './Presentation/Presentation'
import Service from './Service/Service'

export default function Content() {
  return (
    <div> 
        <Presentation/>
        <Service/>
        <Contact/>
    </div>
  )
}

