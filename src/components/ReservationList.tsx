import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import Reservation from "./Reservation";

interface ReservationListProps {
  reservations: Reservation[];
}

function ReservationList({ reservations }: ReservationListProps) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedReservation, setSelectedReservation] =
    useState<Reservation | null>(null);

  const handleOpenDialog = (reservation: Reservation) => {
    setSelectedReservation(reservation);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedReservation(null);
    setOpenDialog(false);
  };

  return (
    <div>
      {reservations.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {reservations.map((reservation, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {reservation.firstName} {reservation.lastName}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpenDialog(reservation)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No matching reservations found.</p>
      )}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Reservation Details</DialogTitle>
        <DialogContent>
          {selectedReservation && (
            <div>
              <p>
                Name: {selectedReservation.firstName}{" "}
                {selectedReservation.lastName}
              </p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReservationList;
