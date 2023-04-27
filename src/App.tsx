import './App.css'
import { QuizManagerComponents } from './components/QuizManager'

function App() {
 

  return (
    <>
      <h1 className='font-bold text-5xl text-center text-indigo-700'>LE QUIZ DES CAPITALES</h1>
      <div className="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
        <QuizManagerComponents/>
      </div>
    </>
  )
}

export default App
