import React, {Component} from 'react';
import PROJECTS from './project';

class Projects extends Component {
  render(){
    return(
      <div>
        <h2>Highland Projects</h2>
        <div>
          <div>{
            PROJECTS.map(PROJECT=> {
              return(
                <div key={PROJECT.id}>{PROJECT.title}</div>
              );
            })
              }</div>

        </div>
      </div>
    )
  }
}

export default Projects;
