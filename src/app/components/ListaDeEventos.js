"use client";
export default function ({eventList}) {
    return (
        <div>
            <div>
                <h1 style={{ marginBottom: 80 }}>EVENTOS DO MÊS</h1>
            </div>
      {eventList.map(event => (
        <div key={event.id} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
          <h2>{event.title}</h2>
          <p>{event.start.toString()} - {event.end.toString()}</p>
          <p>{event.descricao || 'Sem descrição'}</p>
        </div>
      ))}
    </div>
  );
};