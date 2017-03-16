import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import styles from './App.scss'

const App = () => (
  <div className={styles.container}>
    <Header />
    <Home />
    <Footer />
  </div>
)

export default App
