import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function(){
  var calendarE1 = document.getElementByTd('calendar');
  
  var calendar = new Calendar(calendarE1, {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth'
  });
  
  calendar.render();
});