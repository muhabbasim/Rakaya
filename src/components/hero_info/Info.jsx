import React from 'react'
import './Info.scss'
import { CiMemoPad } from 'react-icons/ci'
import { CiBezier } from 'react-icons/ci'
import { CiBank } from 'react-icons/ci'
import { CiBarcode } from 'react-icons/ci'


function Info() {
  return (
    <div className="info flex">
            <div className="item flex">
                <CiMemoPad className='search-icon' size={40} color="lightgray"/>
                <span>Consectetur </span>
            </div>

            <div className="line"></div>

            <div className="item flex">
                <CiBezier className='search-icon' size={40} color="lightgray"/>
                <span>Laboriosam</span>
            </div>

            <div className="line"></div>

            <div className="item flex">
                <CiBank className='search-icon' size={40} color="lightgray"/>
                <span>Necessitatibus </span>
            </div>
            
            <div className="line"></div>

            <div className="item flex">
                <CiBarcode className='search-icon' size={40} color="lightgray"/>
                <span>Perferendis</span>
            </div>
        </div>
  )
}

export default Info