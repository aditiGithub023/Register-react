import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

export default function Country({countryRequired,outOfFocus,data,handleChange}) {
   

 

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth  onBlur={outOfFocus}>
       
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.country}
          color="success"
          onChange={(event) => {
            handleChange("country",event.target.value);
         
  }}
        >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="Nepal">Nepal</MenuItem>
          <MenuItem value="Bhutan">Bhutan</MenuItem>
        </Select>
        <FormHelperText>{countryRequired? "Required" :" "}</FormHelperText>
      </FormControl>
    </Box>
  );
}
