import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Form } from '@availity/form';
import '@availity/yup';
import '@availity/yup/moment';
import * as yup from 'yup';
import { Basic, Information, Appeal } from './components';

const schema = yup.object().shape({
  appealReason: yup.string().isRequired(true, 'This Field is Required.'),
  organization: yup.string().isRequired(true, 'This Field is Required.'),
  provider: yup.string().isRequired(true, 'This Field is Required.'),
  memberId: yup.string().isRequired(true, 'This Field is Required.'),
  claimId: yup.string().isRequired(true, 'This Field is Required.'),
  fromToDate: yup.dateRange().isRequired(true, 'This Field is Required.'),
  originalBilled: yup.string(),
  originalPaid: yup.string(),
});

const AppealRequest = ({ history }) => (
  <Form
    validationSchema={schema}
    initialValues={{
      appealReason: '',
      organization: '',
      provider: '',
      memberId: '',
      claimId: '',
      fromToDate: null,
      originalBilled: '',
      originalPaid: '',
    }}
    onSubmit={() => history.push(`response`)}
  >
    <Basic />
    <Information />
    <Appeal />
    <div className="form-controls">
      <Button type="submit" color="primary" className="form-controls-right">
        Submit
      </Button>
    </div>
  </Form>
);

AppealRequest.propTypes = {
  history: PropTypes.object,
};

export default withRouter(AppealRequest);
