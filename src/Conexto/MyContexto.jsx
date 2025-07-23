import { Children, createContext, useState } from "react";

export const MyContexto = createContext();


export const Datos = ({children})=>{
    const reyes = [
{
  nombre: 'Atanagildo',

},{
  nombre: 'Ataulfo',
},{
  nombre: 'Ervigio',
},
{
    nombre: 'Leogivildo',
},
{
  nombre: 'Recesvinto',
},
{
  nombre: 'Sisebuto'
}
]
    const [kings, setKings] = useState(reyes);
    return(
        <MyContexto.Provider value={{kings, setKings}}>
            {children}
        </MyContexto.Provider>
    )
}
