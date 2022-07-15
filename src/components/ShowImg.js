import React from 'react';
import './images/p_img.jpg';
import FactoryIcon from '@mui/icons-material/Factory';
export default function ShowImg() {
  return (
    <div className='mt-24 text-center'>
        {/* <img className="object-contain h-72 max-w-full opacity-10" src={require('./images/p_img.jpg')}></img> */}
      <FactoryIcon size="large" color="primary"/>
    </div>
  )
}
