import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";

const Amazon = () => {
    return (
        <Cards 
                key={Sdata[3].id}
                imgsrc= {Sdata[3].imgscr} 
                title= {Sdata[3].title} 
                sname = {Sdata[3].sname} 
                link = {Sdata[3].link} 
        />
    );
}

export default Amazon;