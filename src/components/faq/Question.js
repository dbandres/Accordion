import { useState } from "react";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai"
import "./Question.css";

const Question = ({question, answer}) =>{
    const [showAnswer, setShowAnswer] = useState(false)

    const handleClick = () =>{
        setShowAnswer(!showAnswer);
    }

        return(
            <div className="contariner_question">
                <div className="title_question">
                    <h4>{question}</h4>
                    <button className="btn_question" onClick={handleClick}>
                        {
                            showAnswer ? (
                                <AiOutlineArrowDown color="red"/>
                            ) : (
                                <AiOutlineArrowUp color="#1f93ff"/>
                            )
                        }
                    </button>
                </div>
                <div className="question_answer">
                    {showAnswer && <p className="text_answer">{answer}</p>}
                </div>
            </div>
        )
}
export default Question;