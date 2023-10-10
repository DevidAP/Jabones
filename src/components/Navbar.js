import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/soap">Soap</Link>
            </li>
            <li>
                <Link to="/shampoo">Shampoo</Link>
            </li>
            <li>
                <Link to="/oilmacerated">Oil Macerated</Link>
            </li>
            <li>
                <Link to="/tonics">tonics</Link>
            </li>
        </ul>
    </div>
  )
}
