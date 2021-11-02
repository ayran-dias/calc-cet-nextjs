import Head from "next/head";

import { Card, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { render } from "react-dom";
import { useState } from "react";
import { useEffect } from "react";
import React, { Component } from "react";
import TableInput from "./components/TableInput";

export default function Home() {
  return (
    <div>
      <Card
        bg="success"
        text="white"
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <br />
        <h2> Calculadora CET - Brasil Profundo</h2>
        <br />
      </Card>
      <Head>
        <title>Calculadora CET</title>
        <meta name="description" content="For use workers" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <br />

      <TableInput></TableInput>
      <br />
      <Card
        bg="success"
        text="white"
        style={{
          width: "100%",
          alignItems: "center",
          margin: "auto",
          marginTop: "10px",
          marginBlockStart: "1em",
        }}>
        <br />
        <img alt="" src="/favicon.png" width="30" height="30" />

        <h2>CET Brasil Profundo</h2>

        <h7>Por Ayran Dias</h7>
        <br />
        <br />
      </Card>
    </div>
  );
}
