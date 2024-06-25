import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import React from "react";
import AlertTitle from "@mui/material/AlertTitle";

function Warning({ setOpen, open }) {
  const handleClose = () => {
    setOpen(!open.warning);
  };
  return (
    <Snackbar open={open.warning} onClose={handleClose} autoHideDuration={3000}>
      <Alert variant="filled" severity="error">
        <AlertTitle>Field is empty or wrong data filled</AlertTitle>
      </Alert>
    </Snackbar>
  );
}

export default Warning;