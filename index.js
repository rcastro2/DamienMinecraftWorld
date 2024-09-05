let scene,camera,portal_template,portals=[];
window.onload = function(){
    scene = document.querySelector("a-scene");
    camera = document.querySelector("a-camera");
    portalTemplate = document.getElementById("portal_template");

    source = {container:whiteWorld,coords:"0 0 -10"};
    destination = {container:purpleWorld,coords:"0 1.6 0"};
    purplePortal = new Portal(source,destination,"purple");

    source = {container:purpleWorld,coords:"0 0 -20"};
    destination = {container:whiteWorld,coords:"0 1.6 0"};
    whitePortal1 = new Portal(source,destination,"white");

    source = {container:whiteWorld,coords:"-10 0 0"};
    destination = {container:redWorld,coords:"0 1.6 0"};
    redPortal = new Portal(source,destination,"red");
    redPortal.obj.setAttribute("rotation","0 -90 0");

    source = {container:redWorld,coords:"0 0 -20"};
    destination = {container:whiteWorld,coords:"0 1.6 0"};
    whitePortal2 = new Portal(source,destination,"white");

    source = {container:whiteWorld,coords:"10 0 0"};
    destination = {container:greenWorld,coords:"0 1.6 0"};
    greenPortal = new Portal(source,destination,"green");
    greenPortal.obj.setAttribute("rotation","0 90 0");

    source = {container:greenWorld,coords:"0 0 -20"};
    destination = {container:whiteWorld,coords:"0 1.6 0"};
    whitePortal3 = new Portal(source,destination,"white");

    source = {container:whiteWorld,coords:"0 0 10"};
    destination = {container:blueWorld,coords:"0 1.6 0"};
    bluePortal = new Portal(source,destination,"blue");

    source = {container:blueWorld,coords:"0 0 -20"};
    destination = {container:whiteWorld,coords:"0 1.6 0"};
    whitePortal4 = new Portal(source,destination,"blue");

    portals = [purplePortal,whitePortal1,redPortal,whitePortal2,greenPortal,whitePortal3,bluePortal,whitePortal4];
    // generateMaze();
    // purpleWorld = document.getElementById("purpleWorld");
    // generateMaze(purpleWorld);
    //portals = [purplePortal,whitePortal1];
    setTimeout(loop,2000);
}

function loop(){
    for(let portal of portals){
        portal.checkJump();
    }
    window.requestAnimationFrame(loop);
}

// function distance(obj1,obj2){
//     let x1 = obj1.object3D.position.x;
//     let y1 = obj1.object3D.position.y;
//     let z1 = obj1.object3D.position.z;
//     let x2 = obj2.object3D.position.x;
//     let y2 = obj2.object3D.position.y;
//     let z2 = obj2.object3D.position.z;
  
//     let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2))
  
//     return d;
//   }
  