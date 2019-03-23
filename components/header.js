import React from 'react'

import theme from '../theme'

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    padding: '1rem 2rem',
    justifyContent: 'space-between',
  },
  image: {
    height: '2rem',
    borderWidth: 0,
  },
}

function Header() {
  return (
    <header style={styles.header}>
      <img
        src={`./assets/images/codemotion_${theme.name}.png`}
        alt="Codemotion"
        style={styles.image}
      />
      <a
        rel="license"
        href="http://creativecommons.org/licenses/by-nc-sa/3.0/"
        target="_blank">
        <img
          alt="Creative Commons License"
          style={styles.image}
          src="./assets/images/cc_license.png"
        />
      </a>
    </header>
  )
}

export default Header
