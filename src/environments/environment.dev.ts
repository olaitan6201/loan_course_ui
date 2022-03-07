export const environment = {
  production: false,
  BASE_URL: 'http://localhost:3000/',
  CUSTOMER_BASE_URL: 'http://localhost:3000/customers/',
  LOAN_TYPE_BASE_URL: 'http://localhost:3000/loan_types/',
  LOAN_BASE_URL: 'http://localhost:3000/loans/',
  CUSTOMER : {
    GET_ALL_CUSTOMERS: 'list',
    GET_CUSTOMER_DETAILS: 'view',
    UPDATE_CUSTOMER_DETAILS: 'update',
    DELETE_CUSTOMER: 'delete',
    ADD_CUSTOMER: 'add',
    SEARCH_CUSTOMER: 'search',
  },
  LOAN_TYPE : {
    GET_ALL_LOAN_TYPES: 'list',
    GET_LOAN_TYPE_DETAILS: 'view',
    UPDATE_LOAN_TYPE_DETAILS: 'update',
    DELETE_LOAN_TYPE: 'delete',
    ADD_LOAN_TYPE: 'add',
    SEARCH_LOAN_TYPE: 'search',
  },
  LOAN : {
    GET_ALL_LOANS: 'list',
    GET_LOAN_DETAILS: 'view',
    UPDATE_LOAN_DETAILS: 'update',
    DELETE_LOAN: 'delete',
    ADD_LOAN: 'add',
    SEARCH_LOAN: 'search',
  }
}