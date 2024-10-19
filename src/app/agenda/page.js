import Calendario from "../components/Calendario";
import Style from "./agenda.module.css";

export default function agenda(){
    return(
        <div className={Style.tamanho}>
            <Calendario> </Calendario>
        </div>
    );
}