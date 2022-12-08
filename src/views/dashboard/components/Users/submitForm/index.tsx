import React, { useReducer } from 'react';
import { Button, TextField, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SubmitFormProps from './SubmitFormProps';

export default function SubmitForm(props: SubmitFormProps) {
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      name: '',
      email: ''
    }
  );

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    const data = { formInput };
    console.log(data.formInput.name);
  };

  const handleInput = (evt: any) => {
    const { name } = evt.target;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  const { formName, formDescription, handleCloseSubmitFormDialog } = props;

  return (
    <div>
      <Paper>
        <form onSubmit={handleSubmit} style={{ flexDirection: 'column' }}>
          <TextField
            label="Name"
            id="margin-normal"
            name="name"
            defaultValue={formInput.email}
            helperText="Enter your full name"
            onChange={handleInput}
            fullWidth
            sx={{ px: 10 }}
          />
          <TextField
            label="Email"
            id="margin-normal"
            name="email"
            defaultValue={formInput.name}
            helperText="e.g. name@gmail.com"
            onChange={handleInput}
            fullWidth
            sx={{ px: 10 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleCloseSubmitFormDialog}
            sx={{ px: 10 }}
            fullWidth
          >
            Close
          </Button>
        </form>
      </Paper>
    </div>
  );
}
