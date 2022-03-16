export function getColor(type) {
    let color = "black";
  
    if(type === "grass") {
        color = "rgba(136, 214, 121, 0.6)";
    } else if(type === "fire") {
        color = "rgba(228, 127, 127, 0.6)";
    } else if(type === "water") {
        color = "rgba(125, 146, 216, 0.6)";
    } else if(type === "electric") {
        color = "rgba(228, 230, 117, 0.6)";
    } else if(type === "normal") {
        color = "rgba(158, 138, 95, 0.6)";
    }  else if(type === "ghost") {
        color = "rgba(143, 112, 194, 0.6)";
    }
  
    return color;
};