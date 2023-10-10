import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navigator'>
        <ul>
            <li>
                <Link to="/" className='container-list'>home</Link>
            </li>
            <li>
                <Link to="/soap" className='container-list'> Soap</Link>
            </li>
            <li>
                <Link to="/shampoo" className='container-list'> Shampoo</Link>
            </li>
            <li>
                <Link to="/oilmacerated" className='container-list'>Oil Macerated</Link>
            </li>
            <li>
                <Link to="/tonics" className='container-list'>tonics</Link>
            </li>
        </ul>
    </div>
  )
}
