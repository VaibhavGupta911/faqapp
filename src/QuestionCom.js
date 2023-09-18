import { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
export default function QuestionCom({ question, answer }) {
    const [isshowing, setIsdhowing] = useState(false);
    return (
        <div>
            <article className="article-question" onClick={() => setIsdhowing(!isshowing)}>
                <article >
                    <h2 className={`${isshowing && "clicked"}`}>
                        {question}
                    </h2>
                    <div>{isshowing ? <FaChevronUp color='hsl(14, 88%, 65%)' /> : <FaChevronDown color='hsl(14, 88%, 65%)' />}</div>

                </article>
                {isshowing ? <p className="answer-p">{answer}</p> : null}
            </article>
        </div>
    )
}