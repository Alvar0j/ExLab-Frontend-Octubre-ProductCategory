import { post, destroy } from './helpers/ApiRequestsHelper'

function create(restaurantId, data) {
    return post(`/productCategories/restaurants/${restaurantId}`, data)
}
function remove(restaurantId, productCategoryId) {
    return destroy(`/productCategories/${restaurantId}/categories/${productCategoryId}`)
}
export { create, remove }
