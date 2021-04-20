let cube = {
    x:0,
    y:0,
    id: "cube",
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    
    
    
    


    
}


let map = {
    x: 0,
    y: 0,
    width: window.outerWidth,
    height: window.outerHeight,
    color: 'pink'
}

let bots =[];


let bot = {
    x:0,
    y:0,
    id: "1",
    width: 56,
    height: 56,
    trn: .25,
    step: 56,
    color: 'red',
};
bots.push(bot);

    
    



renderMap(map); // Рендер карты
renderCube(spawnCube(map,cube)); // Рендер куба
renderBots(bots);

console.log(window)
