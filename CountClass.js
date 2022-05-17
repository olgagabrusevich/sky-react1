import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { curCount: props.minNumber }
  }
  //подскажите пожалуйста как связать this.state со значением в input
  increment = () => {
    if (this.state.curCount < this.props.maxNumber) {
      this.setState((prevState) => ({ curCount: Number(prevState.curCount) + 1 }))
    }    
  }

  decrease = () => {
    if (this.state.curCount > this.props.minNumber) {
      this.setState((prevState) => ({ curCount: Number(prevState.curCount) -1 }))    
    }
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.increment}>
          Жми +
        </button>   
        <span>{this.state.curCount}</span>          
        <button type="button" onClick={this.decrease}>
          Жми -
        </button>         
        <input type="text" value={curCount}></input>               
                     
      </div>
    )
  }
}

