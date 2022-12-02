import React, { createContext, useCallback, useState } from 'react';

import { APP } from '@/config';

export type UserProps = {
  name: string;
  email: string;
  imageUrl?: string;
};

export type AuthState = {
  token: string;
  user: UserProps;
  isAuthenticated: boolean;
};

export type AuthContextData = AuthState & {
  updateUser(user: UserProps): void;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(`${APP}:token`);
    const user = localStorage.getItem(`${APP}:user`);
    const isAuthenticated = !!(token && user);
    if (token && user) {
      // httpService.defaults.headers.common.Authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user), isAuthenticated };
    }
    //TODO:
    // Remove this mock user

    return {
      token: 'token',
      user: {
        name: 'Sabrina',
        email: 'sabrina@email.com',
        imageUrl: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png',
      },
      isAuthenticated: true,
    } as AuthState;
  });

  const updateUser = useCallback((user: UserProps) => {
    localStorage.setItem(`${APP}:user`, JSON.stringify(user));
    setData({
      ...data,
      user,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        user: data.user,
        isAuthenticated: data.isAuthenticated,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
