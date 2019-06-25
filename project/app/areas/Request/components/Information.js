import React from 'react';
import { Card, CardTitle, InputGroup, FormGroup, InputGroupAddon, Label, InputGroupText } from 'reactstrap';
import { AvField, AvInput } from 'availity-reactstrap-validation';
import { AvDateRangeField } from '@availity/reactstrap-validation-date';
import { requiredValidation } from '../../../shared';

export default () => (
  <Card body className="mb-3">
    <CardTitle className="card-title-secondary">Claim Information</CardTitle>
    <AvField name="memberId" label="Member ID" type="text" validate={requiredValidation} />
    <AvField name="claimId" label="Claim ID Number" type="text" validate={requiredValidation} />
    <AvDateRangeField
      name="fromToDate"
      label="From to Date"
      validate={requiredValidation}
      start={{ name: 'date.start', required: true }}
      end={{ name: 'date.end', required: false }}
      ranges={[]}
    />
    <div className="d-flex">
      <FormGroup className="flex-fill mr-3">
        <Label for="originalBilled">Original Claim Amount Billed</Label>
        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <AvInput name="originalBilled" id="originalBilled" type="text" />
        </InputGroup>
      </FormGroup>
      <FormGroup className="flex-fill ml-3">
        <Label for="originalPaid">Original Claim Amount Paid</Label>
        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <AvInput name="originalPaid" id="originalPaid" type="text" />
        </InputGroup>
      </FormGroup>
    </div>
  </Card>
);
