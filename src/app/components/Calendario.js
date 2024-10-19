"use client";

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function Calendario() {
  moment.locale('pt-br');
  const localizer = momentLocalizer(moment);
  
  // Lista de eventos
  const events = [
    {
      title: 'Reunião de Trabalho',
      start: new Date(2024, 9, 20, 10, 0),
      end: new Date(2024, 9, 20, 11, 0),
      allDay: false,
    },
    {
      title: 'Almoço com Cliente',
      start: new Date(2024, 9, 21, 13, 0),
      end: new Date(2024, 9, 21, 14, 0),
      allDay: false,
    },
    {
      title: 'Conferência',
      start: new Date(2024, 9, 25),
      end: new Date(2024, 9, 25),
      allDay: true,
    }
  ];

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
