import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const PriceTable = ({ prices}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dates</TableCell>
            <TableCell>Min Stay (nights)</TableCell>
            <TableCell>Rate (€ per day)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prices.map((priceInfo, index) => (
            <TableRow key={index}>
              <TableCell>{priceInfo.dates}</TableCell>
              <TableCell>{priceInfo.minStay}</TableCell>
              <TableCell>€{priceInfo.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceTable;
