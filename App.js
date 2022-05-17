import './App.css'
import CountClass from './CountClass'


const minCount = 1
const maxCount = 5

function App() {
  return (
    <div className="App">           
      <CountClass minNumber={minCount} maxNumber={maxCount}/>     

    </div>
  )
}

export default App
