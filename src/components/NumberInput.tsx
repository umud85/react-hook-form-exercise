import React from 'react';
import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

function NumberInput() {
  const { register } = useFormContext();
  return (
    <TextField
          id="outlined-number"
          label="Number"
          type="time"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "219px" }}
          {...register("number")}
        />
  )
}

export default NumberInput