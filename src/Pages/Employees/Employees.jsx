import { CheckBox } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, CssBaseline, FormControlLabel, Grid, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '', transform: 'scale(0.8)' }}
  >
  </Box>
)
const Employees = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const [store,setStore] = useState([]);
  const postUrl = 'https://soft.quiz360.online/api/todo';

  useEffect(()=>{
        fetch('http://192.168.0.227/myPractisebackend/api/employee')
        .then(response => response.json())
        .then(data => setStore(data));
  },[])

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

  //employee
  const [employee, setEmployee] = useState(null);
  const [postition, setPostition] = useState(null);
  const [salary, setSalary] = useState(null);
  const stringRegex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;

  const createOnClick = async (e) => {
    e.preventDefault();
    const employee_name = e.target.employee_name.value;
    const postition_name = e.target.postition_name.value;
    const insalary = e.target.salary.value;
    const postUrl = 'http://192.168.0.227/myPractisebackend/api/employee';



    if (employee_name.trim() === '') {
      setEmployee('Please Enter Employee Name');

      return toast.error(employee, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

   else if (postition_name.trim() === '') {
      setPostition('Please Enter Postition');

      return toast.error(postition, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
   else if (insalary.trim() === '') {
      setSalary('Please Enter Salary');

      return toast.error(salary, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }




    const resp = await axios.post(postUrl,{
      employee_name,
      postition_name,
      insalary
     })
    setOpen(false);
    toast.success("New Employee Created")
    






  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <h2 color="secondary">Employee List</h2></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"><Button onClick={handleOpen} variant="contained">Add Employee</Button></TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell align="right">Time-In(Morning)</TableCell>
            <TableCell align="right">Time-Out</TableCell>
            <TableCell align="right">Total Hours</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.map((store) => (
            <TableRow
              key={store.employee_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {store.employee_name}
              </TableCell>
              <TableCell align="right">{store.employee_name}</TableCell>
              <TableCell align="right">{store.postition_name}</TableCell>
              <TableCell align="right">{store.salary}</TableCell>
              <TableCell align="right">{store.address}</TableCell>
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
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 0 }}
                >
                  <h2>New Employee</h2>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="Employee Name"
                        name="employee_name"
                        autoComplete="employee_name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="position"
                        label="Position Name"
                        name="postition_name"
                        autoComplete="postition_name"
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
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="contact"
                        label="Contact"
                        name="contact"
                        autoComplete="contact"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="status"
                        label="Status"
                        id="status"
                        autoComplete="status"
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create
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