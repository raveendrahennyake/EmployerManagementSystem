import axios from 'axios';
import React from 'react'

const BASE_URL = 'http://localhost:8081/api';

const getEmployers = () => {
  return axios.get(`${BASE_URL}/employers`);
};

const postEmployers=(employer)=>{
  return axios.post(`${BASE_URL}/addEmployer`, employer);
}


const EmployerService = {
  getEmployers,
  postEmployers
 
};


export default EmployerService;
