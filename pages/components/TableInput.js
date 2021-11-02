import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import React, { Component } from "react";
import Image from "next/image";
import vm from "/public/vm.png";
import elo from "/public/elo.png";
import Table from "react-bootstrap/Table";
import InputMask from "react-input-mask";

class TableInput extends Component {
  constructor() {
    super();
    this.state = {
      debVisa: [0],
      credVisa: [0],
      c2a6visa: [0],
      c7a12visa: [0],
      antecipa: [0],
    };
  }

  get_debVisa = (e) => {
    const debVisa = e.target.value;
    parseFloat(this.setState({ debVisa })).toFixed(2);
  };

  get_debElo = (e) => {
    const debElo = e.target.value;
    parseFloat(this.setState({ debElo })).toFixed(2);
  };

  get_credVisa = (e) => {
    const credVisa = e.target.value;
    parseFloat(this.setState({ credVisa })).toFixed(2);
  };

  get_credElo = (e) => {
    const credElo = e.target.value;
    parseFloat(this.setState({ credElo })).toFixed(2);
  };

  get_c2a6visa = (e) => {
    const c2a6visa = e.target.value;
    parseFloat(this.setState({ c2a6visa })).toFixed(2);
  };

  get_c2a6elo = (e) => {
    const c2a6elo = e.target.value;
    parseFloat(this.setState({ c2a6elo })).toFixed(2);
  };

  get_c7a12visa = (e) => {
    const c7a12visa = e.target.value;
    parseFloat(this.setState({ c7a12visa })).toFixed(2);
  };

  get_c7a12elo = (e) => {
    const c7a12elo = e.target.value;
    parseFloat(this.setState({ c7a12elo })).toFixed(2);
  };

  get_antecipa = (e) => {
    const antecipa = e.target.value;
    parseFloat(this.setState({ antecipa })).toFixed(2);
  };

  render() {
    return (
      <div>
        <Container>
          <div className="row">
            <div className="col-sm">
              <Container>
                <Card bg="success" text="white">
                  <Card.Header style={{ textAlign: "center" }}>
                    <h4> TAXAS VISA E MASTER NOVAS </h4>
                  </Card.Header>

                  <Card.Body
                    style={{
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: "white",
                      padding: "1px",
                    }}
                  >
                    <Table>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>
                            <center>
                              <Image
                                src={vm}
                                alt="visamaster"
                                width={25}
                                height={25}
                              />
                            </center>
                          </td>
                          <td>
                            <center>
                              <Image
                                src={elo}
                                alt="elo"
                                width={50}
                                height={25}
                              />
                            </center>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6>Débito </h6>{" "}
                          </td>
                          <td>
                            <InputMask
                              mask="99.99"
                              id="debVisa"
                              className="form-control"
                              placeholder="Débito"
                              onChange={this.get_debVisa}
                            ></InputMask>
                          </td>
                          <td>
                            <InputMask
                              mask="99.99"
                              id="debElo"
                              className="form-control"
                              placeholder="Débito"
                              onChange={this.get_debElo}
                            ></InputMask>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h6>Crédito</h6>
                          </td>
                          <td>
                            <InputMask
                              mask="99.99"
                              id="credVisa"
                              className="form-control"
                              placeholder="Crédito"
                              onChange={this.get_credVisa}
                            ></InputMask>
                          </td>
                          <td>
                            <InputMask
                              mask="99.99"
                              id="credElo"
                              className="form-control"
                              placeholder="Crédito"
                              onChange={this.get_credElo}
                            ></InputMask>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6> 2x a 6x </h6>
                          </td>
                          <td>
                            <InputMask
                              mask="99.99"
                              id="credVisa"
                              className="form-control"
                              placeholder="2x a 6x"
                              onChange={this.get_c2a6visa}
                            ></InputMask>
                          </td>
                          <td>
                            <InputMask
                              mask="99.99"
                              id="credElo"
                              className="form-control"
                              placeholder="2x a 6x"
                              onChange={this.get_c2a6elo}
                            ></InputMask>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6>7x a 12x</h6>
                          </td>
                          <td>
                            <InputMask
                              mask="99.99"
                              id="credVisa"
                              className="form-control"
                              placeholder="7x a 12x"
                              onChange={this.get_c7a12visa}
                            ></InputMask>
                          </td>
                          <td>
                            <InputMask
                              mask="99.99"
                              id="credElo"
                              className="form-control"
                              placeholder="7x a 12x"
                              onChange={this.get_c7a12elo}
                            ></InputMask>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h6> Antecipação</h6>{" "}
                          </td>
                          <td>
                            <InputMask
                              mask="99.99"
                              className="form-control"
                              placeholder="Antecipação"
                              onChange={this.get_antecipa}
                            ></InputMask>
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Container>
            </div>

            <div className="col-sm">
              <Container>
                <Card bg="success" text="white">
                  <Card.Header style={{ textAlign: "center" }}>
                    <h4> CET </h4>
                  </Card.Header>

                  <Table
                    striped
                    bordered
                    hover
                    size="sm"
                    style={{
                      width: "100%",
                      margin: "auto",
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <tbody>
                      <td></td>
                      <td>
                        <center>
                          <Image
                            src={vm}
                            alt="visamaster"
                            width={25}
                            height={25}
                          />
                        </center>
                      </td>
                      <td>
                        <center>
                          <Image src={elo} alt="elo" width={50} height={25} />
                        </center>
                      </td>

                      <tr>
                        <td>
                          <b>Débito</b>
                        </td>
                        <td>{(this.state.debVisa * 1).toFixed(2)} % </td>
                        <td>{(this.state.debElo * 1).toFixed(2)} % </td>
                      </tr>

                      <tr>
                        <td>
                          <b>Crédito</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.credVisa / 100) *
                                (1 - (this.state.antecipa / 100) * 1)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.credElo / 100) *
                                (1 - (this.state.antecipa / 100) * 1)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>{" "}
                      </tr>

                      <tr>
                        <td id="credito2x">
                          <b>2x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6visa / 100) *
                                (1 - (this.state.antecipa / 100) * 1.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6elo / 100) *
                                (1 - (this.state.antecipa / 100) * 1.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>3x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6visa / 100) *
                                (1 - (this.state.antecipa / 100) * 2)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6elo / 100) *
                                (1 - (this.state.antecipa / 100) * 2)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>4x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6visa / 100) *
                                (1 - (this.state.antecipa / 100) * 2.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6elo / 100) *
                                (1 - (this.state.antecipa / 100) * 2.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>5x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6visa / 100) *
                                (1 - (this.state.antecipa / 100) * 3)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6elo / 100) *
                                (1 - (this.state.antecipa / 100) * 2.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>6x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6visa / 100) *
                                (1 - (this.state.antecipa / 100) * 3.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c2a6visa / 100) *
                                (1 - (this.state.antecipa / 100) * 3.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>7x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12visa / 100) *
                                (1 - (this.state.antecipa / 100) * 4)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12elo / 100) *
                                (1 - (this.state.antecipa / 100) * 4)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>8x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12visa / 100) *
                                (1 - (this.state.antecipa / 100) * 4.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12elo / 100) *
                                (1 - (this.state.antecipa / 100) * 4.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>9x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12visa / 100) *
                                (1 - (this.state.antecipa / 100) * 5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12elo / 100) *
                                (1 - (this.state.antecipa / 100) * 5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>10x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12visa / 100) *
                                (1 - (this.state.antecipa / 100) * 5.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12elo / 100) *
                                (1 - (this.state.antecipa / 100) * 5.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>11x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12visa / 100) *
                                (1 - (this.state.antecipa / 100) * 6)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12elo / 100) *
                                (1 - (this.state.antecipa / 100) * 6)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>12x</b>
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12visa / 100) *
                                (1 - (this.state.antecipa / 100) * 6.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                        <td>
                          {(
                            (1 -
                              (100 *
                                (1 - this.state.c7a12elo / 100) *
                                (1 - (this.state.antecipa / 100) * 6.5)) /
                                100) *
                            100
                          ).toFixed(2)}{" "}
                          %{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default TableInput;
