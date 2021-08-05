import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup  from '@material-ui/core/ButtonGroup';
import DeleteButton from './DeleteButton'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AuthorsList() {
  const classes = useStyles();
  const [authors, setAuthors] = useState([]);

  useEffect( () => {
    axios.get("http://localhost:8000/api/authors")
    .then(res => { 
      console.log(res.data)
      setAuthors(res.data)
    })
    .catch(err => console.log(err))
  }, []);

  const onDelete = (id) => {
    setAuthors(authors.filter(author => author._id != id));
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Author</StyledTableCell>
            <StyledTableCell align="center">Actions available</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {authors.map((author, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center" component="th" scope="row">
                {author.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                <ButtonGroup style={{margin: "0 auto"}} color="primary">
                    <Button size="medium" variant="outlined" onClick={(e) => navigate(`/authors/edit/${author._id}`)}>Edit</Button>
                    <DeleteButton onDelete={onDelete} id={author._id} />
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
