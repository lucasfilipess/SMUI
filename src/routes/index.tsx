import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import { Loader } from '@/components';
import { Home, NotFound, SignIn } from '@/pages';

import RouteElement from './RouteElement';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" element={<RouteElement component={SignIn} />} />
          <Route
            path="/dashboard"
            element={<RouteElement isPrivate component={Home} />}
          />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
