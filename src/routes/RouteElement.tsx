import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

import { Sidebar } from '@/components';
import { getNavigation } from '@/config';
import { useAuth } from '@/hooks';
import { convertToPath } from '@/utils';

export type Props = {
  component: React.ComponentType;
  isPrivate?: boolean;
  title: string;
};

const RouteElement: React.FC<Props> = ({
  component: RouteComponent,
  isPrivate = false,
  title,
}) => {
  const { t } = useTranslation();

  const { isAuthenticated, user } = useAuth();
  const { navigation } = getNavigation();

  useEffect(() => {
    document.title = `CRM UI | ${title}`;
  }, [title]);

  if (isPrivate === isAuthenticated) {
    return isPrivate ? (
      <Sidebar user={user} navigation={navigation}>
        <RouteComponent />
      </Sidebar>
    ) : (
      <RouteComponent />
    );
  }

  return (
    <Navigate
      to={isPrivate ? '/' : convertToPath([t('navigation.dashboard')])}
      state={isPrivate ? { from: location } : null}
    />
  );
};

export default RouteElement;
