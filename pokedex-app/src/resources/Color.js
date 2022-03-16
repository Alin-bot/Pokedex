export function getColor(type) {
    let color = "black";
  
    if(type === "grass") {
        color = "rgb(136, 214, 121)";
    } else if(type === "fire") {
        color = "rgb(228, 127, 127)";
    } else if(type === "water") {
        color = "rgb(125, 146, 216)";
    } else if(type === "electric") {
        color = "rgb(228, 230, 117)";
    } else if(type === "normal") {
        color = "rgb(158, 138, 95)";
    }  else if(type === "ghost") {
        color = "rgb(143, 112, 194)";
    }
  
    return color;
};