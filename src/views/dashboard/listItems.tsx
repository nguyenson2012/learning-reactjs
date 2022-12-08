import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const mainListItems = (
  <ListItemButton>
    <ListItemIcon>
      <ManageAccountsIcon />
    </ListItemIcon>
    <ListItemText primary="User Management" />
  </ListItemButton>
);
export default mainListItems;
