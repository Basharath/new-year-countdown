import React from 'react';

export default class CountDown extends React.Component {
  state = {
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
    nextYear: '',
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.getCountdown();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCountdown() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const nextYearTime = new Date(
      `January 1 ${currentYear + 1} 00:00:00`
    ).getTime();
    const currentYearTime = currentDate.getTime();
    const leftTime = nextYearTime - currentYearTime;
    const days = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    const hours = ('0' + (Math.floor(leftTime / 1000 / 60 / 60) % 24)).slice(
      -2
    );
    const minutes = ('0' + (Math.floor(leftTime / 1000 / 60) % 60)).slice(-2);
    const seconds = ('0' + (Math.floor(leftTime / 1000) % 60)).slice(-2);

    this.setState({ days, hours, minutes, seconds, nextYear: currentYear + 1 });
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="new-year-countdown">New Year Countdown</h1>
          <div className="countdown">
            <div className="time">
              <h2 className="days">{this.state.days}</h2>
              <span className="title">Days</span>
            </div>
            <div className="time">
              <h2 className="hours">{this.state.hours}</h2>
              <span className="title">Hours</span>
            </div>
            <div className="time">
              <h2 className="minutes">{this.state.minutes}</h2>
              <span className="title">Minutes</span>
            </div>
            <div className="time">
              <h2 className="seconds">{this.state.seconds}</h2>
              <span className="title">Seconds</span>
            </div>
          </div>
          <div className="new-year">{this.state.nextYear}</div>
        </div>
      </>
    );
  }
}
