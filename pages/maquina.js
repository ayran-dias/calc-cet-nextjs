import React from "react";
import Image from "next/image";
import head from "/public/head.png";
import lateraldireita from "/public/lateraldireita.png";
import lateralesquerda from "/public/lateralesquerda.png";
import foot from "/public/foot.png";
import Footer from "./simulador/ComponentSimulador/Footer";
import Bandeiras from "./simulador/ComponentSimulador/Bandeiras";
import Modalidade from "./simulador/ComponentSimulador/Modalidade";
import Taxas from "./simulador/ComponentSimulador/Taxas";
import Header  from "./simulador/ComponentSimulador/Header";
import  Preco  from "./simulador/ComponentSimulador/Preco";

import {
  Container,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Col,
  Card,
  Row,
} from "react-bootstrap";
import { useState } from "react";

const scale = 1.9;

const Maquina = () => {
  return (
    <div className='background-color'>
      <div  >
        <Container fluid="xx1">
          <Col>

            <Row>
              <Image
                src={head}
                alt="head"
                width={184 * scale}
                height={81 * scale}
                objectPosition="top"
              />
            </Row>

            <Row>
              <Image
                src={lateralesquerda}
                alt="lateralesquerda"
                width={32 * scale}
                height={214 * scale}
              />

              {/*Tela da máquina*/}
              <Card
                bg="Light"
                style={{
                  width: 122 * scale,
                  height: 214 * scale,
                  padding: 0,
                  backgroundColor: "#00000",
                }}
              >
                <Header />

                <div className="Preco">
                  <h1 className="Preco" >R$</h1>
                <Preco/>

                </div>
                <Bandeiras />
                <Modalidade />
                <Taxas />
                {/*<Footer/> */}
              </Card>

              <Image
                src={lateraldireita}
                alt="lateraldireita"
                width={30 * scale}
                height={214 * scale}
              />
            </Row>
            <Row>
              <Image
                src={foot}
                alt="foot"
                width={184 * scale}
                height={56 * scale}
              />
            </Row>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Maquina;
