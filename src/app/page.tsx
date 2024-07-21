import React from "react";
import Image from "next/image";

import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  Sheet,
  Stack,
  Tab,
  TabList,
  Tabs,
  Textarea,
  Typography,
} from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import { DashboardLayout } from "@/components";
import coffeImg from "@/assets/images/coffe.jpg";
import { getProducts } from "./actions";

export default async function Home() {
  const products = await getProducts();
  return (
    <DashboardLayout>
      <Stack direction="row" flex={1} height="100%">
        <Stack spacing={2} p={4} height="100%">
          <Typography level="h1">Orden</Typography>

          <FormControl>
            <Input
              startDecorator={<SearchIcon />}
              placeholder="Buscar comida, bebidas, etc..."
            />
          </FormControl>

          <Tabs size="md" variant="plain" sx={{ bgcolor: "inherit" }}>
            <TabList>
              <Tab>Todos</Tab>
              <Tab>Bebidas</Tab>
              <Tab>Panaderia</Tab>
              <Tab>Otros</Tab>
            </TabList>
          </Tabs>

          <Grid container spacing={2} overflow="auto">
            {products.map((product, index) => (
              <Grid xs={6} lg={4} xl={3} key={product.id}>
                <Card>
                  <div>
                    <Typography level="title-lg">{product.name}</Typography>
                    <AspectRatio minHeight="120px" maxHeight="200px">
                      <Image src={coffeImg} alt="product-image" />
                    </AspectRatio>
                  </div>
                  <CardContent
                    orientation="horizontal"
                    sx={{ justifyContent: "space-between" }}
                  >
                    <div>
                      <Typography level="body-xs">Precio total:</Typography>
                      <Typography fontSize="lg" fontWeight="lg">
                        ${product.initial_price}
                      </Typography>
                    </div>
                    <IconButton size="lg" variant="soft">
                      <AddIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Sheet
          component={Stack}
          variant="outlined"
          width={1000}
          spacing={2}
          p={2}
        >
          <Input placeholder="Nombre del cliente" />
          <Stack direction="row" spacing={1}>
            <Button variant="solid" color="neutral">
              Llevar
            </Button>
            <Button variant="solid" color="neutral">
              Lugar
            </Button>
            <Button variant="solid" color="neutral">
              Entrega
            </Button>
          </Stack>

          <Divider />

          <Grid container>
            <Grid xs={4}>
              <Typography>Elementos</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography>Elementos</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography>Precios</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography>Tacos al pastor</Typography>
              <Typography>$124.00</Typography>
            </Grid>
            <Grid xs={4}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton size="sm">
                  <RemoveIcon />
                </IconButton>
                <Typography>2</Typography>
                <IconButton size="sm">
                  <AddIcon />
                </IconButton>
              </Stack>
            </Grid>
            <Grid xs={4}>
              <Typography>$248.00</Typography>
            </Grid>
          </Grid>

          <Divider sx={{ mt: "auto !important" }} />

          <Textarea placeholder="Agregar nota..." minRows={3} />

          <Stack spacing={1}>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Typography>Subtotal</Typography>
              <Typography>$248.00</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Descuento</Typography>
              <Typography>$0.00</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Impuestos</Typography>
              <Typography>$0.00</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Total</Typography>
              <Typography>$248.00</Typography>
            </Stack>
            <Button variant="solid" color="primary" fullWidth>
              Pagar
            </Button>
          </Stack>
        </Sheet>
      </Stack>
    </DashboardLayout>
  );
}
