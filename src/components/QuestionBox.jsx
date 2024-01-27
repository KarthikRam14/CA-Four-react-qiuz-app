import { useEffect, useState } from 'react';
import React from 'react'
import questions from '../questions';

export default function QuestionBox() {
  const [buttonClicked, setButtonClicked] = useState(true);
  // const [changeBackColor, setChangeBackColor] = useState('#6E6A6A')
  // const [changeBtnColor, setChangeBtnColor] = useState('#FFFFFF')
  const [highlightButton, setHighlightButton] = useState(true)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [optionsClicked, setOptionsClicked] = useState(null)

  const changeColor = () =>{
    setButtonClicked(!buttonClicked)
  }

  const highlight = () =>{
    setHighlightButton(!highlightButton)
  }

  const optionsOnClick = (option)=>{
    setQuestionIndex(prevIndex => prevIndex+1)
    
  }


  return (
    <div>
      <div className="main" style={{backgroundColor:buttonClicked?'#6E6A6A':'white'}}>
        <div className="header">
          <h3 style={{color: buttonClicked?'white':'#6E6A6A'}}>Kalvium</h3>
          <button className="darkOrLight" onClick={changeColor} style={{backgroundColor:buttonClicked? "white":"black",color:buttonClicked?"black":"white"}} >{buttonClicked ? "Light" :"Dark"}</button>
        </div>
        <div className="main1">
          <div className="body">
            <h2 id="qNo">Question: {questionIndex} out of 5</h2>
            <h1 id="question" style={{color: highlightButton?'blue':'red'}}>{questions[questionIndex].text}</h1>
            <div className="option">
              <button className="options" id="opt1" onClick={()=>optionsOnClick(questions[questionIndex].options[0].text)}>{questions[questionIndex].options[0].text}</button>
              <button className="options" id="opt2" onClick={()=>optionsOnClick(questions[questionIndex].options[1].text)}>{questions[questionIndex].options[1].text}</button>
              <button className="options" id="opt3" onClick={()=>optionsOnClick(questions[questionIndex].options[2].text)}>{questions[questionIndex].options[2].text}</button>
              <button className="options" id="opt4" onClick={()=>optionsOnClick(questions[questionIndex].options[3].text)}>{questions[questionIndex].options[3].text}</button>
            </div>
            <div className="footer" id="footer">
              <button className="highlight" id="highlight" onClick={highlight}>Highlight</button>
              <button className="remove" id="remove" onClick={highlight}>Remove Highlight</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
