// Code Invitation Component Here
import React from 'react';

class ThemedDecorations extends React.Component {
  render(){
    const themedChildren = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>
      {themedChildren}
      </div>
    )
  }
}

export default ThemedDecorations;
