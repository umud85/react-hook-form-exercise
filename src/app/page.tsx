"use client";

import Image from 'next/image';
import styles from './page.module.css'
import { TextField, Box, Button } from "@mui/material";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import NumberInput from '@/components/NumberInput';

type Inputs = {
  username: string;
  password: string;
  number: number
}

export default function Home() {
  const methods = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Box
          sx={{
            backgroundColor: "grey",
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <TextField
            id="name"
            label="Username"
            sx={{ width: "219px", marginTop: "1em" }}
            {...methods.register("username")}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            sx={{ width: "219px" }}
            autoComplete="current-password"
            {...methods.register("password")}
          />
          <NumberInput />
          <Button
            variant="contained"
            type='submit'
          >
            Submit
          </Button>
        </Box>
      </form>
    </FormProvider>
  )
}
