import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import vm from "/public/vm.png";
import elo from "/public/elo.png";
import Table from "react-bootstrap/Table";
import InputMask from "react-input-mask";
import React, { Component, useState, createContext } from "react";
import {Cet} from "../components/Cet"
import { ThumbUpSharp } from "@mui/icons-material";


class TableInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      debVisa: [0],
      credVisa: [0],
      c2a6visa: [0],
      c7a12visa: [0],

      antecipa: [0],

      debElo: [0],
      credElo: [0],
      c2a6elo: [0],
      c7a12elo: [0],

      CET_debVisa: [0],
      CET_debElo: [0],


      CET1_credVisa: [0],
      CET_credElo: [0],

      CET2_Visa: [0],
      CET2_credElo: [0],

      CET3_Visa: [0],
      CET3_credElo: [0],

      CET4_Visa: [0],
      CET4_credElo: [0],

      CET5_Visa: [0],
      CET5_credElo: [0],

      CET6_Visa: [0],
      CET6_credElo: [0],

      CET7_Visa: [0],
      CET8_credElo: [0],

      CET8_Visa: [0],
      CET8_credElo: [0],

      CET9_Visa: [0],
      CET9_credElo: [0],

      CET10_Visa: [0],
      CET10_credElo: [0],

      CET11_Visa: [0],
      CET11_credElo: [0],

      CET12_Visa: [0],
      CET12_credElo: [0],

    };
  }

  FuncaoGeral = () => {console.log("desgraacaaa")};
 
  get_debVisa = (e) => {
    const debVisa = e.target.value;
    parseFloat(this.setState({ debVisa })).toFixed(2);
    const cet_deb = (this.state.debVisa * 1).toFixed(2);
    this.setState({ CET_debVisa: cet_deb });
    };

  get_debElo = (e) => {
    const debElo = e.target.value;
    parseFloat(this.setState({ debElo })).toFixed(2);
    const cet_deb1 = (this.state.debElo * 1).toFixed(2);
    this.setState({ CET_debElo: cet_deb1 });
  };

  get_credVisa = (e) => {
    const credVisa = e.target.value;
    parseFloat(this.setState({ credVisa })).toFixed(2);
    const cet_cred =                             (
      (1 -
        (100 *
          (1 - this.state.credVisa / 100) *
          (1 - (this.state.antecipa / 100) * 1)) /
          100) *
      100
    ).toFixed(2);
    this.setState({ CET1_credVisa: cet_cred });
  };

  get_credElo = (e) => {
    const credElo = e.target.value;
    parseFloat(this.setState({ credElo })).toFixed(2);
    const cet_cred1 = (this.state.credElo * 1).toFixed(2);
    this.setState({ CET2_credElo: cet_cred1 });
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
          <br />
          <Container>
            <div className="row">
              <div className="col-sm">
                <Container>
                  <Card bg="success" text="white">
                    <Card.Header style={{ textAlign: "center" }}>
                      <h4> DIGITE AS TAXAS </h4>
                    </Card.Header>

                    <Card.Body
                      style={{
                        width: "100%",
                        textAlign: "center",
                        backgroundColor: "white",
                        padding: "1px",
                      }}
                    >
                      <Table >
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
                              <h6>Débito </h6>
                            </td>
                            <td>
                              <InputMask
                                mask="09.99"
                                id="debVisa"
                                className="form-control"
                                placeholder="09.99"
                                onChange={this.get_debVisa}
                              ></InputMask>
                            </td>
                            <td>
                              <InputMask
                                mask="09.99"
                                id="debElo"
                                className="form-control"
                                placeholder="09.99"
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
                                mask="09.99"
                                id="credVisa"
                                className="form-control"
                                placeholder="09.99"
                                onChange={this.get_credVisa}
                              ></InputMask>
                            </td>
                            <td>
                              <InputMask
                                mask="09.99"
                                id="credElo"
                                className="form-control"
                                placeholder="09.99"
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
                                mask="09.99"
                                id="credVisa"
                                className="form-control"
                                placeholder="09.99"
                                onChange={this.get_c2a6visa}
                              ></InputMask>
                            </td>
                            <td>
                              <InputMask
                                mask="09.99"
                                id="credElo"
                                className="form-control"
                                placeholder="09.99"
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
                                mask="09.99"
                                id="credVisa"
                                className="form-control"
                                placeholder="09.99"
                                onChange={this.get_c7a12visa}
                              ></InputMask>
                            </td>
                            <td>
                              <InputMask
                                mask="09.99"
                                id="credElo"
                                className="form-control"
                                placeholder="09.99"
                                onChange={this.get_c7a12elo}
                              ></InputMask>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6> Antecipação</h6>
                            </td>
                            <td>
                              <InputMask
                                mask="09.99"
                                className="form-control"
                                placeholder="09.99"
                                onChange={this.get_antecipa}
                              ></InputMask>
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </Table>
                      <div>

                      </div>

                    </Card.Body>
                  </Card>
                </Container>
              </div>

        {/*<Cet/>*/}

<div>
  <h1>
    {this.state.CET1_credVisa}
  </h1>
</div>

            </div>
          </Container>
        </div>
    );
  }
}

export default TableInput;
