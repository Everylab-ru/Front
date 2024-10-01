enum ProductEnum {
  LAB_WORK = 'Лабораторная работа',
  COURSE_WORK = 'Курсовая работа',
  DIPLOMA_WORK = 'Дипломная работа',
  OUTLINE_WORK = 'Конспект',
}

export type ProductVariantType = {
  id: number
  name: ProductEnum
}

export type AddProductRequestType = {
  header: string
  description: string
  price: number
  productTypeId: number
}
