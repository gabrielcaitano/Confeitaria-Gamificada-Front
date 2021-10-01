import React, { useEffect, useState } from 'react'


const relogio = new Date();

function Relogio() {
    const [dateTime, setDateTime] = useState({
        hora: relogio.getHours(),
        minutos: relogio.getMinutes(),
        segundos: relogio.getSeconds()
    });


    useEffect(() => {
        const intervaloTempo = setInterval(() => {
            const relogio = new Date();
            setDateTime({
                hora: relogio.getHours(),
                minutos: relogio.getMinutes(),
                segundos: relogio.getSeconds()
            });
        }, 1000);
        return () => clearInterval(intervaloTempo);
    }, []);


    return (

        <div className="w3-xxlarge w3-padding-16 w3-border w3-hover-orange">
            {dateTime.hora}:{dateTime.minutos}:{dateTime.segundos}
        </div>

    );
}

export default Relogio