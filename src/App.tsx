import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import {Post} from './components/posts/post';
import {CreatePost} from './components/posts/createPost';

function App() {
  return (

    <Routes>
      <Route path="" element={<Post/>} />
      <Route path="/new" element={<CreatePost/>} />
    </Routes>

  );
}

export default App;
