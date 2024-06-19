import React, { useState } from 'react';
import EmployerService from './Service/EmployerService';

const AddEmployeeComponent = () => {
    const [employer_name, setEmployerName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [email_address, setEmailAddress] = useState("");

    const employer = { employer_name, phone_number, email_address };

    const postEmployer = (e) => {
        e.preventDefault();
        EmployerService.postEmployers(employer)
            .then(() => {
                console.log('Employer posted successfully');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className='container mt-5'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add Employer</h2>
                </div>
                <div className='card-body'>
                    <form onSubmit={postEmployer}>
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
                            <button type="submit" className='btn btn-success'>Save</button>
                            <button type="button" style={{ marginLeft: "10px" }} className='btn btn-danger'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeComponent;
