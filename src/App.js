import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfile from './SocialProfile';
import Title from './Title';
import profile from './profile.png';

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
        <img src={profile} alt="profile" className='profile' />
        <h1>Hello!</h1>
        <p>My name is Eugenio.</p>
        <Title/>
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
      <SocialProfile/>
      </div>
    )
    }
}

export default App;
