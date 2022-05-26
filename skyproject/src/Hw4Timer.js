import React from 'react';
//import './styles.css';

export default class ReacTimer extends React.Component {
    constructor(props){
        super(props)  
        this.state = {
            count: 0,
            isCounting: false,
            timer: {},
        }
        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleStart(){
        this.setState({isCounting: true})
        this.timer = setInterval(this.start, 1000)
    }

    handleStop(){
        this.setState({isCounting: false})
        clearInterval(this.timer);
    }

    handleReset(){
        this.setState({isCounting: true})
        clearInterval(this.timer);
        this.setState({timer: 0 })
    }

    start = () => {
        this.setState((prevState) => {
            return {count: Number(prevState.count) + 1}
        })
    }

    componentDidMount() {
        this.timer = setInterval(this.start, 1000)
      }

    componentWillUnmount() {
       clearInterval(this.timer)
    }

    //componentDidUpdate() {} не понимаю какое здесь условие писать

    render() {
        return (
            <div className="ReacTimer">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}