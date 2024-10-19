"use client";

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';

export default function Calendario( {events}) {
  moment.locale('pt-br');
  const localizer = momentLocalizer(moment);

  const eventStyleGetter = (event) => {
    const backgroundColor = event.color || '#D62243'; // Cor padrão se não houver cor definida
    return {
      style: { backgroundColor }
    };
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events} 
        startAccessor="start"
        endAccessor="end"
        toolbar = {true}
        views={{
          month: true,
          week: false,
          day: false,
        }}
        eventPropGetter={eventStyleGetter}
        style={{ height: 500 }}
      />
    </div>
  )
}
