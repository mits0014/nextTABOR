// pages/index.js
"use client"
import React, { useState } from 'react';
import Pagination from '../components/Paginacao';
import 'font-awesome/css/font-awesome.min.css';

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

const ITEMS_PER_PAGE = 5;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular o índice inicial e final dos itens da página atual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, endIndex);

  // Calcular o total de páginas
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  return (
    <div >
    <div className="page-heading-shows-events">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Our Shows & Events</h2>
                    <span>Check out upcoming and past shows & events.</span>
                </div>
            </div>
        </div>
    </div>
    <div>
      <div className="shows-events-tabs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row" id="tabs">
                <div className="col-lg-12">
                  <div className="heading-tabs">
                    <div className="row">
                      <div className="col-lg-8">
                        <ul>
                          <li><a href='#tabs-1'>Upcoming</a></li>
                          <li><a href='#tabs-2'>Past</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <div className="main-dark-button">
                          <a href="ticket-details.html">Purchase Tickets</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='tabs-content'>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="heading"><h2>Upcoming</h2></div>
                      </div>
                      <div className="col-lg-3">
                        <div className="sidebar">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="heading-sidebar">
                                <h4>Sort The Upcoming Shows & Events By:</h4>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="month">
                                <h6>Month</h6>
                                <ul>
                                  <li><a href="#">July</a></li>
                                  <li><a href="#">August</a></li>
                                  <li><a href="#">September</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="category">
                                <h6>Category</h6>
                                <ul>
                                  <li><a href="#">Pop Music</a></li>
                                  <li><a href="#">Rock Music</a></li>
                                  <li><a href="#">Hip Hop Music</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="venues">
                                <h6>Venues</h6>
                                <ul>
                                  <li><a href="#">Radio City Musical Hall</a></li>
                                  <li><a href="#">Madison Square Garden</a></li>
                                  <li><a href="#">Royce Hall</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-9">
                        <div className="col-lg-12" >
                        {currentItems.map((item, index) => (
                          <div className="event-item" key={index}>
                              <div className="row" >
                                <div className="col-lg-4">
                                  <div className="left-content">
                                    <h4>Super Rock Festival</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                                    <div className="main-dark-button"><a href="event-details.html">Discover More</a></div>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="thumb">
                                    <img src="/images/event-page-02.jpg" alt=""/>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div  style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
                                  <div className="right-content">
                                    <ul>
                                      <li style={{display: 'flex', gap: '10px' }}>
                                        <i className="fa fa-clock-o"></i>
                                        <div>
                                          <h6>
                                          Oct 22 Saturday
                                          </h6>
                                          <h6>
                                          10:00 AM - 09:00 PM
                                          </h6>
                                        </div>                                      
                                      </li>
                                      <li style={{display: 'flex', gap: '10px' }}>
                                        <i className="fa fa-map-marker"></i>
                                        <span>Copacabana Beach, Rio de Janeiro</span>
                                      </li>
                                      <li style={{display: 'flex', gap: '10px' }}>
                                        <i className="fa fa-users"></i>
                                        <span>480 Total Guests Attending</span>
                                      </li>
                                    </ul>
                                  </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                        ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="pagination">
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}  

export default HomePage;
