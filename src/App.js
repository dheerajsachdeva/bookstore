import Books from "./components/Books";
import { useState } from "react";
import BookList from "./components/BookList";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from "./components/Categories";
import Navbar from './components/Navbar';

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (books) => {
    setBooks((prevState) => [...prevState, books]);
  };

  const deleteBook = (id) => {
    setBooks((prevState) => prevState.filter((e) => e.id !== id))
  }


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            {books && (<BookList books={books}
              deleteBook={deleteBook} />)}
            <Books addBook={addBook} />
          </Route>
          <Route path='/categories'>
            <Categories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
