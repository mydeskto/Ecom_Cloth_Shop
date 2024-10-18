import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdHomeFilled , MdCategory, MdShop2 , MdContacts} from 'react-icons/md'
const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={'/'} className={({isActive})=>isActive ? "active_link" : ""}><div className='flex justify-center gap-x-1  '><MdHomeFilled width={35} /> Home</div></NavLink>
        <NavLink to={'/mens'} className={({isActive})=>isActive ? "active_link" : ""}><div className='flex justify-center gap-x-1  '><MdCategory width={35} /> Men</div></NavLink>
        <NavLink to={'/womens' }className={({isActive})=>isActive ? "active_link" : ""} ><div className='flex justify-center gap-x-1  '><MdShop2 width={35} /> Women</div></NavLink>
        <NavLink to={'/kids'} className={({isActive})=>isActive ? "active_link" : ""}><div className='flex justify-center gap-x-1  '><MdContacts width={35} /> Kid's</div></NavLink>
    </nav>
  )
}

export default Navbar
