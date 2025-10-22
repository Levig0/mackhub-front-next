import React from 'react'

import Styles from './button.module.css';

function Button() {
  return (

<button className={Styles.cta}>
  <span>Configurar Agendamento</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

  )
}

export default Button