import type { INavigation } from '../interfaces/navigation';

const navigation_items: INavigation[] = [
  {
    route_name: 'home',
    title: 'Home',
    icon: 'bi bi-house-door-fill'
  },
  {
    route_name: 'about',
    title: 'Sobre mi',
    icon: 'bi bi-person-fill'
  },
  {
    route_name: 'cv',
    title: 'Curriculum',
    icon: 'bi bi-mortarboard-fill',
  },
  {
    route_name: 'portfolio',
    title: 'Portafolio',
    icon: 'bi bi-briefcase-fill',
    params: { type: 'professional' }
  },
  {
    route_name: 'contact',
    title: 'Contacto',
    icon: 'bi bi-envelope-fill'
  },
]
export default navigation_items;
  