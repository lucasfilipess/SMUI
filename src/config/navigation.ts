import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  SquaresPlusIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

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

export const navigation: NavigationProps = [
  { name: 'Dashboard', to: '/dashboard', icon: HomeIcon },
  { name: 'Calendar', to: '/calendar', icon: CalendarIcon },
  { name: 'Teams', to: '/teams', icon: UserGroupIcon },
  { name: 'Directory', to: '/directory', icon: MagnifyingGlassCircleIcon },
  { name: 'Announcements', to: '/announcements', icon: MegaphoneIcon },
  { name: 'Office Map', to: '/office-map', icon: MapIcon },
];

export const secondaryNavigation: NavigationProps = [
  { name: 'Apps', to: '/apps', icon: SquaresPlusIcon },
  { name: 'Settings', to: '/settings', icon: CogIcon },
];
