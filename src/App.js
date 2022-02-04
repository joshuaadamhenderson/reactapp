/*
  Author:			Joshua Henderson
  Project:			My Game
  Created:			2/1/22
  Last Modified:	2/3/22
*/

import React from 'react';
import './App.css';
import { maps } from "./mapData"

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
	this.state = {
	  currentMap: maps[0],
	  messageArr: []
	}
	this.changeMap = this.changeMap.bind(this);
  }
  changeMap() {
	this.setState(prevState => ({
	  currentMap: maps[1],
	  messageArr: [...prevState.messageArr, this.state.currentMap.message]
	}))
	if (this.state.messageArr.length > 4) {
	  this.state.messageArr.shift();
	}
  }
  render() {
    return(
      <div className="wrapper">
        <div className="leftBox">
          <StatsWindow currentMap={this.state.currentMap}/>
          <ItemWindow />
        </div>
        <MainWindow messages={this.state.messageArr} currentMap={this.state.currentMap} changeMap={this.changeMap}/>
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
		<button
		  id={this.props.id}
		  onClick={this.props.changeMap}
		  className="option"
		  >
		  {this.props.display}
		</button>
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
		{this.props.currentMap.choices.map((data, key)=> {
		  return (
		    <Option
			  changeMap={this.props.changeMap}
			  id={this.props.currentMap.mapID}
			  nextMap={data.result}
			  display={data.choice}
			  key={key}
			  />
		  )
		})}
      </div>
    )
  }
}



class MessageWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="message-window">
		{this.props.messages.map((data, key) => {
		  return (
		    <p className="message" key={key}>{data}</p>
		  )
		})}
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
        <MessageWindow messages={this.props.messages} currentMap={this.props.currentMap}/>
        <OptionWindow currentMap={this.props.currentMap} changeMap={this.props.changeMap}/>
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
		<span class="left">MAP </span><span class="right">{this.props.currentMap.mapID}</span>
	  </div>
	)
  }
}

export default App;