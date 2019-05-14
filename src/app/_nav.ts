interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Statistiques',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Gestion',
    
  },
  {
    name: 'Produit',
    url: '/produit/afficher',
    icon: 'icon-drop',
    children: [
      {
        name: 'Ajouter',
        url: '/produit/ajouter',
        icon: 'icon-plus'
      },
      {
        name: 'Afficher',
        url: '/produit/afficher',
        icon: 'icon-list'
      }]
  },
  {
    name: 'Promotion',
    url: '/promotion/afficher',
    icon: 'icon-present',
    children: [
      {
        name: 'Ajouter',
        url: '/promotion/ajouter',
        icon: 'icon-plus'
      },
      {
        name: 'Afficher',
        url: '/promotion/afficher',
        icon: 'icon-list'
      }]
  }
];
