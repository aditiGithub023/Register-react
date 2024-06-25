import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function Gender({data,handleChange}) {
  



  return (
    <FormControl sx={{ m: 1 }}>
      <FormLabel id="demo-controlled-radio-buttons-group" sx={{color:"black"}}    color="secondary" >Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={data.gender}
        onChange={(event)=>handleChange("gender",event.target.value)}
      
        row
        
      >
        <FormControlLabel value="female" control={<Radio />} label="Female"/>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>

    </FormControl>
  );
}