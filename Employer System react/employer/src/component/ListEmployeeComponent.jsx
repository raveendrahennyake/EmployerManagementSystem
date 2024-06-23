import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployerService from './Service/EmployerService';

const ListEmployeeComponent = () => {
  const [EmployerArr,setEmployerArr]=useState([]);

  useEffect(() => {
    const fetchEmployers = () => {
      EmployerService.getEmployers()
        .then((res) => {
          setEmployerArr(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    fetchEmployers();
  },[]);


  return (
    <div>
        <div className='container'>
            <Link to={"/add-employee"} className='btn btn-primary mb-6 mt-3' href="">Add Employee</Link>
            <h2 className='text-center  mb-6'>List Employee</h2>
            <table className='table table-bordered table striped'>
                <thead>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Phone Number</th>
                    <th> Email Address</th>
                    <th> Actions
                      
                    </th>
                    
                </thead>
                <tbody>
                {EmployerArr.map(employee =>
                        <tr employerId={employee.employerId}>
                            <td>{employee.employerId}</td>
                            <td>{employee.employerName}</td>
                            <td>{employee.PhoneNumber}</td>
                            <td>{employee.emailAddress}</td>
                            <td>
                            <Link to={`/add-employee/${employee.employerId}`}>
                              <button style={{position: "relative", right: "9px"}} type="button" className="btn btn-danger">
                                Update
                              </button>
                            </Link>

                               <button  style={{position:"relative",left: "20px"}}  type="button" class="btn btn-secondary">Delect</button>

                            </td>
                    
                          
                        </tr>)}

                </tbody>
            </table>
            
            










        </div>
        
      
    </div>
  )
}

export default ListEmployeeComponent

