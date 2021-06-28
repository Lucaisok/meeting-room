import './App.css';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("de");
const localizer = momentLocalizer(moment);

const myEventsList = [] //empty for now

export function Cal () {
    return (
        <div>
      <h1>Meeting Room</h1>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
    )
}