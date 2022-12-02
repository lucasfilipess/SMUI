import { HomeIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

import { convertToPath } from '@/utils';

export type NavigationProps = {
  name: string;
  to: string;
  icon: (
    props: React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    },
  ) => JSX.Element;
}[];

export const getNavigation = () => {
  const { t } = useTranslation();

  const navigation: NavigationProps = [
    {
      name: t('navigation.dashboard'),
      to: convertToPath([t('navigation.dashboard')]),
      icon: HomeIcon,
    },
    {
      name: t('navigation.customers'),
      to: convertToPath([t('navigation.customers')]),
      icon: MagnifyingGlassCircleIcon,
    },
  ];

  return { navigation };
};
