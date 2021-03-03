import React from 'react'
import '../../assets/css/button.css'

function Button({ children, name, color, onChange }) {
    return (
        <button type="button" className="buttons" style={{ backgroundColor: color }} name={name} onClick={onChange}>{children}</button>
    )
}

export default React.memo(Button);
