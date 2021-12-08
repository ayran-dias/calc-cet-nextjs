import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import vm from "/public/vm.png";
import elo from "/public/elo.png";
import Table from "react-bootstrap/Table";
import InputMask from "react-input-mask";


const Cet = () => {
  return (
    <div>
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
                    <Image src={vm} alt="visamaster" width={25} height={25} />
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
                  <td>{(this.state.debVisa * 1).toFixed(2)}% </td>
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.credElo / 100) *
                          (1 - (this.state.antecipa / 100) * 1)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
                  </td>
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c2a6elo / 100) *
                          (1 - (this.state.antecipa / 100) * 1.5)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c2a6elo / 100) *
                          (1 - (this.state.antecipa / 100) * 2)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c2a6elo / 100) *
                          (1 - (this.state.antecipa / 100) * 2.5)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c2a6elo / 100) *
                          (1 - (this.state.antecipa / 100) * 2.5)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c2a6visa / 100) *
                          (1 - (this.state.antecipa / 100) * 3.5)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c7a12elo / 100) *
                          (1 - (this.state.antecipa / 100) * 4)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c7a12elo / 100) *
                          (1 - (this.state.antecipa / 100) * 4.5)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c7a12elo / 100) *
                          (1 - (this.state.antecipa / 100) * 5)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c7a12elo / 100) *
                          (1 - (this.state.antecipa / 100) * 5.5)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c7a12elo / 100) *
                          (1 - (this.state.antecipa / 100) * 6)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
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
                    ).toFixed(2)}
                    %
                  </td>
                  <td>
                    {(
                      (1 -
                        (100 *
                          (1 - this.state.c7a12elo / 100) *
                          (1 - (this.state.antecipa / 100) * 6.5)) /
                          100) *
                      100
                    ).toFixed(2)}
                    %
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Cet;
