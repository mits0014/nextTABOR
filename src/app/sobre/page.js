import ImagemDeComposicao from "../components/ImagemDeComposicao";
import Style from "./sobre.module.css"

export default function sobre(){
    return(
        <div>
            <ImagemDeComposicao imageSrc={"/images/sobreNos.png"}/>
            <div className={Style.mainFrame}>
                <div >
                    <h1 className={Style.titulo}>Titulo</h1>
                </div>
                <div className={Style.contentFrame}>
                    <div>
                        <p>
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

                        </p>
                        <img src="/images/sobreimg1.png">
                        </img>
                    </div>
                    <div>
                        <img src="/images/sobreimg2.png">
                        </img>
                        <p>
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        </p>
                        
                    </div>
                </div>
                <div >
                    <h1 className={Style.titulo}>Titulo</h1>
                </div>
                <div className={Style.contentFrame}>
                    <div>
                        <p>
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

                        </p>
                        <img src="/images/sobreimg3.png">
                        </img>
                    </div>
                    <div>
                        <img src="/images/sobreimg5.png">
                        </img>
                        <p>
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        </p>
                        
                    </div>
                </div>
            </div>
            <ImagemDeComposicao imageSrc={"/images/montetaborimg.png"} text={"Pois estou convencido de que nem morte nem vida, nem anjos nem demônios, nem o presente nem o futuro, nem quaisquer poderes, nem altura nem profundidade, nem qualquer outra coisa na criação será capaz de nos separar do amor de Deus que está em Cristo Jesus, nosso Senhor.Romanos 8:38-39 (NVI)"}/>
        </div>      
    )
}