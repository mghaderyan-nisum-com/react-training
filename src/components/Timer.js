import React from 'react';

const Timer = React.createClass({
    getInitialState() {
      return {
        date: new Date(),
      }
    },
    tick() {
      this.setState({
        date: new Date()
      })
    },
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    },
    componentWillUnmount() {
      clearInterval(this.timerID);
    },
    render() {
        return (
            <div className="timer">
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
});


export default Timer;
