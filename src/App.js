/*
  Author:			Joshua Henderson
  Project:			My Game
  Created:			2/1/22
  Last Modified:	2/1/22
*/


import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainWindow />
	  <ItemWindow />
	  <StatsWindow />
    </div>
  );
}

class MainWindow extends React.Component {
  constructor(props) {
	super(props);
  }
  render() {
	return(
	  <div className="main-window">
	  </div>
	)
  }
}

class ItemWindow extends React.Component {
  constructor(props) {
	super(props);
  }
  render() {
    return(
	  <div className="item-window">
	  </div>
	)
  }
}

class StatsWindow extends React.Component {
  constructor(props) {
	super(props);
  }
  render() {
    return(
	  <div className="stats-window">
	  </div>
	)
  }
}


export default App;