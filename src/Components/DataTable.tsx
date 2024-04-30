import React from 'react';
import { styled } from '@mui/system';
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import RadioButtonRow from './RadioButtonRow';
import { TechData } from '../Data/data';

// Define the styles for the table header cell
const ColoredHeaderCell = styled(TableCell)({
  backgroundColor: '#008080', // Background color for header cells
  color: '#fff', // Text color for header cells
});

const StyledTable = styled(Table)`
  width: 100%;
`;

const StyledTableRow = styled(TableRow)`
  height: 20;
`;

interface DataTableProps {
  data: TechData[];
  selectedOption: string;
  handleSubmit:  (selectedOption: string) => void
}

const DataTable: React.FC<DataTableProps> = ({ data, selectedOption, handleSubmit }) => {
  const selectedData = data.find(item => item.label === selectedOption);

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
            <StyledTableRow>
              <ColoredHeaderCell>Technology</ColoredHeaderCell>
              <ColoredHeaderCell>Query Options</ColoredHeaderCell>
              <ColoredHeaderCell>Submit Query</ColoredHeaderCell>
            </StyledTableRow>
        </TableHead>
        <TableBody>
            {selectedData?.details.map((rowData, index) => (
              <RadioButtonRow key={index} data={rowData} onSubmit={handleSubmit} />            
            ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default DataTable;
