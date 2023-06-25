import React, { useRef, useState } from "react";

function DemoUseRef() {
    const userLoginRef = useRef({
        username: "",
        password: "",
    });
    console.log(userLoginRef);
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: "",
    });
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        userLoginRef.current[name] = value;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userLoginRef.current);
    };
    console.log(userLogin);
    return (
        <div className="container">
            DemoUseRef
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                        handleOnchange(e);
                    }}
                />
                <input
                    name="password"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                        handleOnchange(e);
                    }}
                />
                <button type="submit" className="btn btn-success">
                    submit
                </button>
            </form>
        </div>
    );
}

export default DemoUseRef;
