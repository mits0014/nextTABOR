import Calendario from "../components/Calendario";
import Style from "./agenda.module.css";

export default function agenda(){
    return(
        <div className={Style.mainFrame }>
            <div className={Style.Calendario}>
            <Calendario> </Calendario>

            </div>
        </div>
    );
}