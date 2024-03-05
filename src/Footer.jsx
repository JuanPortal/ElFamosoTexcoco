import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer>
        <address><a href="https://maps.app.goo.gl/Zbf7SiK7SDbWt2jRA"><FontAwesomeIcon className='footer-icon' icon={faLocationDot} />222 W. Slauson Ave. Los Angeles CA 90003</a></address>
        <a href="tel:3232351880"><FontAwesomeIcon className='footer-icon' icon={faPhone} />(323) 235-1880</a>
        <a href="https://www.instagram.com/elfamoso.texcoco/" target='_blank'><FontAwesomeIcon className='footer-icon' icon={faInstagram} />El Famoso Texcoco on IG</a>
    </footer>
  )
}
