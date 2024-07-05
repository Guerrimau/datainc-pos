"use client";

import Image from "next/image";
import React from "react";

import {
  AspectRatio,
   Box,
   Card,
   CardContent,
   FormControl,
   Grid,
   IconButton,
   Input,
   Stack,
   Tab,
   TabList,
   Tabs,
   Typography,
} from "@mui/joy";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Header, Sidebar } from "@/components";
import coffeImg from "@/assets/images/coffe.jpg";

export default function Home() {
   return (
      <React.Fragment>
         <Box sx={{ display: "flex", minHeight: "100dvh" }}>
            <Header />
            <Sidebar />
            <Stack
               component="main"
               className="MainContent"
               spacing={2}
               sx={{
                  px: { xs: 2, md: 6 },
                  pt: {
                     xs: "calc(12px + var(--Header-height))",
                     sm: "calc(12px + var(--Header-height))",
                     md: 3,
                  },
                  pb: { xs: 2, sm: 2, md: 3 },
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 0,
                  height: "100dvh",
                  gap: 1,
               }}
            >
               <Typography level="h1">Orden</Typography>
               <FormControl>
                  <Input startDecorator={<SearchIcon />} placeholder="Buscar comida, bebidas, etc..." />
               </FormControl>
               <Tabs size="md">
                  <TabList>
                     <Tab>Bebidas</Tab>
                     <Tab>Panaderia</Tab>
                     <Tab>Otros</Tab>
                  </TabList>
               </Tabs>
               <Grid container spacing={2}>
                  {Array.from({ length: 10 }).map((_, index) => (
                     <Grid xs={6} md={4} xl={2}>
                        <Card>
                           <div>
                              <Typography level="title-lg">
                                 Americano
                              </Typography>
                              <AspectRatio minHeight="120px" maxHeight="200px">
                                <Image src={coffeImg} alt="product-image" />
                              </AspectRatio>
                           </div>
                           <CardContent orientation="horizontal" sx={{ justifyContent: "space-between"}}>
                              <div>
                                 <Typography level="body-xs">
                                    Precio total:
                                 </Typography>
                                 <Typography fontSize="lg" fontWeight="lg">
                                    $45.00
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
         </Box>
      </React.Fragment>
   );
}
