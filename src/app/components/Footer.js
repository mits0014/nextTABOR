import Link from "next/link"
export default function Footer(){
    return(
        <footer>
            <div className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h4>Subscribe Our Newsletter:</h4>
                        </div>
                        <div className="col-lg-8">
                            <form id="subscribe" action="" method="get">
                                <div className="row">
                                <div className="col-lg-9">
                                    <fieldset>
                                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                                    </fieldset>
                                </div>
                                <div className="col-lg-3">
                                    <fieldset>
                                    <button type="submit" id="form-submit" className="main-dark-button">Submit</button>
                                    </fieldset>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="address">
                            <h4>Fale Conosco</h4>
                                <span><i className="bi bi-envelope-fill"></i>&nbsp;&nbsp;Email@tabor.com.br</span>
                                <span><i className="bi bi-envelope-fill"></i>&nbsp;&nbsp;Contato@tabor.com.br</span>
                                <span><i className="bi bi-whatsapp"></i>&nbsp;&nbsp;(45) 9 9999-9999</span>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="links">
                            <h4>Links Úteis</h4>
                            <ul>
                                <li><a href="#">Info</a></li>
                                <li><a href="#">Fotos</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Cadastro</a></li>
                                <li><a href="#">Oração</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="hours">
                            <h4>Horários de Funcionamento</h4>
                            <ul>
                                <li>Seg a sex: 10:00 as 16:00</li>
                                <li>Sab e dom: 9:00 as 16:00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="under-footer">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <span>R. Paranaguá, 2633</span>
                                    <span>São Cristovão</span>
                                    <span>Cascavel - PR</span>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <p className="copyright">Copyright 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="sub-footer">
                            <div className="row">
                                <div className="col-lg-3">
                                    <a href="index.html" className="logo"><img height="60" src="images/logo.png"/></a>
                                </div>
                                <div className="col-lg-6">
                                    <div className="menu">
                                        <ul>
                                            <li><Link href ="/" className="active">Início</Link></li>
                                            <li><Link href="/sobre"> Sobre</Link></li>
                                            <li><Link href="/eventos"> Eventos</Link></li>
                                            <li><Link href="/agenda"> Agenda</Link></li> 
                                            <li><a href="taborao.html" className="taborao">Taborão <i className="bi bi-caret-down-fill"></i></a></li> 
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="social-links">
                                        <ul>
                                            <li>
                                                <a href="https://www.instagram.com/comunidadecatolicatabor/">
                                                    <img width="20" height="20" src="icons/instagram.svg"/> &nbsp;&nbsp;
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/taborconvivio?locale=pt_BR">
                                                    <img width="20" height="20" src="icons/facebook.svg"/> &nbsp;&nbsp;
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/@comunidadecatolicatabor">
                                                    <img width="20" height="20" src="icons/youtube.svg"/> &nbsp;&nbsp;
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://open.spotify.com/playlist/5RFfWVryk1JrTvPnWHCVZ0?si=a2d83a9f9ac44967">
                                                    <img width="20" height="20" src="icons/spotify.svg"/> &nbsp;&nbsp;
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}