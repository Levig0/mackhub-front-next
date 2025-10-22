import React from 'react'

import Styles from './quiz.module.css';

function QuizSection() {
  return (
        <div>
      <div className="sectionHeader">
      <i className="fa-regular fa-file-lines" style={{ color: "#b01c1c" }}></i>
      <h2>Quiz </h2>
    </div>
          <div className={Styles.placeHolder}>Em breve</div>
    </div>
  )
}

export default QuizSection