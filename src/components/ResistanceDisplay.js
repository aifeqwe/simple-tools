import React from "react";

export default function ResistanceDisplay({ resistance, smdResistance }) {
    return (
        <div style={{ margin: '20px 0', fontWeight: 'bold', fontSize: '1.2em' }}>
            {resistance && <div>Resistance: {resistance}</div>}
            {smdResistance && <div>SMD Resistance: {smdResistance}</div>}
        </div>
    );
}
