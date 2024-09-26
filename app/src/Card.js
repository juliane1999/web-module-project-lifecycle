import React from 'react';

class Card extends React.Component {
  componentDidMount() {
    console.log(`Card ${this.props.user.name}:  Mounts`);
  }

  render() {
      const { user } = this.props;
      console.log(`Card ${this.props.user.name}: Renders`);
      return(
      <div key={user.id} className="user">
        <img src={user.avatar_url} alt={user.name} />
        <div>
          <h3>{user.name}</h3>
        </div>
      </div>);
  }
}

export default Card;