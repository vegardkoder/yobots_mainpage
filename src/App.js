import logo from './logo.svg';
import './App.css';
import Landing_Page from './landing_page';
import Main_Page from './main_page';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

function App() {

  /*
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path='https://vegardkoder.github.io/yobots_mainpage/' element={<Landing_Page />} />
                <Route path='https://vegardkoder.github.io/yobots_mainpage/home' element={<Main_Page />} />
            </Routes>
      </Router> 
    </div>
  );*/
  
  const [page, setPage] = useState("landing");

  return (
    <div className="App">
      { page == "landing" ? 
          <Landing_Page stateChanger={setPage}/>
        :
          <Main_Page/>
      } 
    </div>
  );
}

export default App;
