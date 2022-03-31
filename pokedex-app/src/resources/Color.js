export function getColor(type) {
    let color = "black";
  
    if(type === "grass") {
        color = "rgba(136, 214, 121, 0.6)";
    } else if(type === "fire") {
        color = "rgba(220, 100, 60, 0.6)";
    } else if(type === "water") {
        color = "rgba(125, 146, 216, 0.6)";
    } else if(type === "electric") {
        color = "rgba(230, 240, 110, 0.6)";
    } else if(type === "normal") {
        color = "rgba(158, 138, 95, 0.6)";
    }  else if(type === "ghost") {
        color = "rgba(143, 112, 194, 0.6)";
    } else if(type === "bug") {
        color = "rgba(120, 223, 60, 0.6)";
    } else if(type === "poison") {
        color = "rgba(150, 50, 150, 0.6)";
    } else if(type === "ground") {
        color = "rgba(180, 180, 90, 0.6)";
    } else if(type === "fairy") {
        color = "rgba(200, 100, 150, 0.6)";
    } else if(type === "fighting") {
        color = "rgba(228, 127, 127, 0.6)";
    } else if(type === "psychic") {
        color = "rgba(220, 130, 160, 0.6)";
    } else if(type === "rock") {
        color = "rgba(170, 150, 170, 0.6)";
    } else if(type === "ice") {
        color = "rgba(120, 180, 200, 0.6)";
    } else if(type === "dragon") {
        color = "rgba(220, 130, 200, 0.6)";
    } else if(type === "dark") {
        color = "rgba(20, 20, 40, 0.6)";
    } else if(type === "steel") {
        color = "rgba(20, 50, 70, 0.6)";
    }
  
    return color;
};