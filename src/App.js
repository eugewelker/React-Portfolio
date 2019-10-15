import React, { Component } from 'react';
import Projects from './Projects';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {displayBio:false};
      this.toggleDisplayBio=this.toggleDisplayBio.bind(this);
    }

  toggleDisplayBio(){
    this.setState({displayBio:!this.state.displayBio})
  }

    render(){

      return (
      <div className="App">
        <h1>My name is Eugenio. I am a 31 yo Engineer</h1>
        <p>I am always looking forward to working on meaningful projects</p>
        {this.state.displayBio?(
          <div>
            <p>I live in London, and coding every day</p>
            <p> My favorite language is Javascript, and I think ReactJs is awesome</p>
            <p>Besides coding, I also love RPG & card games, and running</p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
          </div>
        ):(
          <div>
          <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )
      }
      <hr/>
      <Projects/>
      <hr/>
      </div>
    )
    }
}

export default App;
