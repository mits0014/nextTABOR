import Image from "next/image";
import styles from "./styles/page.module.css";
import MainCarroseu from "./components/MainCarroseu";
import { evento1,evento2,evento3,evento4 } from "../../public/images/imagesHome";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <>
    <div className={styles}>
      <div className="homeBody">
        <div className="home">

          <div className="main-banner">

          </div>
          <div className="show-events-carousel">
            <div className="container">
              <MainCarroseu>
              </MainCarroseu>


            

              {/* <div className="row">
                <div className="col-lg-12">
                  <div className="owl-show-events owl-carousel owl-loaded owl-drag">
                    <div className="item">
                      <a href=""><Image src={evento2} alt="" /></a>
                    </div>
                    <div className="item">
                      <a href=""><Image src={evento1} alt="" /></a>
                    </div>
                    <div className="item">
                      <a href=""><Image src={evento3} alt="" /></a>
                    </div>
                    <div className="item">
                      <a href=""><Image src={evento2} alt="" /></a>
                    </div>
                    <div className="item">
                      <a href=""><Image src={evento4} alt="" /></a>
                    </div>
                    <div className="item">
                      <a href=""><Image src={evento1} alt="" /></a>
                    </div>
                    <div className="item">
                      <a href=""><Image src={evento3} alt="" /></a>
                    </div>
                    <div className="item">
                      <a href=""><Image src={evento4} alt="" /></a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
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
                    <span>R. Paranaguá, 2633São CristovãoCascavel - PR</span>
                    <div className="text-button"><a href="show-events-details.html">Precisa da Rota? <i className="fa fa-arrow-right"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
