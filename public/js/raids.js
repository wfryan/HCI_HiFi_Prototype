let raid;
let Raids;
function getRaid(raidName){
    for(let tmpRaid of Raids){

        if(tmpRaid.name == raidName){
            return tmpRaid;
        }
    }
}

const handleRaid = async function (event){
    event.preventDefault();
    let raidName = event.target
    console.log(event)
    if(raidName.classList.contains('crota')){
        raid = getRaid('Crota\'s End')
    }
    if(raidName.classList.contains('dsc')){
        raid = getRaid('Deep Stone Crypt')
    }
    if(raidName.classList.contains('lw')){
        raid = getRaid('Last Wish')
    }
    if(raidName.classList.contains('ron')){
        raid = getRaid('Root of Nightmares')
    }
    const body = JSON.stringify({raid})
    const postResponse = await fetch ("/sendRaid", {
        method:'POST',
        body
    })
    console.log(postResponse.url)
    window.location.href = postResponse.url
}

export function sendRaid(){
    console.log(raid)
    return raid
}

function addClick(item){
    console.log(item)
    for(let element of item.children)
    {
        console.log(element)
        element.onclick = item.onclick;
        console.log(element)
    }
}

window.onload = async function(){
    const response = await fetch('/dataRaids', {
        method:'POST'
    });
    const data = await response.json()
    Raids = data.Raids
    console.log(Raids)
    const crota = document.getElementById("crota")
    const dsc = document.getElementById("dsc")
    const lw = document.getElementById("lw")
    const ron = document.getElementById("ron")

    crota.onclick = handleRaid
    dsc.onclick = handleRaid
    lw.onclick = handleRaid
    ron.onclick = handleRaid

}