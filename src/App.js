import React from 'react';
import ReactDOM from 'react-dom';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
var Bootstrap = require('react-bootstrap') ;
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = time => (minuteSeconds - time / 1000) | 0;
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = time => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = time => (time / daySeconds) | 0;



function App()
{
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds
    
  
  
    return(
        <div className="App">
            <header className="aheader">
                <h2>Project Overview</h2>
                <h4>Water Conservation</h4>
            </header>
            <div className="box">
                <div className="column1">
                  <div className="shadow-box-example hoverable positioned">
                    <h4 className="ibox2">Days Left</h4>
                    <hr/>
                  <div className="timer">
                  <CountdownCircleTimer
        {...timerProps}
        colors={[["#7E2E84"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}>
        {({ elapsedTime }) =>
          renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#D14081"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime("hours", getTimeHours(daySeconds - elapsedTime / 1000))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#EF798A"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {({ elapsedTime }) =>
          renderTime(
            "minutes",
            getTimeMinutes(hourSeconds - elapsedTime / 1000)
          )
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
      >
        {({ elapsedTime }) =>
          renderTime("seconds", getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
                    
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col">Project Owner<br/>
                    Balakumar
                    </div>
                    <div className="col">
                      Project Mentor<br/>
                       Goutham Ramesh
                    </div>
                    <div className="col">
                      Reprts Submitted <br/>5
                    </div>
                   
                   </div>
                   </div>
                </div>
                <div className="column2" >
                  <div className="ic">
                    <div className="rowr">
                    <div className="colr hoverable">
                      <a href="">
                      <div className="incol">Submit New Report</div>
                      </a>
                      </div>
                    </div>
                    <div className="rowr">
                      <div className="colr hoverable">
                      <a href="Submit.js">
                      <div className="incol">View Reports</div>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default App;
