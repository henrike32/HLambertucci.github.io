const treasureHunt = (location) => {

  
    var treasureLocation = Math.floor(Math.random() * 4)

    var bombLocation = Math.floor(Math.random() * 4)


    console.log("treasureLocation","bombLocation")

    console.log(treasureLocation,bombLocation)

    console.log(location)

    if (location === bombLocation){
        document.getElementById(location).innerHTML = "💣"
    }
    else if (location === treasureLocation){
        document.getElementById(location).innerHTML = "🪙"
    }
    
    // else if(location === 1){
    //     document.getElementById(location).innerHTML = "🪙"
    // } else if(location === 2){
    //     document.getElementById(location).innerHTML = "💣"
    // } else if (location === 3){
    //     document.getElementById(location).innerHTML = "💣"
    // }


   // return alert(location)
}