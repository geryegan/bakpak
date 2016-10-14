import React from 'react';
import ReactDOM from 'react-dom';
// import App from './client/App.jsx';

class App extends React.Component{
  render(){
  	return <h2>Hello world Again!</h2>;
  }
};

ReactDOM.render(<App />, document.getElementById('app'));

