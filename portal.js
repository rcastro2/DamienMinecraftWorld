class Portal{
    constructor(source,destination,color="white"){
        this.source = source;
        this.source.coords = this.splitCoordinates(source.coords);
        this.source.absoluteCoords = this.absoluteCoords(this.source);
        this.destination = destination;
        this.destination.coords = this.splitCoordinates(destination.coords);
        this.destination.absoluteCoords = this.absoluteCoords(this.destination);

        this.obj = portalTemplate.cloneNode(true);
        this.obj.setAttribute("position",this.source.coords);
        this.obj.getChildren()[4].setAttribute("color",color);
        this.obj.getChildren()[5].setAttribute("color",color);
        this.source.container.append(this.obj);
    }
    setSource(source){
        
    }
    checkJump(){
        let d = this.distance(this.source.absoluteCoords,camera.object3D.position);
        if(d < 2){
            camera.setAttribute("position",this.destination.absoluteCoords);
        }
    }
    absoluteCoords(location){
        console.log(location);
        let coords = {x:0,y:0,z:0};
        coords.x = location.container.object3D.position.x + location.coords.x
        coords.y = location.container.object3D.position.y + location.coords.y
        coords.z = location.container.object3D.position.z + location.coords.z
        return coords;
    }
    splitCoordinates(coordinates){
        let coords = coordinates.split(" ");
        return {x:parseFloat(coords[0]),y:parseFloat(coords[1]),z:parseFloat(coords[2])};
    }
    distance(obj1,obj2){
        let x1 = obj1.x;
        let y1 = obj1.y;
        let z1 = obj1.z;
        let x2 = obj2.x;
        let y2 = obj2.y;
        let z2 = obj2.z;
      
        let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2))
      
        return d;
      }
}
      
