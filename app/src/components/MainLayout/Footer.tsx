import React from 'react'

import styles from './Footer.module.scss'

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = ({}) => {
  return <div className={styles.footer}>Footer Here</div>
}

export default Footer
