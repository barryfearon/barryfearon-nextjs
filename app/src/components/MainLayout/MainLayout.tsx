import Head from 'next/head'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from './Header'
import styles from './MainLayout.module.scss'

interface IMainLayoutProps {
  children?: JSX.Element[] | JSX.Element | null
  metaTitle?: string | null
  pageTitle?: string | null
  siteTitle?: string | null
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  metaTitle,
  pageTitle,
  siteTitle
}) => {
  return (
    <>
      <Head>
        <title>
          {metaTitle || `${pageTitle || ''} | ${siteTitle || 'Barry Fearon - Online Portfolio'}`}
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, shrink-to-fit=no' />
        <link rel='apple-touch-icon' sizes='180x180' href='images/icons/apple-touch-icon.png' />
        <link rel='icon' sizes='72x72' href='images/icons/icon-72x72.png' />
        <link rel='icon' sizes='96x96' href='images/icons/icon-96x96.png' />
        <link rel='icon' sizes='128x128' href='images/icons/icon-128x128.png' />
        <link rel='icon' sizes='144x144' href='images/icons/icon-144x144.png' />
        <link rel='icon' sizes='152x152' href='images/icons/icon-152x152.png' />
        <link rel='icon' sizes='192x192' href='images/icons/icon-192x192.png' />
        <link rel='icon' sizes='384x384' href='images/icons/icon-384x384.png' />
        <link rel='icon' sizes='512x512' href='images/icons/icon-512x512.png' />
        <meta
          name='description'
          content='Barry Fearon - Online Portfolio of digital design work, showcasing responsive website and email design, User Interface (UI) & User Experience (UX) wireframe design and print ready artwork'
        />
      </Head>
      <div className={`${styles.browserNotSupported}`}>
        <h1 className='mb-5'>Browser Not Supported</h1>
        <p>Your browser is not supported on this website.</p>
        <p>please consider using a different browser from the options below:</p>
        <div className='d-flex flex-wrap justify-content-center'>
          <div className='chrome mx-4'>
            <a
              href='https://www.google.co.uk/intl/en_uk/chrome/update/'
              target='_blank'
              rel='noopener'
            >
              <img src='/images/chrome-logo.svg' alt='chrome logo' width='150' height='150' />
              <h3>Chrome</h3>
            </a>
          </div>
          <div className='firefox mx-4'>
            <a href='https://www.mozilla.org/en-US/firefox/new/' target='_blank' rel='noopener'>
              <img
                src='/images/firefox-logo.svg'
                alt='firefox logo'
                width='150'
                height='150'
                className='p-3'
              />
              <h3>Firefox</h3>
            </a>
          </div>
          <div className='edge mx-4'>
            <a href='https://www.microsoft.com/en-us/edge' target='_blank' rel='noopener'>
              <img src='/images/microsoft_edge-logo.svg' alt='edge logo' height='150' width='150' />
              <h3>Edge</h3>
            </a>
          </div>
          <div className='safari mx-4'>
            <a href='https://support.apple.com/downloads/safari' target='_blank' rel='noopener'>
              <img src='/images/safari-logo.svg' alt='safari logo' height='150' width='150' />
              <h3>Safari</h3>
            </a>
          </div>
        </div>
      </div>
      <Header />
      <main className={styles.mainContent}>
        <Container fluid={true} className='px-0'>
          {children}
        </Container>
      </main>
    </>
  )
}

export default MainLayout
