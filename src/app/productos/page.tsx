import { ButtonLink, DashboardLayout } from "@/components";
import { Button, Stack, Typography } from "@mui/joy";
import { getProducts } from "./actions";

export default async function Products() {
  const products = await getProducts();
  return (
    <DashboardLayout>
      <Stack flex={1} height="100%" spacing={2} p={4}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography level="h1">Productos</Typography>
          <ButtonLink to="productos/agregar">Agregar producto</ButtonLink>
        </Stack>
        <Stack>
          {products.map((product, index) => (
            <Stack key={product.id}>
              <Typography level="title-lg">{product.name}</Typography>
              <Typography level="body-lg">{product.initial_price}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </DashboardLayout>
  );
}
