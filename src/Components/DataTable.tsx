import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper, Button, IconButton, useMediaQuery } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import RadioButtonRow from './RadioButtonRow';
import { TechData } from '../Data/data';

// Define the styles for the table header cell
const ColoredHeaderCell = styled(TableCell)({
  backgroundColor: '#008080', // Background color for header cells
  color: '#fff', // Text color for header cells
  width: '33%', // Width of the header cell
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
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  
  useEffect(() => {
    setIsCollapsed(false);
  }, [selectedOption]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const onSubmit = (selectedOption: string) => {
    isMobile && setIsCollapsed(true);
    handleSubmit(selectedOption);
  };
  
  return (
      <TableContainer>
        <StyledTable>
          <TableHead>
              <StyledTableRow>
                <ColoredHeaderCell>
                  <IconButton onClick={toggleCollapse}>
                    {!isCollapsed ? <ExpandMore /> : <ExpandLess />}
                  </IconButton>
                  Technology
                </ColoredHeaderCell>
                <ColoredHeaderCell>Query Options</ColoredHeaderCell>
                <ColoredHeaderCell>Submit Query</ColoredHeaderCell>
              </StyledTableRow>
          </TableHead>
          <TableBody style={{ display: isCollapsed ? 'none' : 'table-row-group' }}>
              {selectedData?.details.map((rowData, index) => (
                <RadioButtonRow key={index} data={rowData} onSubmit={onSubmit} />            
              ))}
          </TableBody>
       </StyledTable>
      </TableContainer>
  );
};

export default DataTable;
