import React, { useState } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { AvOrganizationSelect, AvProviderSelect } from '@availity/reactstrap-validation-select/resources';
import { requiredValidation } from '../../../shared';

export default () => {
  const [customerId, setCustomerId] = useState(null);

  return (
    <Card body className="mb-3">
      <CardTitle className="card-title-secondary">Basic Information</CardTitle>
      <AvOrganizationSelect
        name="organization"
        label="Organization"
        required
        validate={requiredValidation}
        onChange={({ customerId }) => setCustomerId(customerId)}
      />
      <AvProviderSelect
        name="provider"
        label="Provider"
        customerId={customerId}
        required
        validate={requiredValidation}
      />
    </Card>
  );
};
