import React from 'react';
import User from './User'

class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    console.log("App: Component Mounts");
    setTimeout (()=>{
      this.setState({
        ...this.state,
        user: data
      })
    }, 5000);
  }

  render() {
    console.log("App: Renders Component");
    return (
      <div className="App">
       {
          (this.state.user.length > 0) ? <User user={this.state.user} /> : <div>Loading</div>
        }
      </div>
    );
  }
}


export default App;
