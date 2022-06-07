import './App.css'
import Hw3Book from './Hw3Book'

const App = () => {
  return (
      //hw3
    <div>
      <h1 id="hello" className="class1">Hello from React</h1>
      < Hw3Book
        name="JS for beginners"
        year={2018}
        price={1000}
      />
      < Hw3Book
        name="React"
        year={2020}
        price={1200}
      />
      < Hw3Book
        name="Vue JS"
        year={2019}
        price={1100}
      />
    </div>
  )
}

export default App

//import Hw2MaxMin from './Hw2MaxMin'
//const minCount = 1
//const maxCount = 5