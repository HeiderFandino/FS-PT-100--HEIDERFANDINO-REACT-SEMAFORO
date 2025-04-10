import React, {useState} from "react"

export const Semaforo = () => {
    const [selected, setSelected] = useState("")
    


    const handleClick = (val) => {
        setSelected (val)}
        return(
            <div className="container">

                 <div className="base">.</div>
                <div className="semaforo">
                    <div className={`luz roja ${selected == "roja" ? "shadowLightr" : "" }`} onClick={()=> handleClick("roja")} ></div>
                    <div className= {`luz amarilla ${selected == "amarilla" ? "shadowLighta" : "" }`} onClick={()=> handleClick("amarilla")}></div>
                    <div className={`luz verde ${selected == "verde" ? "shadowLightv" : "" }`} onClick={()=> handleClick("verde")}></div>
                </div>
               
            </div>
        )






    } 