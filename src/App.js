import './App.css';
import { AppBar, Container, Paper, Toolbar, Typography, Link } from '@mui/material';
import Home from './pages/Home';



function App() {
  return (
    <Container maxWidth='sm' >
      <Paper elevation={8}>
        <header>
          <AppBar position="static" color='secondary'>
            <Toolbar>
              <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }} align='center' style={{ marginTop: 10, marginBottom: 10 }}>
                LATIHAN
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <Home />

        <footer>

          <AppBar position="static" color='secondary' sx={{ borderRadius: 0, padding: 2 }}>
              <Typography variant='body2' >Made with : </Typography>
              <Link variant='body2' color='white' underline='hover' href='https://reactjs.org/' target='_blank' sx={{paddingLeft: 1}}>React</Link>
              <Link variant='body2' color='white' underline='hover' href='https://reactjs.org/' target='_blank' sx={{paddingLeft: 1}}>Material UI</Link>
          </AppBar>
        </footer>
      </Paper>
    </Container>
  );
}

export default App;
