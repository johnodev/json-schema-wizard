import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';
import uniqid from 'uniqid';
import formatMessage from '../Utils';

const schema = {
    "type": "object",
    //title: "Integer",
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
        "minimumValue": {
            "type": "integer",
            "title": "Minimum Value"
        },
        "maximumValue": {
            "type": "integer",
            "title": "Maximum Value"
        },
    },
    "required": ["fieldName", "title"]
}

class TypeInteger extends Component {
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
            type: 'integer',
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
                    Set validation and data for number.
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

TypeInteger.propTypes = {
    onSubmitElement: PropTypes.func.isRequired,
    elementId: PropTypes.string,
}

TypeInteger.defaultProps = {
    formData: null,
    elementId: null,
}


export default TypeInteger;
