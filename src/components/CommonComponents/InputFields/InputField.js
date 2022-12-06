import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export default function InputField(props) {
  return (
    <Box
      component="form"
    //   sx={{
    //     '& > :not(style)': { width: '30ch' },
    //   }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={props.name} variant="outlined" />
      
    </Box>
  );
}
