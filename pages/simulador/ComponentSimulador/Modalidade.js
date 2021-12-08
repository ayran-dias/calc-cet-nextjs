import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
    {
      value: 1,
      label: "Crédito a vista",
    },
    {
      value: 2,
      label: "Crédito 2x",
    },
    {
      value: 3,
      label: "Crédito 3x",
    },
    {
      value: 4,
      label: "Crédito 4x",
    },
    {
      value: 5,
      label: "Crédito 5x",
    },
    {
      value: 6,
      label: "Crédito 6x",
    },
    {
      value: 7,
      label: "Crédito 7x",
    },
    {
      value: 8,
      label: "Crédito 8x",
    },
    {
      value: 9,
      label: "Crédito 9x",
    },
    {
      value: 10,
      label: "Crédito 10x",
    },
    {
      value: 11,
      label: "Crédito 11x",
    },
    {
      value: 12,
      label: "Crédito 12x",
    },
  ];

export default function Modalidade() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
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
          label="Modalidade"
          size="small"

          value={currency}
          onChange={handleChange}
          autoComplete="Visa"

        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
