import React from 'react';
import styled from "@emotion/styled";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import spells from '../spells.json';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150, filterable: true },
  { field: 'name', headerName: 'Spell Name', width: 300, filterable: true },
  { field: 'school', headerName: 'School', width: 200, filterable: true },
];

const SpellListContainer = styled.div`
  display: 'block';
  margin-top: 10vh;
  height: 80vh;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

function SpellList() {
  return (
    <SpellListContainer>
      <DataGrid
        rows={spells}
        columns={columns}
      />
    </SpellListContainer>
  );
}

export default SpellList;
