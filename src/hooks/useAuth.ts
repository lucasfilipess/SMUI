import { useContext } from 'react';

import { AuthContext, AuthContextData } from '@/contexts';

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within a AuthProvider');
  return context;
};

export default useAuth;
