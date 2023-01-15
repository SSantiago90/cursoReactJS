import React from "react";
import { DotSpinner } from "@uiball/loaders";

function Loader(){

    return (
        <>
            <DotSpinner 
                    size={200}
                    speed={0.8}
                    color = "rgb(255, 235, 123)"
                />  
        </>
    )
}

export default Loader;