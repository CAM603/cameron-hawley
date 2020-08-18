import { useState } from "react";
// TODO: Make each skill icon hoverable so each time a user hovers over an icon, the name will appear as a tooltip
export default function Skill() {
    const [hover, setHover] = useState(false);
    const handleMouseIn = () => setHover(true);
    const handleMouseOut = () => setHover(false);
    const toolTipStyle = {
        display: hover ? "block" : "none",
    };
    return (
        <div>
            <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                HI
            </div>
            <div style={toolTipStyle}>Hello</div>
        </div>
    );
}
