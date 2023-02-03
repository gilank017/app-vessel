import React from 'react'
import { Image } from 'react-bootstrap'
import { useState } from 'react'
import Burger from '../../static/img/burger.svg'
import Avatar from '../../static/img/Avatar.png'
import '../../static/css/header.css'

const Headers = (props) => {
  const [toggle, setToggle] = useState(false)
  const tonggleSidebar = () => {
    setToggle(toggle => !toggle)
    props.setSidebar(toggle)
  }
  return (
    <div className='header py-4 px-5'>
      <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex'>
          <div className='px-2'  style={{width: '23rem'}}>
            <Image src={Burger} onClick={tonggleSidebar} style={{ cursor: 'pointer' }} width="30" height="40"/>
          </div>
          <div className='title-header'>LOGIN'S</div>
        </div>
        <div className="avatar d-flex align-items-center">
          <div className="profileUser" style={{ marginRight: '12px' }}> 
            <div style={{ fontWeight: 'bold', color: '#36599A'}}>Khevin Reinal G.</div>
            <div style={{ color: '#36599A', textAlign: 'right'}}>PIC PILOG</div>
          </div>
          <Image src={Avatar} width="55"/>
          
        </div>
      </div>
    </div>
  )
}

export default Headers