import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container-receb-1">
          <div className="container-receb-cont">
            <div className="container-receb-2">
            <h3 className="font-h3">
                Vou receber
                <br />
                R$200,00
                <br />
                Em 1 vez
              </h3>
            </div>

            <div className="container-traco">
              <div className="traco"> </div>
            </div>

            <div className="container-receb-2">
              <h3 className="font-h3">
                Cliente Paga
                <br />
                R$200,00
                <br />
                Em 1 vez
              </h3>

            </div>
          </div>

          <button className="but-pagamento">
            <div>
            Ir para o pagamento 

            </div>
            <ArrowForwardIcon />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
