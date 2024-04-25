let activeFireteam = []
let players = []

const defaultListItem = document.createElement("li");
const defaultIn = document.createElement("input");
defaultIn.setAttribute("type", "checkbox")
defaultIn.className = "active"
defaultListItem.className = "fireteam"
defaultListItem.appendChild(defaultIn)

const handleSubmit = async function(event){
    if(activeFireteam.length < 1){
        console.log("Implement empty fireteam error")
    }
    else{
        const body = JSON.stringify({activeFireteam})
        const response = await fetch ("/sendFireteam", {
            method:'POST',
            body
        })
        window.location.href = "/triumphs.html"
    }
}

window.onload = async function(){

    const playerResponse = await fetch('/dataPlayers', {
        method:'POST'
    })
    const playerData = await playerResponse.json()
    console.log(playerData)
    players = playerData.players
    console.log(players)
    const list = document.getElementById("fireteamMembers")
    for(let player of players){
        console.log(player)
        const tmp = defaultListItem.cloneNode()
        const tmpIn = defaultIn.cloneNode()
        const lab = document.createElement("label")
        lab.appendChild(document.createTextNode(player.valueOf()))
        tmp.appendChild(lab)
        tmp.appendChild(tmpIn)
        console.log(tmp)
        //tmp.innerText = player;
        list.appendChild(tmp)
    }

    const nextButton = document.getElementById('next')
    nextButton.onclick = handleSubmit

    list.addEventListener("change", function(event){
        if(event.target.classList.contains("active"))
        {
            let tmp = event.target.parentElement;
            let text = tmp.innerText.valueOf();
            if(event.target.checked){
                activeFireteam.push(text)
            }
            else{
                for(let i = 0; i < activeFireteam.length; i++){
                    if(text === activeFireteam[i]){
                        activeFireteam.splice(i, 1)
                    }
                }
            }
            console.log(activeFireteam)
        }
    })
}
