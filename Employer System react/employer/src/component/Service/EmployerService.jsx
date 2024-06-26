import axios from 'axios';
import React from 'react'

const BASE_URL = 'http://localhost:8081/api';

const getEmployers = () => {
  return axios.get(`${BASE_URL}/employers`);
};

const getEmployer = (id) => {
  return axios.get(`${BASE_URL}/employer/${id}`);
};
const postEmployers=(employer)=>{
  return axios.post(`${BASE_URL}/addEmployer`, employer);
}

const putEmployers=(employer,id)=>{
  return axios.put(`${BASE_URL}/UpdateEmployer`,employer,id)
}

const EmployerService = {
  getEmployers,
  postEmployers,
  putEmployers,
  getEmployer
 
};



export default EmployerService;
