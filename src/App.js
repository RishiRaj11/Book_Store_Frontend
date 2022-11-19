import React from 'react'
import Header from './components/Header';
import Books from './components/Book/Books'
import AddBook from './components/AddBook';
import Home from './components/Home';
import About from './components/About';
import BookDetails from './components/Book/BookDetails';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddBook />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/books/:id" element={<BookDetails />} exact />
        </Routes>
      </main>



    </div>
  )
}

export default App;