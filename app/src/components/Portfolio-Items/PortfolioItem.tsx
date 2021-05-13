import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './PortfolioItem.module.scss'
import { portfolioThumbs } from '../../data/portfolioThumbs'

export const PortfolioItem = () => {
  return (
    <>
      {portfolioThumbs.map((portfolioThumb) => (
        <a
          key={portfolioThumb.id}
          className='col-sm-12 col-md-6 col-lg-4 p-0 bg-bf1 text-white lazyload'
          href='nativegaming.html'
        >
          <div className={`${styles.itemCardBody} card-body`} id={portfolioThumb.id}>
            <Image
              className={`${styles.imageThumb}`}
              src={portfolioThumb.imageUrl}
              layout='responsive'
              width={635}
              height={412}
              alt='Native Gaming'
            />
            <div className={`${styles.itemInfo}`}>
              <h4 className='card-title mb-0'>{portfolioThumb.title}</h4>
              <p className='card-text mb-0 mb-lg-3'>{portfolioThumb.description}</p>
              <div className='vendor-logos d-flex justify-content-center align-items-center'>
                <button className='btn btn-link btn-sm d-block d-lg-none'>
                  Click for more info
                </button>
                <div className='col-12 d-none d-lg-block'>
                  {portfolioThumb.vendorLogos.map((ai) => (
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      key={ai.image}
                      src={ai.image}
                      className='mx-2'
                      alt={ai.alt}
                      width={ai.width}
                      height={ai.height}
                      data-bs-toggle='tooltip'
                      data-bs-placement='top'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  )
}
