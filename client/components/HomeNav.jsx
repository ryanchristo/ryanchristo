import React, { PropTypes } from 'react'
import styles from './HomeNav.scss'

const HomeNav = ({ animateScroll, showHome }) => (
  <ul className={showHome ? styles.list : styles.listHidden}>
    <li className={styles.item}>
      <button className={styles.link} onClick={() => animateScroll('about')}>
        {'about'}
      </button>
    </li>
    <li className={styles.item}>
      <button className={styles.link} onClick={() => animateScroll('software')}>
        {'software'}
      </button>
    </li>
    <li className={styles.item}>
      <button className={styles.link} onClick={() => animateScroll('media')}>
        {'media'}
      </button>
    </li>
    <li className={styles.item}>
      <button className={styles.link} onClick={() => animateScroll('connect')}>
        {'connect'}
      </button>
    </li>
    <li className={styles.item}>
      <span className={styles.divider}>
        {'|'}
      </span>
    </li>
    <li className={styles.item}>
      <a className={styles.link} href="https://medium.com/@ryanchristo" rel="noopener noreferrer" target="_blank">
        {'blog'}
      </a>
    </li>
  </ul>
)

HomeNav.propTypes = {
  animateScroll: PropTypes.func.isRequired,
  showHome: PropTypes.bool.isRequired,
}

export default HomeNav