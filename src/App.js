/*
  Author:			Joshua Henderson
  Project:			My Game
  Created:			2/1/22
  Last Modified:	2/1/22
*/

import React from 'react';
import './App.css';
import { locations } from "./mapData"






function App() {
  return (
    <div className="App">
	  <Wrapper />
    </div>
  )
}

let currentOptionWindow = [];

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

class Option extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <button className="option">OPTION</button>
      </div>
    )
  }
}

class OptionWindow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div
        id="option-window"
        >
        <Option />
      </div>
    )
  }
}

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="message">
        <span>
          {this.props.message}
        </span>
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
        <Message message="You picked up a small health potion." />
        <Message message="" />
        <Message message="You awaken."/>
        <OptionWindow />
      </div>
    )
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="item">
        <div className="item-main">
          <div>
            <span className="item-name">{this.props.itemName}</span> <span><i class={this.props.itemIcon}></i></span>
          </div>
          <div>
            <button id="useItem"><i class="fa fa-check"></i></button>
            <button id="deleteItem"><i class="fa fa-trash"></i></button>
          </div>
        </div>
        <div className="item-info">
          {this.props.itemInfo}
        </div>
      </div>
    )
  }
}

class ItemWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItems: []
    }
    this.getCurrentItems = this.getCurrentItems.bind(this);
  }
  getCurrentItems() {
    /* Retrieve item IDs from storage */
  }
  addItem() {
    /* Add a new item to the list */
  }
  removeItem() {
    /* Delete an existing item from the list */
  }
  render() {
    return(
      <div className="item-window">
        <Item
          itemName='Item 1'
          itemIcon='fa fa-flask'
          itemInfo='This is an important item.'
          />
        <Item itemName='Item 2'/>
      </div>
	  )
  }
}

class StatsWindow extends React.Component {
  constructor(props) {
	  super(props);
    this.state = {
      playerLevel: 1,
      playerHP: 100,
      playerMaxHP: 100,
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