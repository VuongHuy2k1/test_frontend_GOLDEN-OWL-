import { httpRequests } from '../utils'
export const getProdducts = async (page) => {
  try {
    const res = await httpRequests.get(`/api/v1/products`)

    return res
  } catch (error) {
    console.log(error)
  }
}
