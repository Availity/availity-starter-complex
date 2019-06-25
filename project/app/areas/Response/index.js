import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Button, Alert } from 'reactstrap';
import { Transaction, Claim, Provider, Contact, Appeal } from './components';

const Response = ({ spaceId }) => (
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
      <Button tag={Link} color="primary" to={`/?spaceId=${spaceId}`}>
        New Appeal
      </Button>
    </div>
  </>
);

Response.propTypes = {
  spaceId: PropTypes.string
};

export default Response;