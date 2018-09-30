import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './components/Main';
import Header from './components/Header';
import Overview from './components/Overview';
import AddElement from './components/AddElement';
import ElementList from './components/ElementList';
import SchemaOutput  from './components/SchemaOutput';

import {
  setTitle,
  setActiveElementType,
  addElement,
  editElement,
  updateElement,
  deleteElement,
} from './redux/actions';

class App extends Component {
  render() {
    const { appState, editElement, updateElement, deleteElement } = this.props;
    return (
      <div className="container">
        <Header />
        <Overview onSetTitle={this.props.setTitle} />
        <ElementList
          elementList={appState.elementList}
          editingElementId={appState.editingElementId}
          onEditElement={editElement}
          onUpdateElement={updateElement}
          onDeleteElement={deleteElement}
        />
        <h1>Add Property</h1>
        <div className="form-panel">
          <div className="row">
            <div className="col-md-4">
              <AddElement onSetActiveElementType={this.props.setActiveElementType} />
            </div>
            <div className="col-md-8">
              <Main
                activeElement={appState.activeElementType}
                onSubmitElement={this.props.addElement}
              />
            </div>
          </div>
        </div>
        <SchemaOutput 
          elementList={appState.elementList}
          schemaTitle={appState.title}
        />
      </div>

    );
  }
}

const mapStateToProps = state => ({ appState: state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setTitle,
    setActiveElementType,
    addElement,
    editElement,
    updateElement,
    deleteElement,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);