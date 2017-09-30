import React, { Component } from 'react';
import './App.css';
import Balloon from "react-balloon";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word1: "",
      word2: "",
      isAnagram: false
    }
    this.changeWordOne = this.changeWordOne.bind(this);
    this.changeWordTwo = this.changeWordTwo.bind(this);
    this.isAnagram = this.isAnagram.bind(this);
  }
  render() {
    const center = {
      width: document.body.clientWidth / 2,
      height: document.body.clientHeight / 2,
    };
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="header">Welcome to Duo Anagram Checker!</h1>
        </div>
        <div className="App-intro">
          Enter any two words and ask Duo if they are anagrams!
        </div>
        <div className="App-body">
          <div className="textBox">
            <input type="text" name="word1" onChange={this.changeWordOne} className="defaultTextBox" placeholder="enter any words..." />
            <input type="text" name="word2" onChange={this.changeWordTwo} className="defaultTextBox" placeholder="enter any words..." />
          </div>
          <div className="answerBox">
            {this.state.isAnagram}
          </div>
          <div>
            <img src={require("./assets/Duo.png")} alt="Duo"/>
          </div>
        </div>
      </div>
    );
  }

  changeWordOne(e) {
    this.setState({
      word1: e.target.value,
      isAnagram: this.isAnagram(e.target.value, this.state.word2)
    })
  }

  changeWordTwo(e) {
    this.setState({
      word2: e.target.value,
      isAnagram: this.isAnagram(e.target.value, this.state.word1)
    })
  }

  isAnagram = (word1, word2) => {
    var word1_sanitized = word1.toLowerCase().split('').sort().join('').trim();
    var word2_sanitized = word2.toLowerCase().split('').sort().join('').trim();
  
    if (word1_sanitized === "" &&  word2_sanitized === "") {
      return "Strings are empty";
    } else if (word1_sanitized === word2_sanitized) {
      return "Anagrams!";
    } else {
      return "Not Anagrams!"
    };
  }
}

export default App;
