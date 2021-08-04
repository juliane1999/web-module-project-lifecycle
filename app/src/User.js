import React from 'react';
import Card from './Card';

class User extends React.Component {
  componentDidMount() {
    console.log("App Mounts");
  }

  render() {
    console.log("App renders");
    return (
      <>
        {this.props.user.map(user => (
          <Card key={user.id} user={user}/>
        ))}
      </>
    );
  }
}

export default User;