import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Answer.css';
import { Helmet } from 'react-helmet';
import { questions } from './Quiz'

const QuestionAns = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    // var a = Math.floor(Math.random() * 11)
    // console.log(a)
    // console.log(questions[a])
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    };
    return (
        <center>
            {/* for custumize title */}
            <Helmet>
                <title>Quiz Start </title>
            </Helmet>
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        Your Score is : {score} out of : {questions.length}<br />
                        {/* score in percentage */}
                        <p><strong>{Math.floor((score / questions.length) * 100)}%</strong></p>
                        <Link to='/'>Tap to play Again...!</Link>
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>

                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <div>
                                    <button key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </center>
    )
}

export default QuestionAns;
