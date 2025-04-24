import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from 'react'; 

export default function Door() {
    //let status = "Fechada"
    const [status, setStatus] = useState("Fechada")

    function clicouPorta() {
        if(status == 'Fechada') {
            //status = "Aberta"
            setStatus("Aberta")
        } else {
            //status = "Fechada"
            setStatus("Fechada")
        }
        console.log("Status da porta: ",status);
    }

    return (
        <>
            <div onClick={clicouPorta} className="flex items-center gap-1 m-1 px-2 bg-gray-400 rounded w-48">
                <div>
                    <Icon icon="mdi:door" className="text-3xl" />
                </div>
                <div>
                    Porta { status }
                </div>
            </div>
        </>
    )
}