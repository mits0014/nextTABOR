export default function Eventos(){
    return(
    <>
        <div className="Eventos">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2>Our Venues & Tickets</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="venue-item">
                            <div className="thumb">
                                <img src="images/venue-01.jpg" alt=""/>
                            </div>
                            
                            <div className="down-content">
                                <div className="left-content">
                                    <div className="main-white-button">
                                        <a href="ticket-details.html">DETALHES</a>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h4>Radio City Musical Hall</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur vinzi iscing elit, sed doers kontra.</p>
                                    <ul>
                                        <li><i className="fa fa-sitemap"></i>250</li>
                                        <li><i className="fa fa-user"></i>500</li>
                                    </ul>
                                    <div className="price">
                                    <div className="priceSplit">
                                        <span>1 ticket</span>
                                        <samp>from <em>$45</em></samp>
                                    </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="venue-item">
                            <div className="thumb">
                                <img src="images/venue-02.jpg" alt=""/>
                            </div>
                            <div className="down-content">
                                <div className="left-content">
                                    <div className="main-white-button">
                                        <a href="ticket-details.html">DETALHES</a>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h4>Madison Square Garden</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur vinzi iscing elit, sed doers kontra.</p>
                                    <ul>
                                        <li><i className="fa fa-sitemap"></i>450</li>
                                        <li><i className="fa fa-user"></i>650</li>
                                    </ul>
                                    <div className="price">
                                    <div className="priceSplit">
                                        <span>1 ticket</span>
                                        <samp>from <em>$45</em></samp>
                                    </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="venue-item">
                            <div className="thumb">
                                <img src="images/venue-03.jpg" alt=""/>
                            </div>
                            <div className="down-content">
                                <div className="left-content">
                                    <div className="main-white-button">
                                        <a href="ticket-details.html">DETALHES</a>
                                    </div>
                                </div>
                                <div className="right-content">
                                    <h4>Royce Hall</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur vinzi iscing elit, sed doers kontra.</p>
                                    <ul>
                                        <li><i className="fa fa-sitemap"></i>450</li>
                                        <li><i className="fa fa-user"></i>750</li>
                                    </ul>
                                    <div className="price">
                                    <div className="priceSplit">
                                        <span>1 ticket</span>
                                        <samp>from <em>$45</em></samp>
                                    </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="coming-events">
        <div class="left-button">
            <div class="main-white-button">
                <a href="shows-events.html">Discover More</a>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="event-item">
                        <div class="thumb">
                            <a href="event-details.html"><img src="images/event-01.jpg" alt=""/></a>
                        </div>
                        <div class="down-content">
                            <a href="event-details.html"><h4>Radio City Musical Hall</h4></a>
                            <ul>
                                <li><i class="fa fa-clock-o"></i> Tuesday: 15:30-19:30</li>
                                <li><i class="fa fa-map-marker"></i> Copacabana Beach, Rio de Janeiro</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="event-item">
                        <div class="thumb">
                            <a href="event-details.html"><img src="images/event-02.jpg" alt=""/></a>
                        </div>
                        <div class="down-content">
                            <a href="event-details.html"><h4>Madison Square Garden</h4></a>
                            <ul>
                                <li><i class="fa fa-clock-o"></i> Wednesday: 08:00-14:00</li>
                                <li><i class="fa fa-map-marker"></i> Copacabana Beach, Rio de Janeiro</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="event-item">
                        <div class="thumb">
                            <a href="event-details.html"><img src="images/event-03.jpg" alt=""/></a>
                        </div>
                        <div class="down-content">
                            <a href="event-details.html"><h4>Royce Hall</h4></a>
                            <ul>
                                <li><i class="fa fa-clock-o"></i> Thursday: 09:00-23:00</li>
                                <li><i class="fa fa-map-marker"></i> Copacabana Beach, Rio de Janeiro</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
    );
}