import { Card } from '@mui/material';
import React, { useState } from 'react';




const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");


    const toggle = () => {
        var x = document.getElementById("Password");
        x.type === "password" ?
            x.type = "text" :
            x.type = "password"
    }

    const handleLogin = () => {
        if (password != "123qwe") {
            alert("your password is incorrect")
        } else {
            alert("You are succesfully loged in ")
        }
    }


    return (
        <Card >
            <div style={{ paddingLeft: 50, paddingRight: 50 }}>

                <h3>SIGNUP</h3>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <label for="UserName">UserName</label>
                    <input
                        type="userName"
                        name="userName"
                        id="UserName"
                        style={{ marginBottom: 15 }}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <label for="Email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="Email"
                        style={{ marginBottom: 15 }}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label for="Password">Password</label>
                    <input
                        type="password"
                        id="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span>
                        <input type="checkbox" id="checkbox" onClick={toggle} />
                        <label for="checkbox" >Show Password</label>
                    </span>
                    <span>
                        <button onClick={handleLogin}>
                            Signup
                        </button>
                    </span>
                    <div style={{ marginTop: 30, marginBottom: 10 }}>
                        <a href="#" > Already have an Account</a>
                    </div>
                </div>
            </div >
        </Card >
    )
}



export default SignUp;
