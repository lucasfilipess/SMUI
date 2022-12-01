import React, { createContext, useCallback, useState } from 'react';

import { APP } from '@/config';

export type UserProps = {
  name: string;
  imageUrl?: string;
};

export type AuthState = {
  user: UserProps;
};

export type AuthContextData = {
  user: UserProps;
  updateUser(user: UserProps): void;
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem(`${APP}:user`);
    if (user) {
      return { user: JSON.parse(user) };
    }
    //TODO:
    // Remove this mock user

    return {
      user: {
        name: 'Sabrina',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
    } as AuthState;
  });

  const updateUser = useCallback((user: UserProps) => {
    localStorage.setItem(`${APP}:user`, JSON.stringify(user));
    setData({
      user,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
