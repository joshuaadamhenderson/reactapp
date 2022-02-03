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
	  <Wrapper />
    </div>
  )
}

class Wrapper extends React.Component {
  constructor(props) {
	super(props);
  }
  render() {
	return(
	  <div className="wrapper">
	    <div className="leftBox">
		  <StatsWindow />
	      <ItemWindow />
		</div>
        <MainWindow />
	  </div>
	)
  }
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
	this.state = {
	  playerLevel: 0,
	  playerHP: 0,
	  playerMaxHP: 0,
	  playerGold: 0
	};
  }
  render() {
    return(
	  <div className="stats-window">
	    <span class="left">LEVEL </span><span class="right">{this.state.playerLevel}</span>
		<span class="left">HP </span><span class="right">{this.state.playerHP} / {this.state.playerMaxHP}</span>
		<span class="left">GOLD </span><span class="right">{this.state.playerGold}</span>
	  </div>
	)
  }
}


export default App;