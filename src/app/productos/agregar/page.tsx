"use client";

import { DashboardLayout } from "@/components";
import { Button, Input, Stack, Typography } from "@mui/joy";

export default function AddProduct() {
  return (
    <DashboardLayout>
      <Stack flex={1} height="100%" spacing={2} p={4}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography level="h1">Agregar producto</Typography>
        </Stack>
        <Stack component="form" action={() => {}} spacing={2}>
          <Input name="" />
          <Input />
          <Input />
          <Button color="primary">Guardar</Button>
        </Stack>
      </Stack>
    </DashboardLayout>
  );
}
