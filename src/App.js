import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainWindow />
    </div>
  );
}

class MainWindow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div id="mainWindow">
				TEST TEST TEST
			</div>
		)
	}
}




export default App;