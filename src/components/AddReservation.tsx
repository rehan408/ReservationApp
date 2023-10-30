import { TextField, Button, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Reservation from "./Reservation";
import { useState } from "react";

function AddReservation() {
  //const [name, setName] = useState("");
  //   const [selectedDateArrival, setSelectedDateArrival] = useState<Date | null>(
  //     null
  //   );
  //   const [selectedDateDeparture, setSelectedDateDeparture] =
  //     useState<Date | null>(null);

  //   const [reservationdata, setReservationData] = useState({
  //     ArrivalDate: "2023-10-21",
  //     DepartureDate: "2023-10-31",
  //     RoomSize: "",
  //     RoomQuantity: 0,
  //     firstName: "",
  //     lastName: "",
  //     Email: "",
  //     Phone: "",
  //     StreetName: "",
  //     StreetNumber: "",
  //     ZipCode: "",
  //     State: "",
  //     City: "",
  //     Extras: "",
  //     Payment: "",
  //     Note: "",
  //     Tags: "",
  //     Reminder: false,
  //     Newsletter: false,
  //     Confirm: false,
  //   });

  const [reservationdata, setReservationData] = useState({
    arrivalDate: "2023-10-21",
    departureDate: "2023-10-31",
    roomSize: " ",
    roomQuantity: 0,
    firstName: " ",
    lastName: " ",
    email: " ",
    phone: " ",
    streetName: " ",
    streetNumber: " ",
    zipCode: " ",
    state: " ",
    city: " ",
    extras: " ",
    payment: " ",
    note: " ",
    tags: " ",
    reminder: false,
    newsletter: false,
    confirm: false,
  });

  //   const [reservationdata, setReservationData] = useState<Array<Reservation>>([
  //     {
  //       arrivalDate: "2023-10-21",
  //       departureDate: "2023-10-31",
  //       roomSize: " ",
  //       roomQuantity: 0,
  //       firstName: " ",
  //       lastName: " ",
  //       email: " ",
  //       phone: " ",
  //       streetName: " ",
  //       streetNumber: " ",
  //       zipCode: " ",
  //       state: " ",
  //       city: " ",
  //       extras: " ",
  //       payment: " ",
  //       note: " ",
  //       tags: " ",
  //       reminder: false,
  //       newsletter: false,
  //       confirm: false,
  //     },
  //   ]);

  function handleSaveData() {
    console.log("reservation data is :" + reservationdata);
    const url =
      //"https://localhost:52149//api/values";
      "https://3izwewzpe3.execute-api.us-east-2.amazonaws.com/Prod/api/values";

    const Options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reservationdata),
    };
    console.log(url);
    fetch(url, Options)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data === "Data Saved Successfully") {
          alert("Saved");
        }
      });
  }

  function onImputChange(e) {
    //setName(event.target.value);
    let name = e.target.name;
    let value = e.target.value;
    console.log(e.target.name + "  " + e.target.value);
    // if (e.target.name==="News" || e.target.name==="Reminder")
    // {
    //   name = e.target.name;
    //   value = e.target.checked;
    // }
    // else
    //{
    //name = e.target.name;
    //value = e.target.value;
    //}

    setReservationData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div>
      <Typography>
        <h2>Create Reservation</h2>
      </Typography>

      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          sx={{ marginTop: "10px", marginLeft: "10px" }}
          label="Arriaval Date"
          //name="arrivalDate"
          value={selectedDateArrival}
          renderInput={(params) => ( 
            <TextField
              {...params}
              
            />
          )}
          onChange={(newValue, e) => {
            setSelectedDateArrival(newValue);
          }}
        />
        <DatePicker
          sx={{ marginTop: "10px", marginLeft: "10px" }}
          label="Departure Date"
          //name="departureDate"
          value={selectedDateDeparture}
          // renderInput={(params) => <TextField  {...params} />}
          onChange={(newValue) => {
            setSelectedDateDeparture(newValue);
          }}
        />
      </LocalizationProvider> */}

      <TextField
        name="arrivalDate"
        label="Arrival Date"
        variant="standard"
        color="secondary"
        required
        onChange={(e) => {
          onImputChange(e);
        }}
      />

      <TextField
        label="Departure Date"
        variant="standard"
        color="secondary"
        required
        name="departureDate"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Room Size"
        variant="standard"
        color="secondary"
        required
        name="roomSize"
        onChange={(e) => {
          onImputChange(e);
        }}
      />

      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Room Quantity"
        variant="standard"
        color="secondary"
        required
        name="roomQuantity"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="First Name"
        variant="standard"
        color="secondary"
        required
        name="firstName"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Last Name"
        variant="standard"
        color="secondary"
        required
        name="lastName"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Email"
        variant="standard"
        color="secondary"
        required
        name="email"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />

      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Phone"
        variant="standard"
        color="secondary"
        required
        name="phone"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />

      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Street Name"
        variant="standard"
        color="secondary"
        required
        name="streetName"
        onChange={(e) => {
          onImputChange(e);
        }}
      />

      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Street Number"
        variant="standard"
        color="secondary"
        required
        name="streetNumber"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Zip Code"
        variant="standard"
        color="secondary"
        required
        name="zipCode"
        onChange={(e) => {
          onImputChange(e);
        }}
      />

      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="State"
        variant="standard"
        color="secondary"
        required
        name="state"
        onChange={(e) => {
          onImputChange(e);
        }}
      />

      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="City"
        variant="standard"
        color="secondary"
        required
        name="city"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Extras"
        variant="standard"
        color="secondary"
        required
        name="extras"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Payment"
        variant="standard"
        color="secondary"
        required
        name="payment"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Note"
        variant="standard"
        color="secondary"
        required
        name="note"
        onChange={(e) => {
          onImputChange(e);
        }}
      />

      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Tags"
        variant="standard"
        color="secondary"
        required
        name="tags"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Reminder"
        variant="standard"
        color="secondary"
        required
        name="reminder"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Newsletter"
        variant="standard"
        color="secondary"
        required
        name="newsletter"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <TextField
        sx={{ marginTop: "10px", marginLeft: "10px" }}
        label="Confirm"
        variant="standard"
        color="secondary"
        required
        name="confirm"
        onChange={(e) => {
          onImputChange(e);
        }}
      />
      <br />
      <Button variant="contained" onClick={handleSaveData}>
        Save Reservation
      </Button>
    </div>
  );
}

export default AddReservation;
