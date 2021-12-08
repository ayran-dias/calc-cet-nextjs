import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SignalWifi2BarIcon from '@mui/icons-material/SignalWifi2Bar';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';

const Header = () => {
  var hora    =   new Date().getHours();
  var minutos =   new Date().getMinutes();


    return (
        <div>
                              <div className="header-bar">
                     <h7>1.0.1</h7>
                     <div className="header-bar-right">
                     <SignalWifi2BarIcon sx={{ fontSize: 10 }} />
                     <BatteryCharging90Icon sx={{ fontSize: 10 }} />
                      <h7>{hora} : {minutos}</h7>
                    </div>
                      </div>
                  <header>

          <div className="card-top">
            <h3 className="texto-sim"> SIMULADOR DE VENDA</h3>
            <HelpOutlineIcon sx={{ fontSize: 10 }} />
          </div>
        </header>
        </div>
    )
}

export default Header;