import React, { Component } from 'react';

class AuthenticatedLayout extends Component {
  render() {
    return (
      <div>
        <header>This is header</header>
        {this.props.children}
      </div>
    );
  }
}

export default AuthenticatedLayout;
