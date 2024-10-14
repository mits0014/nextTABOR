export default function Footer(){
    return(
        <footer>
            <div class="subscribe">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <h4>Subscribe Our Newsletter:</h4>
                        </div>
                        <div class="col-lg-8">
                            <form id="subscribe" action="" method="get">
                                <div class="row">
                                <div class="col-lg-9">
                                    <fieldset>
                                    <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                                    </fieldset>
                                </div>
                                <div class="col-lg-3">
                                    <fieldset>
                                    <button type="submit" id="form-submit" class="main-dark-button">Submit</button>
                                    </fieldset>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="address">
                            <h4>Fale Conosco</h4>
                                <span><i class="bi bi-envelope-fill"></i>&nbsp;&nbsp;Email@tabor.com.br</span>
                                <span><i class="bi bi-envelope-fill"></i>&nbsp;&nbsp;Contato@tabor.com.br</span>
                                <span><i class="bi bi-whatsapp"></i>&nbsp;&nbsp;(45) 9 9999-9999</span>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="links">
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
                    <div class="col-lg-4">
                        <div class="hours">
                            <h4>Horários de Funcionamento</h4>
                            <ul>
                                <li>Seg a sex: 10:00 as 16:00</li>
                                <li>Sab e dom: 9:00 as 16:00</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="under-footer">
                            <div class="row">
                                <div class="col-lg-6 col-sm-6">
                                    <span>R. Paranaguá, 2633</span>
                                    <span>São Cristovão</span>
                                    <span>Cascavel - PR</span>
                                </div>
                                <div class="col-lg-6 col-sm-6">
                                    <p class="copyright">Copyright 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="sub-footer">
                            <div class="row">
                                <div class="col-lg-3">
                                    <a href="index.html" class="logo"><img height="60" src="images/logo.png"/></a>
                                </div>
                                <div class="col-lg-6">
                                    <div class="menu">
                                        <ul>
                                                <li><a href="index.html" class="active">Início</a></li>
                                                <li><a href="sobre.html">Sobre</a></li>
                                                <li><a href="eventos.html">Eventos</a></li>
                                                <li><a href="agenda.html">Agenda</a></li> 
                                                <li><a href="taborao.html" class="taborao">Taborão <i class="bi bi-caret-up-fill"></i></a></li>  
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="social-links">
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