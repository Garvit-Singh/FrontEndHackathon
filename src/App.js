import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationComponent/NavigationBar';
import Home from './Components/HomeComponent/Home';
import Profile from './Components/ProfileComponent/Profile';
import SearchPage from './Components/SearchComponents/Search';

const spacing = {
  margin: "100px"
}
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <div style={spacing}>
        Spacing
      </div>
      <Profile />
      <SearchPage />
    </div>
  );
}

export default App;
