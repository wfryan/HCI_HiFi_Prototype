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
    const raidLocation = document.getElementById("raidLocation")
    raidLocation.appendChild(document.createTextNode("Location: " + RaidEvent.raid.location.valueOf()))
    const raidDate = document.getElementById("raidDate")
    raidDate.appendChild(document.createTextNode("Date: " + RaidEvent.date.valueOf()))


    const fireteam = document.getElementById("activeFireteamMembers")
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
        tmp.setAttribute("title", triumph.description.valueOf())
        tmp.appendChild(lab)
        triumphs.appendChild(tmp)
    }

    const clan = document.getElementById('clan')
    clan.appendChild(document.createTextNode(RaidEvent.clan.valueOf()));
    
}