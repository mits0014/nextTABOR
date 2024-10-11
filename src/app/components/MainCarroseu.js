"use client";
import { Carousel, Row, Col } from "react-bootstrap";
import Image from "next/image";

let alturaImagem = 300;
let larguraImagem = 300;


export default function Contact({ children }) {
  

    return (
      <Carousel controls = {false} indicators={false}>
      <Carousel.Item interval = {3000} >
        <Row>
          <Col>
            <Image className=".d-block" src="/images/show-events-01.jpg" alt="Evento 1" width={larguraImagem} height={alturaImagem} />
          </Col>
          <Col>
            <Image className=".d-block" src="/images/show-events-02.jpg" alt="Evento 2" width={larguraImagem} height={alturaImagem} />
          </Col>
          <Col>
            <Image className=".d-block" src="/images/show-events-03.jpg" alt="Evento 3" width={larguraImagem} height={alturaImagem} />
          </Col>
          <Col>
            <Image className=".d-block" src="/images/show-events-03.jpg" alt="Evento 3" width={larguraImagem} height={alturaImagem} />
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item interval = {3000}>
        <Row>
          <Col>
            <Image className=".d-block" src="/images/show-events-03.jpg" alt="Evento 2" width={larguraImagem} height={alturaImagem} />
          </Col>
          <Col>
            <Image className=".d-block" src="/images/show-events-03.jpg" alt="Evento 3" width={larguraImagem} height={alturaImagem} />
          </Col>
          <Col>
            <Image className=".d-block" src="/images/show-events-03.jpg" alt="Evento 1" width={larguraImagem} height={alturaImagem} />
          </Col>
          <Col>
            <Image className=".d-block" src="/images/show-events-03.jpg" alt="Evento 3" width={larguraImagem} height={alturaImagem} />
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
      
    )
  }