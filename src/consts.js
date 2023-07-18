export const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000"
export const BRAND_COLOR = "#673BD9"

// ROUTES
export const SEARCH_ROUTE = "/search"
export const LIKED_PRODS_ROUTE = "/liked" // TODO ?
export const CART_ROUTE = "/cart"
export const PROFILE_ROUTE = "/profile"
export const ADD_ROUTE = "/add/:type"
export const EDIT_ROUTE = "/edit/:type/:id"
export const FULL_ROUTE = "/:type/:id"