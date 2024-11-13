import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


export default function CalendarComponent({ selectedDate, setSelectedDate }) {
    return (
        <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            formatDay={(locale, date) => moment(date).format('DD')}
        />
    )
}