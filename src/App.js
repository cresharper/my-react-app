import React, { Component } from 'react';
// import Intro from './Components/intro';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: '',
      name: ''
    }
  }

  changeName(e) {
    e.preventDefault();
    const newName = this.refs.name.value;
    this.setState({ 
      name: newName 
    });
  }

  changeHeader(e) {
    e.preventDefault();
    const newHeader = this.refs.post.value;
    this.setState({ 
      header: newHeader 
    });
  }

  clearFields() {
    this.setState({ 
      name: '',
      header: ''
    });
  }

  render() {
    return (
      <div className="form-section">
          <h1>Welcome Back {this.state.name}</h1>
            <h2>{this.state.header}</h2>
            <form onSubmit={this.changeName.bind(this)}>
                <input id="input-name" type="text" placeholder="Name" ref="name" />
                <input type="submit" value="Submit" />
            </form>
            <form onSubmit={this.changeHeader.bind(this)}>
                <input id="input-post" type="text" placeholder="Post Here" ref="post" />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={this.clearFields.bind(this)}>Clear All</button>
      </div>  
    );
  }
}

export default App;
