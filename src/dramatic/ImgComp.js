import React from "react";

function ImgComp({src}){
    let imgStyle ={
        with: 100 + "%",
        height: "auto"
    }
    return <img src={src} alt="slide-img" style={imgStyle}>

    </img>
}

export default ImgComp;