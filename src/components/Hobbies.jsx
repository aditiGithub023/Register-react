import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function Hobbies( {data,handleChange}) {




  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
        <FormLabel component="legend"  color="secondary" sx={{color:'black'}}>Hobbies</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={data.cooking}
              onChange={(e)=>handleChange("cooking",e.target.checked)} name="Cooking"  />
            }
            label="Cooking"
          />
          <FormControlLabel
            control={
              <Checkbox checked={data.travelling}
              onChange={(e)=>handleChange("travelling",e.target.checked)} name="travelling" />
            }
            label="travelling"
          />
          <FormControlLabel
            control={
              <Checkbox checked={data.swimming}
               onChange={(e)=>handleChange("swimming",e.target.checked)} name="swimming"  />
            }
            label="swimming "
          />
        </FormGroup>
       
      </FormControl>
     
    </Box>
  );
}
