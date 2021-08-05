import Button from '@material-ui/core/Button';
import axios from 'axios';
import React from 'react'

const DeleteButton = ({onDelete, id}) => {

    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        onDelete(id);
    }

    return (
        <Button size="medium" variant="outlined" onClick={(e) => deleteAuthor(e)}>Delete</Button>
    )
}

export default DeleteButton
