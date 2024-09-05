let maze = [
    "--xxxxx-----xxxxxxxxxx",
    "------x-----x--------x",
    "------x-----x--------x",
    "--x---xxxxxxx----xx--x",
    "--x-----xxx------xx--x",
    "--x--------------xx--x",
    "--x---xxxxxxxxxxxxx--x",
    "--xx---xxx--------x--x",
    "---xx---xxxxxxx---x--x",
    "----xx-------xx---x--x",
    "-----xx-----xx----x--x",
    "------xx---xxxxxxxx--x",
    "-------xx------------x",
    "--------x------------x",
    "--------xxxxxxxxxxxxxx",
  ];

class Block{
  constructor(x,y,z,container=scene,type="static-body"){
      this.obj = document.createElement("a-box");
      this.obj.setAttribute(type,"");
      this.obj.setAttribute("src","#grass_texture");
      this.obj.setAttribute("position",{x:x,y:y,z:z});
      container.append(this.obj);
  }
}

let generateMaze = (container=scene)=>{
    for(let z = 0; z < maze.length; z++){
      let cols = maze[z].split("");
      for(let x = 0; x < cols.length; x++){
        if(cols[x] == "x"){
          let b = new Block(x-4,0.5,z-4,container);
        }
      }
    }
  }
