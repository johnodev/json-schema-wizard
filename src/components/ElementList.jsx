import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TypeString from './TypeString';
import TypeNumber from './TypeNumber';
import TypeInteger from './TypeInteger';
import TypeBoolean from './TypeBoolean';
import TypeList from './TypeList';

class ElementList extends Component {
    constructor(props) {
        super(props)
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

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

    handleEdit(elId) {
        this.props.onEditElement(elId);
    }

    handleDelete(elId) {
        this.props.onDeleteElement(elId);
    }

    handleUpdate(element) {
        this.props.onUpdateElement(element);
    }

    render() {
        const { elementList, editingElementId } = this.props;

        return (
            <div>
                {elementList && elementList.length > 0 && (
                    <h1>Property List</h1>
                )}
                <div className="form-panel">
                    {
                        elementList && elementList.map((e) => {
                            const isEditing = editingElementId && editingElementId === e.id;

                            return (
                                <div key={e.id}>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <strong>Field Name:</strong> {e.formData.title}
                                        </div>
                                        <div className="col-md-3">
                                            <strong>Display Name:</strong> {e.formData.title}
                                        </div>
                                        <div className="col-md-4">
                                            <strong>Data Type:</strong> {e.type}
                                        </div>
                                        <div className="col-md-1" style={{ textAlign: 'right' }}>
                                            {!isEditing && (
                                                <button onClick={() => { this.handleEdit(e.id) }} type="button" className="btn btn-primary"> edit </button>
                                            )}
                                        </div>
                                        <div className="col-md-1" style={{ textAlign: 'right' }}>
                                            {!isEditing && (
                                                <button onClick={() => { this.handleDelete(e.id) }} type="button" className="btn btn-danger"> delete </button>
                                            )}
                                        </div>
                                    </div>
                                    {isEditing && (
                                        <div className="form-panel">
                                            {e.type === "string" && (<TypeString onSubmitElement={this.handleUpdate} formData={e.formData} elementId={e.id} />)}
                                            {e.type === "array" && (<TypeList onSubmitElement={this.handleUpdate} formData={e.formData} elementId={e.id} />)}
                                            {e.type === "number" && (<TypeNumber onSubmitElement={this.handleUpdate} formData={e.formData} elementId={e.id} />)}
                                            {e.type === "integer" && (<TypeInteger onSubmitElement={this.handleUpdate} formData={e.formData} elementId={e.id} />)}
                                            {e.type === "boolean" && (<TypeBoolean onSubmitElement={this.handleUpdate} formData={e.formData} elementId={e.id} />)}
                                        </div>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

ElementList.propTypes = {
    elementList: PropTypes.arrayOf(PropTypes.object),
    editingElementId: PropTypes.string,
    onEditElement: PropTypes.func.isRequired,
    onUpdateElement: PropTypes.func.isRequired,
    onDeleteElement: PropTypes.func.isRequired,
}

ElementList.defaultProps = {
    elementList: [],
    editingElementId: null,
}

export default ElementList;
