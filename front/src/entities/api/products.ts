import { Api } from '@/entities/api/api.ts'
import { AddProductRequestType, ProductVariantType } from '@/types/products-api'

export class Products {
  private static urlPrefix = 'product'

  public static async getAllProductTypes() {
    const response = await Api.axios.get<ProductVariantType[]>(
      `${Products.urlPrefix}/types`,
    )

    return response.data
  }

  public static async addProduct(data: AddProductRequestType) {
    const response = await Api.axios.post<AddProductRequestType>(
      `${Products.urlPrefix}/add`,
      data,
    )

    return response.data
  }
}
