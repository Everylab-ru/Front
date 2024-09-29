import { routes } from '@/app/routes.ts'

export type OpportunityType = {
  title: string
  description: string
  image: string
  link?: string
}

export const opportunities: OpportunityType[] = [
  {
    title: 'Купить работу',
    description:
      'На нашей платформе вы можете купить любую работу, которая сохранит вам ваше драгоценное время',
    image: '',
  },
  {
    title: 'Опубликовать работу',
    description:
      'Также, если у вас достаточного свободного времени, вы можете опубликовать свою собственную работу',
    image: '',
    link: routes.addNewProduct,
  },
  {
    title: 'Заказать работу',
    description:
      'Но, если вы все таки не нашли подходящей для вас работы, вы всегда можете ее заказать',
    image: '',
  },
]
