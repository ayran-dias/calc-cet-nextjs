import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Footer from "../../../pages/simulador/ComponentSimulador/Footer";


const currencies = [
  { value: "cliente", label: "Cliente assume as taxas" },
  { value: "eu", label: "Eu assumo as taxas" },
];

export default function Taxas() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
    const valor = event.target.value;
  
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          select
          label="Taxas"
          value={currency}

          size="small"

          onChange={handleChange}
          autoComplete="Visa"

        >

          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}

        </TextField>
<div>
{ currency === "cliente" && (
          <Footer />  
)}
{ currency === "eu" && (
          <Footer />
)}
</div>



      </div>
    </Box>
  );
}
