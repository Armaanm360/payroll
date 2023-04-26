import { CheckBox } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, CssBaseline, FormControl, FormControlLabel, Grid, Icon, InputLabel, MenuItem, Modal, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '', transform: 'scale(0.8)' }}
  >
  </Box>
)
const Employees = () => {
  function createData(name, calories, fat, carbs, protein,latin) {
  return { name, calories, fat, carbs, protein,latin };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,50),

];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 2,
};
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const createOnClick = (e) =>{
    e.preventDefault();
    
  setOpen(false);
toast.success("Payment Successfull")
    

  }

    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
       <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <h2  color="secondary">Employee List</h2></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"><Button onClick={handleOpen} variant="contained">Create New Payment</Button></TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Employee</TableCell>
            <TableCell>Month</TableCell>
            <TableCell>Payment Date</TableCell>
            <TableCell>Payment Mone</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.latin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

<form onSubmit={createOnClick}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Box
            component="form"
            noValidate
            sx={{ mt: 0 }}
          >
          <h2 color='secondary'>Employee Pay Runs</h2>

              <Grid container spacing={4}>
              <Grid item xs={12}>
<FormControl fullWidth variant="standard">
  <InputLabel id="demo-simple-select-label">Select Employee</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
   onChange={handleChange} 
  >
    <MenuItem value={10}>Armaan</MenuItem>
    <MenuItem value={20}>Shofiq</MenuItem>
    <MenuItem value={30}>Shadman</MenuItem>
  </Select>
</FormControl>
<FormControl fullWidth variant="standard" sx={{ mt:2 }}>
  <InputLabel id="demo-simple-select-label">Select Month</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
   onChange={handleChange} 
  >
    <MenuItem value={1}>January</MenuItem>
    <MenuItem value={2}>February</MenuItem>
    <MenuItem value={3}>March</MenuItem>
    <MenuItem value={4}>April</MenuItem>
    <MenuItem value={5}>May</MenuItem>
    <MenuItem value={6}>June</MenuItem>
    <MenuItem value={7}>July</MenuItem>
    <MenuItem value={8}>August</MenuItem>
    <MenuItem value={9}>September</MenuItem>
    <MenuItem value={10}>October</MenuItem>
    <MenuItem value={11}>November</MenuItem>
    <MenuItem value={12}>December</MenuItem>
  </Select>
</FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="active_days"
                  label="Active Days"
                  name="active_days"
                  autoComplete="active_days"
                  value={30}
                />
              </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="salary"
                  label="Salary"
                  name="salary"
                  autoComplete="salary"
                  value={30000}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="allowance"
                  label="Allowance"
                  name="allowance"
                  autoComplete="allowance"
                   value={0}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="loan"
                  label="Loan"
                  name="loan"
                  autoComplete="loan"
                  value={0}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="deduction"
                  label="Deduction"
                  name="deduction"
                  autoComplete="deduction"
                  value={0}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="other"
                  label="Other"
                  id="other"
                  autoComplete="other"
                  value={0}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="total"
                  label="total"
                  id="total"
                  autoComplete="total"
                  value={30000}
                  disabled
                />
              </Grid>
            </Grid>
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >    
             Complete Payment
            </Button>
           
          </Box>
        </Box>
      </Container>
        </Box>
      </Modal>
      </form>   
     <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
    </TableContainer>

    
  );
};

export default Employees;