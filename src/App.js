
import './App.css';
import Faq from './components/faq/Faq';
import Question from './components/faq/Question';
import {questions} from "./components/faq/data";

function App() {
  return (
    <div>
      <Faq/>
      {
        questions.map((question) => {
          return <Question question={question.question} answer={question.answer}/>
        })
      }
    </div>
  );
}

export default App;
