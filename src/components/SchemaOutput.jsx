import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatSchema } from '../Utils';

class ShemaOutput extends Component {
  render() {
    const { schemaTitle, elementList } = this.props;

    return (
      <div>
        {elementList && elementList.length > 0 && (
          <div>
            <h1>Genereated Schema</h1>
            <div className="form-panel">
              <pre>
                { formatSchema(schemaTitle, elementList) }
              </pre>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ShemaOutput.propTypes = {
  elementList: PropTypes.arrayOf(PropTypes.object),
  schemaTitle: PropTypes.string,
}

ShemaOutput.defaultProps = {
  elementList: [],
  schemaTitle: null,
}

export default ShemaOutput;

