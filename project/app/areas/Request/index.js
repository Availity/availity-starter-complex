import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { Basic, Information, Appeal } from './components';

const AppealRequest = ({ history, spaceId }) => (
  <AvForm onValidSubmit={() => history.push(`response`)}>
    <Basic />
    <Information />
    <Appeal />
    <div className="form-controls">
      <Button type="submit" color="primary" className="form-controls-right">
        Submit
      </Button>
    </div>
  </AvForm>
);

AppealRequest.propTypes = {
  spaceId: PropTypes.string,
  history: PropTypes.object,
};

export default withRouter(AppealRequest);
