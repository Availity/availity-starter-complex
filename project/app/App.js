import React, { useMemo } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import Spaces from '@availity/spaces';
import PageHeader from '@availity/page-header';
import qs from 'query-string';
import AppealRequest from './areas/Request';
import AppealResponse from './areas/Response';
import { Footer } from './shared';

const App = ({ location }) => {
  const queryParams = qs.parse(location.search);

  const spaceId = useMemo(() => queryParams.spaceId, [queryParams]);

  return (
    <Spaces spaceIds={[spaceId]} clientId="test">
      <Container data-testid="app-container">
        <PageHeader spaceId={spaceId} appName="Appeal Request Form" />
        <Switch>
          <Route exact component={AppealRequest} path="/" />
          <Route exact component={AppealResponse} path="/response" />
        </Switch>
        <Footer />
      </Container>
    </Spaces>
  );
};

export default withRouter(App);
