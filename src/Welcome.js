import React from "react";

export function Header(){
    return(
        <h1>
            My Task Manager
        </h1>
    )
}

export function Footer(){
    return <p>© 2025 Task Manager</p>;
}

export function Welcome(props) {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
      <p>This is your first React component 🎉</p>
    </div>
  );
}

// export default Welcome;
// export default Header;
// export default Welcome;