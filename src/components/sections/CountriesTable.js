import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'country', label: 'Country', align: 'left' },
  { id: 'cases', label: 'Cases' },
  { id: 'todayCases', label: 'Cases Today' },
  { id: 'deaths', label: 'Deaths' },
  { id: 'todayDeaths', label: 'Deaths Today' },
  { id: 'recovered', label: 'Recovered' },
  { id: 'active', label: 'Active' },
  { id: 'critical', label: 'Critical' },
  { id: 'casesPerOneMillion', label: 'Cases / 1M pop' },
  { id: 'deathsPerOneMillion', label: 'Deaths / 1M pop' },
]

export default function CountriesTable({data}) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid xs={12} className="countriesTable" item>
      <Card className="card" >
        <TableContainer>
        <Table stickyHeader aria-label="table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align ? column.align : 'center'}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={`${row.country}`}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={`${column.id}-${value}`} align={column.align ? column.align : 'center'}>
                        { ((column.id === 'todayCases' || column.id === "todayDeaths") && value) ? '+' : null}{value ? value : '-'}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={10}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />

      </Card>
    </Grid>
  )
}
