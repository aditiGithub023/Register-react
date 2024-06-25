import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import AlertTitle from "@mui/material/AlertTitle";

function SuccessFull({ setOpen, open }) {
    const handleClose = () => {
        setOpen(!open.successFull);
      };
      return (
        <Snackbar open={open.successFull} onClose={handleClose} autoHideDuration={3000}>
          <Alert variant="filled" severity="success">
            <AlertTitle>SuccessFully Login</AlertTitle>
          </Alert>
        </Snackbar>
      );
}

export default SuccessFull