export type WorkType = {
  id: string
  title: string
  university: string
  faculty: string
  price: number
  type: 'courseProject' | 'diplomaProject' | 'outline' | 'labWork'
  rating?: number
}
export type WorkVariantType =
  | 'courseProject'
  | 'diplomaProject'
  | 'outline'
  | 'labWork'

export const works: WorkType[] = [
  {
    id: '1',
    title: 'Курсовая работа по программированию',
    university: 'МГУ',
    faculty: 'Факультет вычислительной математики и кибернетики',
    price: 3000,
    type: 'courseProject',
    rating: 4,
  },
  {
    id: '2',
    title: 'Дипломный проект по экономике',
    university: 'СПбГУ',
    faculty: 'Экономический факультет',
    price: 10000,
    type: 'diplomaProject',
    rating: 4,
  },
  {
    id: '3',
    title: 'Конспект лекций по истории',
    university: 'МГИМО',
    faculty: 'Факультет международных отношений',
    price: 1500,
    type: 'outline',
    rating: 2,
  },
  {
    id: '4',
    title: 'Лабораторная работа по физике',
    university: 'МФТИ',
    faculty: 'Факультет общей и прикладной физики',
    price: 2500,
    type: 'labWork',
    rating: 3,
  },
  {
    id: '5',
    title: 'Курсовая работа по информатике',
    university: 'ИТМО',
    faculty: 'Факультет информационных технологий',
    price: 3500,
    type: 'courseProject',
    rating: 4,
  },
  {
    id: '6',
    title: 'Дипломный проект по юриспруденции',
    university: 'ЮФУ',
    faculty: 'Юридический факультет',
    price: 12000,
    type: 'diplomaProject',
    rating: 3,
  },
  {
    id: '7',
    title: 'Конспект лекций по психологии',
    university: 'МГППУ',
    faculty: 'Факультет психологии',
    price: 2000,
    type: 'outline',
    rating: 3,
  },
  {
    id: '8',
    title: 'Лабораторная работа по химии',
    university: 'СПбГУ',
    faculty: 'Факультет химии',
    price: 2700,
    type: 'labWork',
    rating: 3,
  },
  {
    id: '9',
    title: 'Курсовая работа по социологии',
    university: 'НИУ ВШЭ',
    faculty: 'Факультет социальных наук',
    price: 3200,
    type: 'courseProject',
    rating: 3,
  },
  {
    id: '10',
    title: 'Дипломный проект по архитектуре',
    university: 'МАРХИ',
    faculty: 'Факультет архитектуры',
    price: 15000,
    type: 'diplomaProject',
    rating: 3,
  },
  {
    id: '11',
    title: 'Конспект лекций по литературе',
    university: 'РГГУ',
    faculty: 'Факультет филологии',
    price: 1120,
    type: 'outline',
    rating: 3,
  },
  {
    id: '12',
    title: 'Лабораторная работа по биологии',
    university: 'МГУ',
    faculty: 'Биологический факультет',
    price: 2600,
    type: 'labWork',
    rating: 3,
  },
  {
    id: '13',
    title: 'Курсовая работа по менеджменту',
    university: 'РАНХиГС',
    faculty: 'Факультет управления',
    price: 4000,
    type: 'courseProject',
    rating: 4,
  },
  {
    id: '14',
    title: 'Дипломный проект по инженерии',
    university: 'НИЯУ МИФИ',
    faculty: 'Факультет ядерной физики',
    price: 14000,
    type: 'diplomaProject',
    rating: 4,
  },
  {
    id: '15',
    title: 'Конспект лекций по философии',
    university: 'СПбГУ',
    faculty: 'Факультет философии',
    price: 1700,
    type: 'outline',
    rating: 4,
  },
]
