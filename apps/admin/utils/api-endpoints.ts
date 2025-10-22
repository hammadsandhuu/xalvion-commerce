const BASE_URL = "https://emberidge-backend.vercel.app";

export const API_RESOURCES = {
  // User & Auth
  USER: `${BASE_URL}/api/v1/users/me`,
  ADDRESSES: `${BASE_URL}/api/v1/users/me/addresses`,
  CHANGE_PASSWORD: `${BASE_URL}/auth/update-password`,
  LOGIN: `${BASE_URL}/auth/login`,
  LOGOUT: `${BASE_URL}/auth/logout`,
  FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
  RESET_PASSWORD: `${BASE_URL}/auth/reset-password`,
  UPDATE_PROFILE: `${BASE_URL}/auth/update-profile`,

  // Products & Categories
  CATEGORIES: `${BASE_URL}/api/v1/categories`,
  SUBCATEGORIES: `${BASE_URL}/api/v1/categories/subcategories`,
  PRODUCTS: `${BASE_URL}/api/v1/products`,
  PRODUCTS_BY_CATEGORIES: `${BASE_URL}/api/v1/products/category`,
  PRODUCTS_BY_SUB_CATEGORIES: `${BASE_URL}/api/v1/products/categories`,
  NEW_SELLER_PRODUCTS: `${BASE_URL}/api/v1/products/new-arrival`,
  BEST_SELLER_PRODUCTS: `${BASE_URL}/api/v1/products/best-seller`,
  POPULAR_PRODUCTS: `${BASE_URL}/api/v1/products/deals`,
  SALE_PRODUCTS: `${BASE_URL}/api/v1/products/on-sale`,
  RELATED_PRODUCTS: `${BASE_URL}/api/v1/products`,
};
