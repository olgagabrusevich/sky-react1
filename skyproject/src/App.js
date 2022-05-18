import './App.css'
import Hw2MaxMin from './Hw2MaxMin'
import Hw3Book from './Hw3Book'
import Hw3App from './Hw3App'


const minCount = 1
const maxCount = 5
const name = 'JS for beginners'
const year = 2018
const price = 1000
const props = {}

function App() {
  return (
    <div className="App" id='hello'>           
      <Hw2MaxMin minNumber={minCount} maxNumber={maxCount}/>         
      <Hw3Book name={name} year={year} price={price} /> 
      <Hw3Book name="React for beginners" year="2019" price="1200" />
      <Hw3Book name="Vue for beginners" year="2021" price="1500" /> 
      <Hw3App />   
    </div>    
  )
}

export default App