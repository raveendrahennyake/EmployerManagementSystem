import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployerService from './Service/EmployerService';
import { Link} from 'react-router-dom';

const AddEmployeeComponent = () => {
   const {id} = useParams();

    const [employer_name, setEmployerName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [email_address, setEmailAddress] = useState("");

    const employer = { employer_name, phone_number, email_address };

    const postEmployer = (e) => {
        e.preventDefault();
        if(employer.employer_name!=='' &&  employer.phone_number.length>10 &&employer.email_address !==''){
            if (id) {
                EmployerService.putEmployers(employer).then(()=>{
                    console.log("Your Details Update")
                }).catch((err)=>{
                    console.log(err)

                })

            }else {
                EmployerService.postEmployers(employer)
            .then(() => {
                console.log('Employer posted successfully');
            })
            .catch((err) => {
                console.log(err);
            });

            }
            

        }
        else {
            alert("try again");
        
        }
        
    }
    function title () {
        if(id){
            return "Update Employer"
        }
        else {
            return "Add Employer"
        }
        
    }

    useEffect(()=>{
        if (id) {
             EmployerService.getEmployer(id)
             .then((res)=>{
                 console.log('Employer data fetched:', res.data);
                setEmployerName(res.data.employerName);
                setPhoneNumber(res.data.phoneNumber);
                setEmailAddress(res.data.emailAddress);
              

             }).catch((err)=>{
                
             })

        }
       
    },[id]);

    return (
        <div>
            <div className='container mt-5'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>{title()}</h2>
                </div>
                <div className='card-body'>
                        <div className='form-group mb-2'>
                            <input
                                value={employer_name}
                                className='form-control'
                                type="text"
                                placeholder='Enter Your Name'
                                onChange={(e) => setEmployerName(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <input
                                value={phone_number}
                                className='form-control'
                                type="text"
                                placeholder='Enter Your Phone Number'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-2'>
                            <input
                                value={email_address}
                                className='form-control'
                                type="text"
                                placeholder='Enter Your Email Address'
                                onChange={(e) => setEmailAddress(e.target.value)}
                            />
                        </div>

                        <div>
                            <button onClick={(e)=>postEmployer(e)} className='btn btn-success'>Save</button>
                            <Link to="/">
                             <button style={{ marginLeft: "10px" }} className='btn btn-danger'>Cancel </button>
                            </Link>
                           
                        </div>
                   
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeComponent;
