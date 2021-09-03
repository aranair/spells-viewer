import React from 'react';
import styled from "@emotion/styled";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import spells from '../spells.json';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150, filterable: true },
  { field: 'name', headerName: 'Spell', width: 200, filterable: true },
  { field: 'school', headerName: 'School', width: 200, filterable: true },
  { field: 'range', headerName: 'Range', width: 200, filterable: true },
  { field: 'duration', headerName: 'Duration', width: 300, filterable: true },
];

const SpellListContainer = styled.div`
  display: 'block';
  margin: 30px auto 0 auto;
  height: 80vh;
  width: 80%;
  max-width: 1200px;
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
