import React from 'react'

import styles from './Header.module.scss'

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <header className={`${styles.bfTitle} bg-bf5 d-flex justify-content-center align-items-center`}>
      <div className='container'>
        <div className='row align-items-center my-4'>
          <div className='col-12 col-lg-4'>
            <h2 className='text-center my-4 mb-lg-0'>Digital Design Online Portfolio</h2>
          </div>
          <div className='col-12 col-lg-4 mb-4 mb-lg-0 d-flex justify-content-center justify-content-lg-center'>
            <img
              src='/images/barry-fearon.svg'
              width='436'
              height='130'
              alt='barry fearon'
              className='img-fluid'
            />
          </div>
          <div className='col-12 col-lg-4 mb-4 my-lg-4 d-flex flex-column flex-lg-row justify-content-center align-items-lg-start justify-content-lg-around'>
            <div
              className={`${styles.contactIcons} d-flex flex-row justify-content-around justify-content-lg-center`}
            >
              <a href='https://www.linkedin.com/in/barry-fearon/' target='_blank' rel='noopener'>
                <img
                  src='/images/linked-in.svg'
                  width='38'
                  height='38'
                  alt='linkedin'
                  className='mx-lg-5'
                />
              </a>

              <a href='tel:00447624452446' target='_blank' rel='noopener'>
                <img
                  src='/images/phone.svg'
                  width='38'
                  height='38'
                  alt='phone'
                  className='mx-lg-5'
                />
              </a>

              <a
                className='email-address'
                href='mailto:barryfearon@gmail.com'
                target='_blank'
                rel='noopener'
              >
                <img
                  src='/images/plane.svg'
                  width='38'
                  height='38'
                  alt='email'
                  className='mx-lg-5'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
