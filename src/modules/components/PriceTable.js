import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));

function PriceTable({ prices, t }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('apModal.dates')}</TableCell>
            <TableCell>{t('apModal.ms')} </TableCell>
            <TableCell>{t('apModal.rate')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prices.map((priceInfo, index) => (
            <StyledTableRow key={priceInfo.dates}>
              <TableCell>{priceInfo.dates}</TableCell>
              <TableCell>{priceInfo.minStay}</TableCell>
              <TableCell>€{priceInfo.rate}</TableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
            <TableCell colSpan={2}>{t('apModal.transfer')}</TableCell>
            <TableCell>€45</TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PriceTable;
