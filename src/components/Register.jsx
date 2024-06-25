import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
//for date picker
import dayjs from "dayjs";
// Components
import Gender from "./Gender";
import Hobbies from "./Hobbies";
import FileUpload from "./FileUpload";
import Country from "./Country";
import Warning from "./Warning";
import SuccessFull from "./SuccessFull";
import { useState } from "react";
import { isEmail, isName, isPhone } from "../utils/Validation";

function Register() {
  const currentDate = new Date();
  const initialState={
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    dob: dayjs(currentDate),
    gender: "",
    cooking: false,
    travelling: false,
    swimming: false,
    country: "",
    bio: "",

    termAndConditions: false,
  };
  const [enteredValues, setEnteredValues] = useState(initialState);
  //for helper text
  const [isEdit, setEdit] = useState({
    name: false,
    username: false,
    password: false,
    confirmPassword: false,
    email: false,
    phone: false,
    country: false,
    termAndConditions: false,
  });
  //for Toaster
  const [open, setOpen] = useState({
    warning: false,
    successFull: false,
  });
  const nameIsInvalid = isEdit.name && !isName(enteredValues.name);
  const usernameIsInvalid = isEdit.username && !isName(enteredValues.username);
  const bioIsInvalid = isEdit.bio && enteredValues.bio.length < 20;
  const phoneIsInvalid = isEdit.phone && !isPhone(enteredValues.phone);
  const emailIsInvalid = isEdit.email && !isEmail(enteredValues.email);
  const emptyCountry = isEdit.country && enteredValues.country === "";
  const passwordEmpty =
    isEdit.password &&
    (enteredValues.password === "" || enteredValues.password.length < 6);
  const passwordNotSame =
    enteredValues.password !== enteredValues.confirmPassword;

  function handleSubmit(e) {
    e.preventDefault();

    if (
      isEmail(enteredValues.email) &&
      enteredValues.password === enteredValues.confirmPassword &&
      isName(enteredValues.name) &&
      isName(enteredValues.username) &&
      enteredValues.bio.length > 20 &&
      isPhone(enteredValues.phone) &&
      emptyCountry !== true &&
      enteredValues.termAndConditions === true
    ) {
      console.log(enteredValues);
      setOpen({ ...open, successFull: true });
    } else setOpen({ ...open, warning: true });
  }

  function handleInput(inputType, value) {
    setEdit((prevValue) => ({
      ...prevValue,
      [inputType]: false,
    }));
    setEnteredValues((prevObject) => ({
      ...prevObject,
      [inputType]: value,
    }));
  }

  function handleBlur(inputname) {
    setEdit((prevValue) => ({
      ...prevValue,
      [inputname]: true,
    }));
  }
 function reset(){
  setEnteredValues(initialState);
 }
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container maxWidth="xxl" component="form" onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            mt={2}
            // sx={{backgroundColor:"pink"}}
          >
            <Grid
              item
              xs={12}
              md={6}
              // sx={{backgroundColor:"brown"}}
            >
              <InputLabel sx={{ color: "black" }} required>
                Full name
              </InputLabel>
              <TextField
                type="text"
                id="outlined-basic-name"
                variant="outlined"
                fullWidth
                value={enteredValues.name}
                onChange={(event) => handleInput("name", event.target.value)}
                onBlur={() => handleBlur("name")}
                helperText={
                  nameIsInvalid ? "This field only accepts alphabets" : ""
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              // sx={{backgroundColor:"purple"}}
            >
              <InputLabel sx={{ color: "black" }} required>
                Username
              </InputLabel>
              <TextField
                type="text"
                id="outlined-basic-username"
                variant="outlined"
                fullWidth
                value={enteredValues.username}
                onChange={(event) =>
                  handleInput("username", event.target.value)
                }
                onBlur={() => handleBlur("username")}
                helperText={usernameIsInvalid ? "Minimum character 6" : " "}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ color: "black" }} required>
                Password
              </InputLabel>
              <TextField
                type="password"
                id="outlined-basic-password"
                variant="outlined"
                fullWidth
                value={enteredValues.password}
                onChange={(event) =>
                  handleInput("password", event.target.value)
                }
                onBlur={() => handleBlur("password")}
                helperText={passwordEmpty ? "Minimum character 6" : " "}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ color: "black" }} required>
                Confirm password
              </InputLabel>
              <TextField
                type="password"
                id="outlined-basic-confirm"
                variant="outlined"
                fullWidth
                value={enteredValues.confirmPassword}
                onChange={(event) =>
                  handleInput("confirmPassword", event.target.value)
                }
                onBlur={() => handleBlur("confirmPassword")}
                helperText={passwordNotSame ? "Password does not match" : " "}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ color: "black" }} required>
                Email Address
              </InputLabel>
              <TextField
                type="email"
                id="outlined-basic-email"
                variant="outlined"
                fullWidth
                value={enteredValues.email}
                onChange={(event) => handleInput("email", event.target.value)}
                onBlur={() => handleBlur("email")}
                helperText={emailIsInvalid ? "Valid Email Required" : " "}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ color: "black" }} required>
                Phone Number
              </InputLabel>
              <TextField
                type="tel"
                id="outlined-basic-number"
                variant="outlined"
                color="success"
                fullWidth
                value={enteredValues.phone}
                onChange={(event) => handleInput("phone", event.target.value)}
                onBlur={() => handleBlur("phone")}
                helperText={
                  phoneIsInvalid ? "Accepts only 10 digits" : " "
                }
              />
            </Grid>
            {/* Date picker */}
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ color: "black" }} required>
                Date Of Birth
              </InputLabel>
              <DatePicker
                sx={{ width: "100%" }}
                value={enteredValues.dob}
                onChange={(dob) => handleInput("dob", dob)}
              />
            </Grid>
            {/* gender */}
            <Grid item xs={12} md={6}>
              <Gender data={enteredValues} handleChange={handleInput} />
            </Grid>
            {/* Hobbies */}
            <Grid item xs={12} md={6}>
              <Hobbies data={enteredValues} handleChange={handleInput} />
            </Grid>
            {/* Profile Picture */}
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ color: "black" }}>Profile Picture</InputLabel>
              <FileUpload handleChange={handleInput} />
              {enteredValues.filename ?? <h1>{enteredValues.filename}</h1>}
            </Grid>
            {/* Country */}
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ color: "black" }} required>
                Country
              </InputLabel>
              <Country
                countryRequired={emptyCountry}
                outOfFocus={() => handleBlur("country")}
                data={enteredValues}
                handleChange={handleInput}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel sx={{ color: "black" }} required>
                Bio
              </InputLabel>
              <TextField
                id="outlined-textarea"
                fullWidth
                // multiline
                value={enteredValues.bio}
                onChange={(event) => handleInput("bio", event.target.value)}
                onBlur={() => handleBlur("bio")}
                helperText={bioIsInvalid ? "Minimum 20 char" : " "}
              />
            </Grid>
          </Grid>
          <Box my={1}>
            <Checkbox
              inputProps={{ "aria-label": "controlled" }}
              checked={enteredValues.termAndConditions}
              onChange={(event) =>
                handleInput("termAndConditions", event.target.checked)
              }
            />
            <Typography variant="caption" gutterBottom>
              Agree to terms and condition
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', marginTop: "2rem",marginBottom:"2rem" ,alignItems:"flex-end",
          justifyContent:{md:"flex-end",xs:"flex-start"}}}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: "primary.dark",
              },
          
            }}
          >
            Register
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: "primary.dark",
              },
             
              marginLeft:"1rem"
            }}
            onClick={reset}
          >
            Reset
          </Button>
          </Box>
        </Container>
        <Warning setOpen={setOpen} open={open} />
        <SuccessFull setOpen={setOpen} open={open} />
      </LocalizationProvider>
    </>
  );
}

export default Register;
