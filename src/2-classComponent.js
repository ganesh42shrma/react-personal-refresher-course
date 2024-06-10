import React, { Component } from 'react';

// Class component
class MyClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <h2>This is a class component.</h2>
      </div>
    );
  }
}

export default MyClassComponent;
