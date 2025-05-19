import React from "react";

const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white", "gold", "silver"];

export default function ColorPicker({ label, selectedColor, onSelect, disabled = false }) {
    return (
        <div className="color-picker">
            <p>{label}</p>
            <select value={selectedColor} onChange={(e) => onSelect(e.target.value)} disabled={disabled}>
                <option value="">Select</option>
                {colors.map(color => (
                    <option style={{backgroundColor:color}} key={color} value={color}>{color}</option>
                ))}
            </select>
        </div>
    );
}
