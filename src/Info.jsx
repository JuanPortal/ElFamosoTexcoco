import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Info = () => {
  return (
    <div className="info">
        <address><FontAwesomeIcon className='header-icon' icon={faLocationDot} />222 W. Slauson Ave. Los Angeles CA 90003</address>
        <a href="tel:3232351880"><FontAwesomeIcon className='header-icon' icon={faPhone} />(323) 235-1880</a>
        <a href="https://www.instagram.com/elfamoso.texcoco/" target='_blank'><FontAwesomeIcon className='header-icon' icon={faInstagram} />El Famoso Texcoco on IG</a>
    </div>
  )
}
