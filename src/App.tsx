import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//import { TextField, Button } from "@mui/material";
import Reservation from "./components/Reservation";
import ReservationList from "./components/ReservationList";
import AddReservation from "./components/AddReservation";
import UpdateReservation from "./components/UpdateReservation";
import DeleteReservation from "./components/DeleteReservation";
import "./App.css";
import Footer from "./components/Footer";
import HotelHome from "./components/Home";

import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Button,
  Container,
  CssBaseline,
} from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import { preProcessFile } from "typescript";
import { Home } from "@mui/icons-material";

function App() {
  const [value, setValue] = useState(0);
  // const handleChange = (newvalue: number) => {
  //   setValue(newvalue);
  // };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{ background: "#063970" }} position="static">
        <Toolbar>
          <HotelIcon></HotelIcon>
          <Typography sx={{ marginLeft: "10px" }}>
            Hotel Reservation System
          </Typography>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="Create Reservation" />
            <Tab label="Modify Reservation" />
            <Tab label="Delete Reservation" />
          </Tabs>
          <Button sx={{ marginLeft: "auto" }} variant="contained">
            Login
          </Button>
          <Button sx={{ marginLeft: "10px" }} variant="contained">
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HotelHome />
      </TabPanel>
      <TabPanel value={value} index={1} marginLeft="20px">
        <AddReservation />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>
          <h1>Modify Reservation</h1>
        </Typography>
        <UpdateReservation />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Delete Reservation
        <DeleteReservation />
      </TabPanel>
    </React.Fragment>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

export default App;
