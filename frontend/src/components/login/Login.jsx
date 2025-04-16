import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="title">Login</h2>
                <div className="input-group">
                    <FaUser className="icon" />
                    <input
                        type="email"
                        placeholder="Email"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <FaLock className="icon" />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleLogin} className="login-button">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;