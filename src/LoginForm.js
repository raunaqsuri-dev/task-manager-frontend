import { useState } from "react";


function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("Login");

    const handleLogin = (e) => {
        e.preventDefault();
        setButtonText("Log out");
        e.preventDefault();
        if (buttonText === "Login") {
            if (username && password) {
                alert(`Logging in with ${username} ${password}`);
                setButtonText("Log out");
            }
        } else {
            // Log out: clear fields and reset button
            setUsername("");
            setPassword("");
            setButtonText("Login");
        }
    };

    return (
        <div style={{ margin: "20px 0" }}>
            <form onSubmit={handleLogin}>
                User Name :{' '}
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                Password :{' '}
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" style={{ marginLeft: "10px" }}>
                    {buttonText}
                </button> 
            </form>
        </div>
    )
}
export default LoginForm;
