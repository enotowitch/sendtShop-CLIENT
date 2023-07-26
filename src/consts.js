export const baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000"
export const BRAND_COLOR = "#673BD9"

// TODO: currently all routes are hardcoded; use consts in ROUTES later
// ROUTES
export const SEARCH_ROUTE = "/search"
export const LIKED_PRODS_ROUTE = "/liked" // TODO ?
export const CART_ROUTE = "/cart"
export const PROFILE_ROUTE = "/profile"
export const ADD_ROUTE = "/add/:type"
export const EDIT_ROUTE = "/edit/:type/:id"
export const FULL_ROUTE = "/:type/:id"
export const ADMIN_ORDERS_NEW = "/admin/orders/new"
export const ADMIN_ORDERS_SENT = "/admin/orders/sent"
export const ADMIN_ORDER = "/admin/order"
export const ADMIN_ORDER_SHIPPING = "/admin/order/shipping"
export const USER_ORDERS = "/user/orders"
export const USER_ORDER = "/user/order"