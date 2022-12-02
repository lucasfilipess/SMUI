import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import { Loader } from '@/components';
import { Customers, Home, NotFound, RegisterCustomer, SignIn } from '@/pages';
import { convertToPath } from '@/utils';

import RouteElement from './RouteElement';

const Routes: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" element={<RouteElement title="teste" component={SignIn} />} />
          <Route
            path={convertToPath([t('navigation.dashboard')])}
            element={
              <RouteElement
                title={t('navigation.dashboard')}
                isPrivate
                component={Home}
              />
            }
          />
          <Route
            path={convertToPath([t('navigation.customers')])}
            element={
              <RouteElement
                title={t('navigation.customers')}
                isPrivate
                component={Customers}
              />
            }
          />
          <Route
            path={convertToPath([
              t('navigation.customers'),
              t('navigation.register-customer'),
            ])}
            element={
              <RouteElement
                title={t('navigation.register-customer')}
                isPrivate
                component={RegisterCustomer}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
