import React, { useState } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { AvOrganizationSelect, AvProviderSelect } from '@availity/select/resources';

export default () => {
  const [customerId, setCustomerId] = useState(null);

  return (
    <Card body className="mb-3">
      <CardTitle className="card-title-secondary">Basic Information</CardTitle>
      <AvOrganizationSelect
        name="organization"
        label="Organization"
        onChange={({ customerId }) => setCustomerId(customerId)}
      />
      <AvProviderSelect name="provider" label="Provider" customerId={customerId} />
    </Card>
  );
};
