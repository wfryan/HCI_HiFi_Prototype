import {RaidEvent} from './data.js';


let selectedTriumphs = []
let raid;

const defaultListItem = document.createElement("li");
const defaultIn = document.createElement("input");
defaultIn.setAttribute("type", "checkbox")
defaultIn.className = "active"
defaultListItem.className = "triumphs"
defaultListItem.appendChild(defaultIn)

function addTriumph(name){
    for(let triumph of raid.triumphs){
        if(triumph.name == name){
            selectedTriumphs.push(triumph)
        }
    }
}

const submitTriumphs = async function(event){
    event.preventDefault();
    const body = JSON.stringify({selectedTriumphs})
    const response = await fetch ("/sendRaidEvent", {
        method:'POST',
        body
    })
    window.location.href = "/event.html"
}

window.onload = async function(){
    const raidResponse = await fetch('/dataRaid', {
        method:'POST'
    })
    const raidData = await raidResponse.json()
    raid = raidData.Raid
    console.log(raid)
    const title = document.getElementById("TriumphTitle")
    title.appendChild(document.createTextNode(raid.sealTitle.valueOf() + " Triumphs"))
    const list = document.getElementById("availableTriumphs")
    for(let triumph of raid.triumphs){
        console.log(triumph)
        const tmp = defaultListItem.cloneNode()
        const tmpIn = defaultIn.cloneNode()
        const lab = document.createElement("label")
        lab.appendChild(document.createTextNode(triumph.name.valueOf()))
        tmp.setAttribute("title", triumph.description.valueOf())
        tmp.appendChild(lab)
        tmp.appendChild(tmpIn)
        console.log(tmp)
        //tmp.innerText = player;
        list.appendChild(tmp)
    }
    const nextButton = document.getElementById('next')
    nextButton.onclick = submitTriumphs
    list.addEventListener("change", function(event){
        if(event.target.classList.contains("active"))
        {
            let tmp = event.target.parentElement;
            let text = tmp.innerText.valueOf();
            if(event.target.checked){
                addTriumph(text)
            }
            else{
                for(let i = 0; i < selectedTriumphs.length; i++){
                    if(text === selectedTriumphs[i]){
                        selectedTriumphs.splice(i, 1)
                    }
                }
            }
        }
    })
}