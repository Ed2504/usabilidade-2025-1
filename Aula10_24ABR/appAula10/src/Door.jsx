import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from 'react'; 

export default function Door() {
    const [status, setStatus] = useState("Fechada")

    function clicouPorta() {
        if(status == 'Fechada') {
            setStatus("Aberta")
        } else {
            setStatus("Fechada")
        }
        console.log("Status da porta: ",status);
    }

    return (
        <>
            <div onClick={clicouPorta} className="flex items-center gap-1 m-1 px-2 bg-gray-400 rounded w-48">
                <div>
                    { 
                        (status=="Fechada") ? 
                        <Icon icon="mdi:door" className="text-3xl text-red-700" /> : 
                        <Icon icon="material-symbols-light:door-open-outline" className="text-3xl text-green-700" /> 
                    }
                </div>
                <div>
                    Porta { status }
                </div>
            </div>
        </>
    )
}