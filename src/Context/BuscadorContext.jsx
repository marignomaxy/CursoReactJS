import React,{ useState } from "react";
export const BuscadorContext = React.createContext()

const BuscadorProvider =({children})=>{
    const [buscar,setBuscar]=useState('Samsung')
    const [buscarDefi,setBuscarDefi]=useState('samsung')


    return(
        <BuscadorContext.Provider 
            value={{buscar,setBuscar,buscarDefi,setBuscarDefi}}
        >
            {children}
        </BuscadorContext.Provider>
    )
}

export default BuscadorProvider