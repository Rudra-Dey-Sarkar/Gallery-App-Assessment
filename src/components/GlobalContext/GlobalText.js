import React,{createContext, useState} from "react";

const Context = createContext();
function ContextWrapper({children}){
const [selectedImage, setSelectedImage] = useState("");    
return(
    <Context.Provider value={{selectedImage, setSelectedImage}}>
        {children}
    </Context.Provider>
)
}

export {Context, ContextWrapper};