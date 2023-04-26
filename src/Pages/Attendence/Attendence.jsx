import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const Attendence = () => {

  function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Armaan', 159, 6.0, 24, 4.0),
  createData('Shofiq', 237, 9.0, 37, 4.3),
  createData('Shadman', 262, 16.0, 24, 6.0),
  createData('Rakib', 305, 3.7, 67, 4.3),
  createData('Jubayer', 356, 16.0, 49, 3.9),
];
  return (
     <TableContainer component={Paper}>
     <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
            <TableCell>7</TableCell>
            <TableCell>8</TableCell>
            <TableCell>9</TableCell>
            <TableCell>10</TableCell>
            <TableCell>11</TableCell>
            <TableCell>12</TableCell>
            <TableCell>13</TableCell>
            <TableCell>14</TableCell>
            <TableCell>15</TableCell>
            <TableCell>16</TableCell>
            <TableCell>17</TableCell>
            <TableCell>18</TableCell>
            <TableCell>19</TableCell>
            <TableCell>20</TableCell>
            <TableCell>21</TableCell>
            <TableCell>22</TableCell>
            <TableCell>23</TableCell>
            <TableCell>24</TableCell>
            <TableCell>25</TableCell>
            <TableCell>26</TableCell>
            <TableCell>27</TableCell>
            <TableCell>28</TableCell>
            <TableCell>29</TableCell>
            <TableCell>30</TableCell>
            <TableCell>31</TableCell>
            <TableCell>Total Days</TableCell>
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
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>P</TableCell>
              <TableCell>31</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
  );
};

export default Attendence;