import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form'
import formatMessage from '../Utils';

const schema = {
    // title: "Add Element",
    type: "object",
    properties: {
        fieldType: {
            type: "string",
            title: "Type of field",
            enum: ["string", "array", "boolean", "integer", "number"],
            enumNames: ["String", "List", "Boolean", "Integer", "Number"],
            default: "",
        },
    },
    required: ["fieldType"],
}

const uiSchema = {
    fieldType: {
        "ui:widget": "radio"
    }
};

class AddElement extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.transformErrors = this.transformErrors.bind(this);
    }

    onSubmit(payload) {
        const { formData } = payload;
        this.props.onSetActiveElementType(formData.fieldType);
    }

    transformErrors(errors) {
        return errors.map(error => {
            error.message = formatMessage(error)
            return error;
        });
    }

    render() {
        return (
            <div>

                <div className="info">
                    Select a the field type that you would like to add  to the schema.
                </div>
                <Form
                    noHtml5Validate
                    showErrorList={false}
                    schema={schema}
                    uiSchema={uiSchema}
                    onSubmit={this.onSubmit}
                    transformErrors={this.transformErrors}
                />

            </div>
        );
    }
}

AddElement.propTypes = {
    onSetActiveElementType: PropTypes.func.isRequired,
    editingElementId: PropTypes.number,
}

export default AddElement;

