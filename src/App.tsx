import React from 'react';
import './App.css';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import spells from './spells.json';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150, filterable: true },
  { field: 'name', headerName: 'Name', width: 300, filterable: true },
  { field: 'school', headerName: 'School', width: 200, filterable: true },
];

function App() {
  return (
    <div className="App">
      <DataGrid
        rows={spells}
        columns={columns}
      />
    </div>
  );
}

export default App;
