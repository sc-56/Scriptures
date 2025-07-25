import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  useEffect(() => {document.title = "华严经";}, []);
  
  const style = {
    marginLeft : '20%',
    marginRight: '20%',
  };

  const innerStyle = {
    marginTop: '10%',
    paddingLeft: '5%',
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
  };

  
  return (
    <div style={style}>
      <Router>
        <Header />
        <div style={innerStyle}>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
