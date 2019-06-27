import React, { useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import Spaces from '@availity/spaces';
import PageHeader from '@availity/page-header';
import qs from 'query-string';
import AppealRequest from './areas/Request';
import AppealResponse from './areas/Response';
import { Footer } from './shared';

const getQueryString = pathname => pathname.substring(pathname.lastIndexOf('?'), pathname.length);

export default () => {
  const queryParams = qs.parse(getQueryString(window.location.href));
  

  const spaceId = useMemo(() => queryParams.spaceId, [queryParams]);

  return (
    <Spaces spaceIds={[spaceId]} clientId="test">
      <Container data-testid="app-container">
        <PageHeader spaceId={spaceId} appName="Appeal Request Form" />
          <Switch>
          <Route component={AppealRequest} exact path="/" spaceId={spaceId} />
          <Route component={AppealResponse} path="/response" spaceId={spaceId} />
          </Switch>
        <Footer />
      </Container>
    </Spaces>
  );
};
