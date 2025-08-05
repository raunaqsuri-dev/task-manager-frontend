import { useState } from "react";


function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide Message" : "Show Message"}           
        </button>
        {isVisible && <p>This is a toggleable message!</p>}

    </div>);
}
function handleToggle(setIsVisible, isVisible) {
    setIsVisible(!isVisible);
}
export default ToggleMessage;