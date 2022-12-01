// import { useAuth } from 'hooks';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { Sidebar } from '@/components';
import { navigation, secondaryNavigation } from '@/config';
import { useAuth } from '@/hooks';

export type Props = {
  component: React.ComponentType;
  isPrivate?: boolean;
};

const RouteElement: React.FC<Props> = ({
  component: RouteComponent,
  isPrivate = false,
}) => {
  const { user } = useAuth();

  if (isPrivate === !!user) {
    return isPrivate ? (
      <Sidebar
        user={user}
        navigation={navigation}
        secondaryNavigation={secondaryNavigation}
      >
        <RouteComponent />
      </Sidebar>
    ) : (
      <RouteComponent />
    );
  }

  return (
    <Navigate
      to={isPrivate ? '/' : '/dashboard'}
      state={isPrivate ? { from: location } : null}
    />
  );
};

export default RouteElement;
