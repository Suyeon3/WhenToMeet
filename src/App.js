import './App.css';
import { useState } from 'react'
import DateDisplay from './components/DateDisplay';
import CalendarComponent from './components/Calendar';
import CreateBtn from './components/CreateBtn';
import TimeSelectWrap from './components/TimeSelectWrap';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [timeOptions, setTimeOptions] = useState([]);

  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  }
  const handleEndTime = (e) => {
    setEndTime(e.target.value);
  }

  const handleTimeOptions = (list) => {
    setTimeOptions(list);
  }


  return (
    <>
      <CalendarComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <DateDisplay selectedDate={selectedDate} />
      <TimeSelectWrap
        timeOptions={timeOptions}
        handleTimeOptions={handleTimeOptions}
        handleStartTime={handleStartTime}
        handleEndTime={handleEndTime}
      />
      <CreateBtn startTime={startTime} endTime={endTime}/>
    </>
  );
}

export default App;
