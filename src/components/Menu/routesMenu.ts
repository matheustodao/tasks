type RoutesMenu = {
  label: string,
  iconSource: string,
  iconAlt: string,
  to: string,
}

export const routesMenu: RoutesMenu[] = [
  {
    label: 'Tarefas',
    iconSource: '/images/icons/clipboard-list.svg',
    iconAlt: 'Clipboard list icon',
    to: '/',
  },

  {
    label: 'Sobre',
    iconSource: '/images/icons/information.svg',
    iconAlt: 'Informação icon',
    to: '/sobre',
  },
];
