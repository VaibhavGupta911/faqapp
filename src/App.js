import { useState } from 'react';
import './App.css';
import desktop from './images/illustration-woman-online-desktop.svg'
import mobile from './images/illustration-woman-online-mobile.svg'
import QuestionCom from './QuestionCom';
import Questions from './Questions'
function App() {
  const [quest] = useState(Questions);
  return (
    
      <div className='container'>
        <article >
          <picture>
            <source media="(min-width:786px)" srcSet={desktop} />
            <img className='image' src={mobile} alt='' />
          </picture>
        </article>
        <article>
          <h1>FAQ</h1>
          {quest.map(
            (e, index) => (<QuestionCom key={index} question={e.question} answer={e.answer} />)
          )}
        </article>
      </div>
    
  );
}

export default App;
