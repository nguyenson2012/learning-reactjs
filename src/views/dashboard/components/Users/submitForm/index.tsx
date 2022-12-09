import React, { useReducer } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import SubmitFormProps from './SubmitFormProps';

export default function SubmitForm(props: SubmitFormProps) {
  const { userInfo } = props;
  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      age: userInfo.age
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
            id="filled-basic"
            defaultValue={formInput.firstName}
            label="First Name"
            variant="filled"
            onChange={handleInput}
            fullWidth
          />
          <TextField
            margin="normal"
            label="Last Name"
            id="filled-basic"
            variant="filled"
            defaultValue={formInput.lastName}
            onChange={handleInput}
            fullWidth
          />
          <TextField
            margin="normal"
            label="Age"
            id="filled-basic"
            variant="filled"
            defaultValue={formInput.age}
            onChange={handleInput}
            fullWidth
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
