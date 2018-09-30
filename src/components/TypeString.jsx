import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';
import uniqid from 'uniqid';
import formatMessage from '../Utils';


const schema = {
  "type": "object",
  //  title: "String",
  "properties": {
    "fieldName": {
      "type": "string",
      "title": "Field Name",
      "pattern": "^[A-Za-z]",
    },
    "title": {
      "type": "string",
      "title": "Display Name",
    },
    "isRequired": {
      "type": "boolean",
      "title": "Required",
      "description": "Is this a required field?",
    },
    "minLength": {
      "type": "integer",
      "title": "Minimum Length"
    },
    "maxLength": {
      "type": "integer",
      "title": "Maximum Length"
    },
    // "format": {
    //   "type": "string",
    // },
    "pattern": {
      "type": "string",
      "title": "Pattern",
    },
    "renderAsTextArea": {
      "type": "boolean",
      "title": "Textarea",
      "description": "Should this be rendered as a textarea?",
    },
  },
  "required": ["fieldName", "title"]
}

class TypeString extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.transformErrors = this.transformErrors.bind(this);
  }

  onSubmit(payload) {
    const { formData } = payload;
    const { elementId } = this.props;
    this.props.onSubmitElement({
      id: elementId || uniqid(),
      type: 'string',
      formData,
    });
  }

  transformErrors(errors) {
    console.log(errors)
    return errors.map(error => {
      error.message = formatMessage(error)
      return error;
    });
  }

  render() {
    const { formData } = this.props;
    return (
      <div>
        <div className="info">
          Set validation and data for string.
        </div>
        <Form
          noHtml5Validate
          showErrorList={false}
          schema={schema}
          onSubmit={this.onSubmit}
          transformErrors={this.transformErrors}
          autocomplete="off"
          formData={formData}
        />
      </div>
    );
  }
}

TypeString.propTypes = {
  onSubmitElement: PropTypes.func.isRequired,
  formData: PropTypes.object,
  elementId: PropTypes.string,
}

TypeString.defaultProps = {
  formData: null,
  elementId: null,
}

export default TypeString;

