import React, { useEffect, useState } from "react";
import OpenReservationDetails from "./OpenReservationDetails";
import Reservation from "./Reservation";
import {
  Button,
  Table,
  TextField,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

function Home() {
  const [reservationData, setReservationData] = useState<Array<Reservation>>(
    []
  );

  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");

  function handleFirstNameChange(e) {
    if (e.target.value) SetFirstName(e.target.value);
  }
  function handleClick() {
    alert("I will be the new Page with all the details");
  }
  function handleLastNameChange(e) {
    if (e.target.value) SetLastName(e.target.value);
  }
  function handleSearch() {
    const url =
      //"https://localhost:52149/api/values?firstName=" +
      "https://3izwewzpe3.execute-api.us-east-2.amazonaws.com/Prod/api/values?firstName=" +
      firstName +
      "&lastName=" +
      lastName; //{firstName}&lastName={lastName}
    console.log("Login -----" + url);
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log("Reservation Data");
        console.log(data);
        setReservationData(data);
      });
  }

  const getData = () => {
    const url =
      "https://3izwewzpe3.execute-api.us-east-2.amazonaws.com/Prod/api/values";
    //"https://localhost:52149/api/values";
    console.log("Login -----" + url);
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log("Reservation Data");
        console.log(data);
        setReservationData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div>
      <div>
        <TextField
          sx={{ marginTop: "10px", marginLeft: "10px" }}
          label="First Name"
          variant="standard"
          color="secondary"
          required
          name="firstName"
          onChange={(e) => {
            handleFirstNameChange(e);
          }}
        />
        {/* <label>Enter First Name</label> */}
        {/* <input
          type="textbox"
          placeholder="First Name"
          onChange={(e) => {
            handleFirstNameChange(e);
          }}
        ></input> */}
        <TextField
          sx={{ marginTop: "10px", marginLeft: "10px" }}
          label="Last Name"
          variant="standard"
          color="secondary"
          required
          name="lastName"
          onChange={(e) => {
            handleLastNameChange(e);
          }}
        />
        {/* <label>Enter Last Name</label>
        <input
          type="textbox"
          placeholder="Last Name"
          onChange={(e) => {
            handleLastNameChange(e);
          }}
        ></input> */}
        <Button onClick={handleSearch}>Search</Button>
        {/* <button >Search</button> */}
      </div>
      <TableContainer component={Paper}>
        <Table aria-aria-label="Reservation Data">
          <TableHead>
            <TableRow>
              <TableCell>Date Arrival</TableCell>
              <TableCell>Date Departure</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Room Size</TableCell>
              <TableCell>Room Quantity</TableCell>
              <TableCell>Street Number</TableCell>
              <TableCell>Street Name</TableCell>
              <TableCell>Zip Coder</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Extras</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservationData &&
              reservationData.map((item, index) => {
                return (
                  <TableRow>
                    <TableCell>{item.arrivalDate}</TableCell>
                    <TableCell>{item.departureDate}</TableCell>
                    <TableCell>{item.firstName}</TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.roomSize}</TableCell>
                    <TableCell>{item.roomQuantity}</TableCell>
                    <TableCell>{item.streetNumber}</TableCell>
                    <TableCell>{item.streetName}</TableCell>
                    <TableCell>{item.zipCode}</TableCell>
                    <TableCell>{item.state}</TableCell>
                    <TableCell>{item.city}</TableCell>
                    <TableCell>{item.extras}</TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={handleClick}>
                        Select
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
