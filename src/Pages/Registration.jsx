import React, { useState } from "react";
import { json } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Registration() {

    


    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPassword, setUserPassword] = useState('');
    const [UserRole, setUserRole] = useState('');

    const toastdealing =(measssage, type) =>{

        if (type == "danger") {

            toast.error(measssage,{
                position:"top-center"
            })
            
        }else{
            toast.success(measssage,{
                position:"top-center"
            })
        }

    }


    const handleSubmit = (e) => {

        e.preventDefault();


        const newuser = {

            name: UserName,
            email: UserEmail,
            password:  UserPassword,
            role:  UserRole,
            
        }

        const Response = fetch(
            "https://66d80b8237b1cadd805320d6.mockapi.io/projectpi/UserAccount",

            {
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(newuser),

            }
        )
         

    }




    return (

<>
        <div className="mt-5 container">

            <h1 className="text-center-mt-4"> Create Account</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" >Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUserEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setUserPassword(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Role</label>
                    <select className="form-control" onChange={(e) => setUserRole(e.target.value)}>
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                        <option value="clint">Clint</option>

                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Registration;