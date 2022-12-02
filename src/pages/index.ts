import { lazy } from 'react';

export const Home = lazy(() => import('./Home'));
export const SignIn = lazy(() => import('./SignIn'));
export const Customers = lazy(() => import('./Customers'));
export const RegisterCustomer = lazy(() => import('./RegisterCustomer'));
export const NotFound = lazy(() => import('./NotFound'));
