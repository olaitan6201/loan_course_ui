export const environment = {
  production: false,
  BASE_URL: 'https://loan-course-api.herokuapp.com/',
  CUSTOMER_BASE_URL: 'https://loan-course-api.herokuapp.com/customers/',
  LOAN_TYPE_BASE_URL: 'https://loan-course-api.herokuapp.com/loan_types/',
  LOAN_BASE_URL: 'https://loan-course-api.herokuapp.com/loans/',
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