import { Subject, Task } from '../model';

export const SUBJECTS_INFO: Subject[] = [
  {
    id: 'u1',
    name: 'Gestión del proceso de desarrollo de software',
    avatar: '/avatar.jpg',
  },
  {
    id: 'u2',
    name: 'Aplicaciones web progresivas',
    avatar: '/avatar.jpg',
  },
  {
    id: 'u3',
    name: 'Integradora',
    avatar: '/avatar.jpg',
  },
  {
    id: 'u4',
    name: 'Desarrollo móvil integral',
    avatar: '/avatar.jpg',
  },
  {
    id: 'u5',
    name: 'Creación de video juegos',
    avatar: '/avatar.jpg',
  },
  {
    id: 'u6',
    name: 'Negociación empresarial',
    avatar: '/avatar.jpg',
  },
  {
    id: 'u7',
    name: 'Inglés IX',
    avatar: '/avatar.jpg',
  },
];

export const DUMMY_TASKS: Task [] = [
  {
    id: 't1',
    subjectId: 'u1',
    title: 'Master Videogames',
    summary:
      'Learn all the basic and advanced features of Videogames.',
    dueDate: new Date('2024-09-28'),
  },
  {
    id: 't2',
    subjectId: 'u3',
    title: 'Build first Videogame',
    summary: 'Build a first prototype of Videogame',
    dueDate: new Date('2024-09-28'),
  },
  {
    id: 't3',
    subjectId: 'u5',
    title: 'Create a Videogame',
    summary: 'Create a Videogame with all the features.',
    dueDate: new Date('2024-09-28'),
  }
];
