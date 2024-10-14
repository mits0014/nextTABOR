import Eventos from "./components/Eventos";
import Map from "./components/Mapa";
import Caroseu from "./components/MainCarroseu";
import 'bootstrap/dist/css/bootstrap.min.css';
import customStyles from './styles/custon.module.css';
import "react-bootstrap";
import ImagemDeComposicao from "./components/ImagemDeComposicao";


export default function Home() {
  return (
  <div className="homeBody">
        {/* começo do baner */}
        <div className="main-banner"></div>
          <div className={customStyles.showEventsCarousel} >
            <div className="container" >
              <Caroseu/>                
          </div>
        </div>
        {/* fim do baner /caroseu */}
        {/* iniciando o texto do conheça*/}
        <div className="conheca">
          <div className="container">
              <div className="row">
                  <div className="col-lg-9">
                      <div className="left-content">
                          <h4>Conheça a comunidade Tabor:</h4>
                          <p>O Taborão é um evento anual promovido pela Arquidiocese de Cascavel, que se destaca como uma celebração de fé e comunidade para jovens de todo o Brasil. Este evento, que tem ganhado crescente relevância e notoriedade, tem como objetivo principal proporcionar uma experiência espiritual rica e contemporânea, capaz de conectar a juventude ao ensinamento e à vivência cristã de maneira atual e envolvente.</p>
                      </div>
                  </div>
                  <div className="col-lg-3">
                      <div className="right-content">
                          <h5><i className="fa fa-map-marker"></i> Visite-Nos</h5>
                          <span>R. Paranaguá, 2633</span>
                          <span>São Cristovão</span>
                          <span>Cascavel - PR</span>
                          <div className="text-button"><a href="show-events-details.html">Precisa da Rota? <i className="fa fa-arrow-right"></i></a></div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      <Map/>
      <Eventos/>
      <ImagemDeComposicao imageSrc={"/images/homilia.png"} text={"Naquele tempo, traziam crianças para que Jesus as tocasse, mas os discípulos as repreendiam. Vendo isso, Jesus se aborreceu e disse: Deixai vir a mim as crianças, não as proibais, porque o reino de Deus é dos que são como elas. Eu digo: quem não receber o reino de Deus como uma criança, não entrará nele.\n (Mc 10,13-16)"}/>
  </div>
  );
}