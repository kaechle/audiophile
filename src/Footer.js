import LogoImage from "./assets/shared/desktop/logo.svg"
import FacebookIcon from "./assets/shared/desktop/icon-facebook.svg"
import TwitterIcon from "./assets/shared/desktop/icon-twitter.svg"
import InstagramIcon from "./assets/shared/desktop/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className='bg-dark-200 text-light-100 py-20'>
      <div className='w-[1110px] mx-auto'>
        <div className='flex place-content-between'>
          <img src={LogoImage} alt='Audiophile Logo' />
          <ul className='flex'>
            <li className='pl-10'>home</li>
            <li className='pl-10'>headphones</li>
            <li className='pl-10'>speakers</li>
            <li className='pl-10'>earphones</li>
          </ul>
        </div>

        <div className='flex pt-10'>
          <div className='w-1/2'>
            <p className='opacity-50'>
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
              music lovers and sound specialists who are devoted to helping you get the most out of
              personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className='w-1/2 flex items-end justify-end'>
            <ul className='flex'>
              <li className='pl-5'>
                <img src={FacebookIcon} alt='Facebook' />
              </li>
              <li className='pl-5'>
                <img src={TwitterIcon} alt='Twitter' />
              </li>
              <li className='pl-5'>
                <img src={InstagramIcon} alt='Instagram' />
              </li>
            </ul>
          </div>
        </div>
        <p className='pt-12 opacity-50'>Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
