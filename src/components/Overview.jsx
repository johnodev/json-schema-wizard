import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import PropTypes from 'prop-types';

const schema = {
    //  title: "Overview",
    type: "object",
    properties: {
        title: {
            type: "string",
            title: "Json Schema Title",
            pattern: "^[A-Za-z]",
        },
    },
    required: ["title"],
}

class Overview extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.transformErrors = this.transformErrors.bind(this);
    }

    onSubmit(payload) {
        const { formData } = payload;
        this.props.onSetTitle(formData.title)
    }

    transformErrors(errors) {
        console.log(errors)
        return errors.map(error => {
            if (error.name === "pattern" && error.property === ".title") {
                error.message = "The title must start with a letter.";
            } else {

            }
            return error;
        });
    }

    render() {
        return (
            <div>
                <h1>Getting Started</h1>
                <div className="form-panel">
                    <div className="info">
                        We have to call this something. Lets give it a title.
                    </div>
                    <Form
                        noHtml5Validate
                        showErrorList={false}
                        schema={schema}
                        onSubmit={this.onSubmit}
                        transformErrors={this.transformErrors}
                    />
                </div>
            </div>
        );
    }
}

Overview.propTypes = {
    onSetTitle: PropTypes.func.isRequired,
}

export default Overview;
