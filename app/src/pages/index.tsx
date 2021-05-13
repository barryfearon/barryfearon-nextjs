import { NextPage } from 'next'
import React from 'react'
import styles from './index.module.scss'
import MainLayout from '../components/MainLayout/MainLayout'
import { PortfolioItem } from '../components/Portfolio-Items/PortfolioItem'

const Home: NextPage = () => (
  <MainLayout>
    <section className={`${styles.bfPortfolio} bg-bf5`}>
      <div className='text-center'>
        <div className='row justify-content-center'>
          <PortfolioItem />
        </div>
      </div>
    </section>
  </MainLayout>
)

export default Home
