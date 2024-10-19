import Calendario from "../components/Calendario";
import ListaEventos from "../components/ListaDeEventos";
import Style from "./agenda.module.css";

export default function agenda() {
    // Lista de eventos
  const events = [
    {
      id: 1, 
      title: 'Reunião de Trabalho',
      start: new Date(2024, 9, 20, 10, 0),
      end: new Date(2024, 9, 20, 11, 0),
      allDay: false,
      descricao: 'Reunião para discutir as paradas'
    },
    {
      id: 2,
      title: 'Almoço com Cliente',
      start: new Date(2024, 9, 21, 13, 0),
      end: new Date(2024, 9, 21, 14, 0),
      allDay: false,
    },
    {
      id: 3,
      title: 'Conferência',
      start: new Date(2024, 9, 25),
      end: new Date(2024, 9, 25),
      allDay: true,
    }
  ];
    return(
        <div className={Style.mainFrame }>
            <div className={Style.Calendario}>
            <Calendario events={events}> </Calendario>
            <ListaEventos eventList={events} ></ListaEventos>

            </div>
        </div>
    );
}