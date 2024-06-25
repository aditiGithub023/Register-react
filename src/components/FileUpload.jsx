import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


export default function FileUpload({handleChange}) {

  return (
    <>
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      color='success'
    sx={{height:"fit-content",marginTop:"0.5rem",padding:"10px"}}
    >
    
      <input type="file" onChange={(event)=>handleChange("file",event.target.files.item(0).name)}/>
    </Button>
    </>
  );
}
