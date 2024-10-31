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
        },
        {
          id: 4,
          title: 'Planejamento do Projeto',
          start: new Date(2024, 9, 22, 9, 0),
          end: new Date(2024, 9, 22, 11, 0),
          allDay: false,
          descricao: 'Planejar as próximas etapas do projeto com a equipe'
        },
        {
          id: 5,
          title: 'Reunião com a Diretoria',
          start: new Date(2024, 9, 23, 15, 0),
          end: new Date(2024, 9, 23, 16, 30),
          allDay: false,
          descricao: 'Discutir os resultados trimestrais e metas para o próximo trimestre'
        },
        {
          id: 6,
          title: 'Workshop de Inovação',
          start: new Date(2024, 9, 24, 9, 0),
          end: new Date(2024, 9, 24, 12, 0),
          allDay: false,
          descricao: 'Participar do workshop sobre inovação em tecnologia'
        },
        {
          id: 7,
          title: 'Jantar de Networking',
          start: new Date(2024, 9, 26, 19, 0),
          end: new Date(2024, 9, 26, 21, 0),
          allDay: false,
          descricao: 'Jantar com profissionais da área para trocar experiências'
        },
        {
            id: 8,
            title: 'Evento novo',
            start: new Date(2024, 9, 8, 19, 0),
            end: new Date(2024, 9, 8, 21, 0),
            allDay: false,
            descricao: 'esse aqui é para testar se ele vai reealmente cirar um novo'
          },
          {
            id: 9,
            title: 'Treinamento',
            start: new Date(2024, 9, 1, 19, 0),
            end: new Date(2024, 9, 1, 21, 0),
            allDay: false,
            descricao: 'esse aqui é para testar se ele vai reealmente cirar um novo'
          },
          {
            id: 10,
            title: 'Coisas',
            start: new Date(2024, 9, 6, 19, 0),
            end: new Date(2024, 9, 6, 21, 0),
            allDay: false,
            descricao: 'esse aqui é para testar se ele vai reealmente cirar um novo'
          }
    ];
    
    return(
    <div className={Style.mainFrame}>
        <div className={Style.Calendario}>
            <div className={Style.separador}>
                <Calendario events={events} />
            </div>
            <div>
                <ListaEventos eventList={events} />
            </div>
        </div>
    </div>
    );
}