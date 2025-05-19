import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import ResistanceDisplay from "./ResistanceDisplay";
import { calculateResistance, decodeSMD } from "../utils/resistanceCalculator";
import "../styles/resistorStyles.css";

const ResistanceCalculator = () => {
    const [numBands, setNumBands] = useState(4);
    const [bands, setBands] = useState(["", "", "", ""]);
    const [multiplier, setMultiplier] = useState("");
    const [tolerance, setTolerance] = useState("");
    const [resistance, setResistance] = useState("");
    const [smdCode, setSMDCode] = useState("");
    const [smdResistance, setSMDResistance] = useState("");

    const handleCalculate = () => {
        setResistance(calculateResistance(bands.slice(0, numBands - 2), multiplier, tolerance));
    };

    const handleSMDDecode = () => {
        setSMDResistance(decodeSMD(smdCode));
    };

    return (
        <div className="app">
            <h1>Resistor Calculator</h1>
            <div>
                <p>Number of Bands:</p>
                <select value={numBands} onChange={(e) => setNumBands(Number(e.target.value))}>
                    <option value={4}>4 Bands</option>
                    <option value={5}>5 Bands</option>
                    <option value={6}>6 Bands</option>
                </select>
            </div>
            {[...Array(numBands - 2)].map((_, i) => (
                <ColorPicker key={i} label={`Band ${i + 1}`} selectedColor={bands[i]} onSelect={(color) => {
                    const newBands = [...bands];
                    newBands[i] = color;
                    setBands(newBands);
                }} />
            ))}
            <ColorPicker label="Multiplier" selectedColor={multiplier} onSelect={setMultiplier} />
            <ColorPicker label="Tolerance" selectedColor={tolerance} onSelect={setTolerance} />
            <button onClick={handleCalculate}>Calculate Resistance</button>
            <ResistanceDisplay resistance={resistance} />
            <h2>SMD Resistor Calculator</h2>
            <input type="text" placeholder="Enter SMD Code" value={smdCode} onChange={(e) => setSMDCode(e.target.value)} />
            <button onClick={handleSMDDecode}>Decode SMD</button>
            <ResistanceDisplay smdResistance={smdResistance} />
        </div>
    );
};

export default ResistanceCalculator;
