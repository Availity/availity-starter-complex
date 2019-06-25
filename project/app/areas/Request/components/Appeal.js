import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { AvInput, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { requiredValidation } from '../../../shared';

export default () => (
  <Card body className="mb-3">
    <CardTitle className="card-title-secondary">Appeal Reason</CardTitle>
    <AvRadioGroup name="appealReason" inline validate={requiredValidation}>
      <AvRadio label="Eligibility" value="provider" />
      <AvRadio label="Coordination of Benefits" value="coordination" />
      <AvRadio label="Authorization" value="authorization" />
      <AvRadio label="Claim Paid Incorrectly" value="paidIncorrectly" />
      <AvRadio label="Timely Filing" value="timelyFiling" />
      <AvRadio label="Other" value="other" />
    </AvRadioGroup>
    <AvInput name="description" type="textarea" rows="9" placeholder="Enter Description..." />
  </Card>
);
