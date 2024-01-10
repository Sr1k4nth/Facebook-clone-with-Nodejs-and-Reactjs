import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {


  const [langData] = useState([
    'தமிழ்',
    'తెలుగు',
    'ಕನ್ನಡ',
    'اردو',
    'हिन्दी',
    'മലയാളം',
    'සිංහල',
    'ਪੰਜਾਬੀ',
    'বাংলা',
    'ગુજરાતી'
  ])

  const [linkData] = useState([
    "Sign Up",
    "Log in",
    "Messenger",
    "Facebook Lite",
    "Video",
    "Places",
    "Games",
    "Market place",
    "Meta Pay",
    "Meta Store",
    "Meta Quest",
    "Instagram",
    "Threads",
    "Fundraisers",
    "Services",
    "Voting Information Centre",
    "Privacy Policy",
    "Privacy Centre",
    "Groups",
    "About",
    "Createad",
    "Create Page",
    "Developers",
    "Careers",
    "Cookies",
    "AdChoices",
    "Terms",
    "Help",
    "Contact",
    "upload ingandnon-users",
    "Settings",
    "Activity log",
  ])

  return (
    <>
      <div className='fb_login'>
        <div className='fb_login_container'>
          <div className='login_header'><img className='fb_login_img' src='https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg' alt='facebook' /></div>
          <div className='login_card'>
            <div className='login_form'>
              <div className='login_header_block'>
                <span className='login_header'>
                  <div>Log in to Facebook</div>
                </span>
              </div>
              <div className='input_container'>
                <input
                  className='input_box input_box_style'
                  placeholder="Email address or phone number"
                />
              </div>
              <div className='input_container'>
                <input className='input_box input_box_style'
                  placeholder="Password"
                />
              </div>
              <div className='input_container'>
                <button className='login_button' >
                  Log in
                </button>
              </div>
              <div className='forget_container'>
                <div className='forget_password_con'>
                  <span><Link to='#' className='for_link'> Forgotten account?</Link></span>
                  <span><Link to='#' className='for_link'> · Sign up for Facebook</Link></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fb_login_footer_container'>
        <div className='fb_login_footer'>
          <ul className='localeSelectorList'>
            <li>English (UK)</li>
            {langData.map(item => (
              <li><Link to='#' className='footer_link'>{item}</Link></li>
            ))}
            <li><button >+</button></li>
          </ul>
          <div className='contentCurve'>
          </div>
          <ul className='localeSelectorList'>
            {linkData.map(item => (
              <li><Link to='#' className='footer_link font-lg'>{item}</Link></li>
            ))}
          </ul>
          <div className='mvl'>
            <div className='copyright'>
              <span> Meta © 2023</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login