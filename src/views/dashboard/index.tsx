import { Button, Container, Typography } from '@mui/material';
import AuthWrapper from 'views/authentication/AuthWrapper';
import { logout } from '../../firebase';

// ===============================|| DASHBOARD - MAIN ||=============================== //

export default function Dashboard() {
  return (
    <AuthWrapper>
      <Typography variant="h1">Dashboard</Typography>
      <Button onClick={logout}>Sign Out</Button>
    </AuthWrapper>
  );
}
