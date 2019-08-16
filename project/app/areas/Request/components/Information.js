import React from 'react';
import { Card, CardTitle, InputGroup, FormGroup, InputGroupAddon, Label, InputGroupText } from 'reactstrap';
import { Field, Input } from '@availity/form';
import { DateRangeField } from '@availity/date';
import '@availity/date/styles.scss';

export default () => (
  <Card body className="mb-3">
    <CardTitle className="card-title-secondary">Claim Information</CardTitle>
    <Field name="memberId" label="Member ID" type="text" />
    <Field name="claimId" label="Claim ID Number" type="text" />
    <DateRangeField id="fromToDate" name="fromToDate" label="From to Date" />
    <div className="d-flex">
      <FormGroup className="flex-fill mr-3">
        <Label for="originalBilled">Original Claim Amount Billed</Label>
        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <Input name="originalBilled" id="originalBilled" type="text" />
        </InputGroup>
      </FormGroup>
      <FormGroup className="flex-fill ml-3">
        <Label for="originalPaid">Original Claim Amount Paid</Label>
        <InputGroup>
          <InputGroupAddon addonType="append">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <Input name="originalPaid" id="originalPaid" type="text" />
        </InputGroup>
      </FormGroup>
    </div>
  </Card>
);
