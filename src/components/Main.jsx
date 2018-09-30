import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TypeString from './TypeString';
import TypeNumber from './TypeNumber';
import TypeInteger from './TypeInteger';
import TypeBoolean from './TypeBoolean';
import TypeList from './TypeList';

class Main extends Component {  
  constructor(props) {
    super(props)
  }
  
  handleNewElementChange(evt) {
    this.setState({
      newElement: { 
        type: evt.target.value,
      },
    })
  }

  addType(evt) {
    console.log(evt);
    console.log(this.state);
  }

  render() {
    const { activeElement, onSubmitElement } = this.props;
    return (
      <div>
        { activeElement === "string"  && (<TypeString onSubmitElement={onSubmitElement} />)}
        { activeElement === "array"  && (<TypeList onSubmitElement={onSubmitElement} />)}
        { activeElement === "number"  && (<TypeNumber onSubmitElement={onSubmitElement} />)}
        { activeElement === "integer"  && (<TypeInteger onSubmitElement={onSubmitElement} />)}
        { activeElement === "boolean"  && (<TypeBoolean onSubmitElement={onSubmitElement} />)}
      </div>
    );
  }
}

Main.propTypes = {
  activeElement: PropTypes.string,
  onSubmitElement: PropTypes.func.isRequired,
}

Main.defaultProps = {
  activeElement: null,
}

export default Main;



