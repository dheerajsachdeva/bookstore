import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';


const Books = ( { addBook } ) => {
const [title, setTitle] = useState("")
const [author, setAuthor] = useState("")

const handleSubmit = (e) =>{
e.preventDefault();
addBook({
    id: Date.now(),
    title : title,
    author: author
})
setTitle("");
setAuthor("");
}

  return (
    <div>
        <form onSubmit = {handleSubmit} method= "Post">
        <label htmlFor="book">ADD NEW BOOK</label><br />
            <input onChange = {(e) =>{setTitle(e.target.value)}} type = "text" placeholder = "Book Title" value = {title} required />
            <input onChange = {(e) => {setAuthor(e.target.value)}}type = "text" placeholder = "Author" value = {author} required />
            <button className = "button" type = "submit" >Add Book</button>
        </form>
    </div>
  )
}

export default Books;

Books.propTypes = {
  addBook: PropTypes.func.isRequired,
};