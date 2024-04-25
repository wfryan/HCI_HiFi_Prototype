let RaidEvent;
let raid;

window.onload = async function(){
    const eventResponse = await fetch('/dataEvent', {
        method:'POST'
    })
    const eventData = await eventResponse.json()
    RaidEvent = eventData.raidEvent

    const raidName = document.getElementById("RaidEventName")
    raidName.appendChild(document.createTextNode(RaidEvent.raid.name.valueOf()))

    const fireteam = document.getElementById("fireteamMembers")
    for(let player of RaidEvent.fireteam){
        const tmp = document.createElement("li");
        const lab = document.createElement("label")
        lab.appendChild(document.createTextNode(player.valueOf()))
        tmp.appendChild(lab)
        fireteam.appendChild(tmp)
    }

    const triumphs = document.getElementById("triumphs")
    for(let triumph of RaidEvent.triumphs){
        const tmp = document.createElement("li");
        const lab = document.createElement("label")
        lab.appendChild(document.createTextNode(triumph.name.valueOf()))
        tmp.appendChild(lab)
        triumphs.appendChild(tmp)
    }
    
}