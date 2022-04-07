import React, { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router";
import { traerPerfumes } from "../PerfumesDatos";

function ItemDetailContainer(){
    const [perfumess, setPerfumess] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();
    console.log(id);

    const traerPerfumeDetalle = perfumess.filter(perfumeElegido => perfumeElegido.id==id);
    console.log(traerPerfumeDetalle);

    useEffect(() => {
        traerPerfumes.then((res) =>{
            setPerfumess(res);
        })
        .catch((error) =>{
            console.log(error);
        })
        .finally(() =>{
            setCargando(false);
        })
    },[])

    return(
    
            <div>
                {cargando ? ( <h1> Cargando...</h1>)
                    :
                    (
                        <>

                        {traerPerfumeDetalle.map((perfumeElegido)=>(
                            <ItemDetail {...perfumeElegido} key={perfumeElegido.id}/>
                        ))}

                        </>
                    )}
            </div>
        
    )
}
export default ItemDetailContainer;
