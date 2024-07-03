let trafficlight='green'
let action
switch(trafficlight){
    case "red":
     action= "stop"
     break
    case "yellow":
     action="get ready"

     break
    case "green":
     action="go"
     break
    default:
     action="ivalid colour"
}
console.log(action)

