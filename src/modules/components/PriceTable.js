import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const PriceTable = ({ prices, t}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{ t( "apModal.dates" ) }</TableCell>
            <TableCell>{ t( "apModal.ms" ) } (nights)</TableCell>
            <TableCell>{ t( "apModal.rate" ) }(€ per day)</TableCell>
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
