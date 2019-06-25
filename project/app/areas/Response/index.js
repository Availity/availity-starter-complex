import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Alert } from 'reactstrap';
import { Transaction, Claim, Provider, Contact, Appeal } from './components';

const Response = ({ history }) => (
  <>
    <Alert color="success" className="d-flex align-items-center justify-content-between">
      Your Appeal has been submitted.{' '}
      <Button color="dark" onClick={() => window.print()}>
        Print Copy
      </Button>
    </Alert>
    <Transaction />
    <Claim />
    <Appeal />
    <Provider />
    <Contact />
    <div className="d-flex justify-content-end">
      <Button color="primary" onClick={() => history.goBack()}>
        New Appeal
      </Button>
    </div>
  </>
);

Response.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Response);
