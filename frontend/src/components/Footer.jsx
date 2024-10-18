import React from 'react'
// import FOOTER_LINK from '../assets/footer_links'
import { Link } from 'react-router-dom'
import FOOTER_LINKS from '../assets/footer_links'
import FOOTER_CONTACT_INFO from '../assets/footer_contact'
import SOCIALS from '../assets/socials'


const Footer = () => {
  return (
    <>
    <footer className='flex justify-center p-24 '>
      <div className='max-padd-aontainer flex w-full flex-col gap-14 '>
        <div className='flex flex-col items-start justify-center  md:flex-row  '>
          <Link to='/' className="mb-10 bold-20 
          "> </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 '>
            {FOOTER_LINKS.map((col)=>(
              <FooterColumn title={col.title} key={col.title} >
                <ul className='flex flex-col  gap-4 regular-14 text-gray-20'>
                {col.links.map((link)=>{
                  return  <Link to={link} key={link}>{link}</Link>
                })}
                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col gap-5'>
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link)=>{
                 return  <Link to={link} key={link.label} className='flex gap-4md:flex-col lg:flex-row
                 '><p>{link.label}</p> <p className='medium-14 '>{link.value}</p></Link>
              })}
           </FooterColumn>
            </div>
            <div className='flex '>
              <FooterColumn>
                <u className='flex gap-4'>
                  {SOCIALS.links.map((link)=>{
                    return  <Link to={link} key={link}><img src={link} alt="" height={22} width={22} /></Link>
                  })}
                </u>
              </FooterColumn>
            </div>
          </div>
        </div>  
      
      </div>      
    </footer>
    <div className='border bg-gray-20 '></div>
       
    <p className='text-center regular-16 text-gray-30 py-8 ' >2024 Online Store | All Rights Reserved. </p> 
       
    </>
  )
}

const FooterColumn = ({title , children})=>{
  return(
   <div className='flex flex-col gap-5 '>
    <h4 className='bold-18 whitespace-nowrap '>{title}</h4>
    {children}
   </div>
  )
}

export default Footer