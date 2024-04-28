const http = require("http"),
  fs = require("fs"),
  mime = require("mime"),
  dir = "public/",
  port = 3000;


class Triumph{
    constructor(name, description, selective=false){
        this.name = name;
        this.description = description;
        this.selective = selective;
    }
}

class RaidEvent {
    constructor(raid, fireteam, clan, date= new Date().toUTCString().slice(5,16), completedTriumphs) {
        this.raid = raid;
        this.fireteam = fireteam;
        this.clan = clan;
        this.date = date;
        this.triumphs = completedTriumphs;
    }

}

const players = ["Aidan", "Andy", "Ian", "Matt", "Cyn", "Will", "Tom", "Chris"]

const Raids = [
    {
        name: "Crota's End",
        location: "Hellmouth, Moon",
        sealTitle:"Swordbearer",
        triumphs: [
            new Triumph("Spoils of Conquest", "Loot all hidden chets"),
            new Triumph("Unbowed", "Complete all encounters with a full fireteam of clanmates"),
            new Triumph("Retributive Charge", "Complete all encounters with a full Arc fireteam", true),
            new Triumph("Enlightended Emanation", "Complete all encounters with a full Solar fireteam", true),
            new Triumph("Hidden Depths", "Complete all encounters with a full Void fireteam", true),
            new Triumph("In Unison", "Complete all encounters with a full fireteam of the same class"),
            new Triumph("Conservation of Energy", "Complete the \"Conservation of Energy\" challenge"),
            new Triumph("Precarious Balanace", "Complete the \"Precarious Balanace\" challenge"),
            new Triumph("Equal Vessels", "Complete the \"Equal Vessels\" challenge"),
            new Triumph("All for One", "Complete the \"All for One\" challenge"),
            new Triumph("Broken Throne", "Complete the raid \"Crota's End\" on Master difficulty"),
            new Triumph("Conquest by Virtue", "Complete all encounter challenges on Master difficulty")
        ]
    },
    {
        name: "Deep Stone Crypt",
        location: "Eventide Ruins, Europa",
        sealTitle: "Descendant",
        triumphs: [
            new Triumph("Cryptkeeper", "Loot all hidden chests"),
            new Triumph("Clan Night: Deep Stone Crypt", "Complete all encounters with a full fireteam of clanmates"),
            new Triumph("Control Group", "Complete all encounters with a full fireteam of the same class"),
            new Triumph("Electric Sheep", "Complete all encounters with a full Arc fireteam", true),
            new Triumph("Meltdown", "Complete all encounters with a full Solar fireteam", true),
            new Triumph("Devoid of the Rest", "Complete all encounters with a full Void fireteam", true),
            new Triumph("Freezing Point", "Complete all encounters with a full Stasis fireteam", true),
            new Triumph("Not a Scratch", "Get all Pikes through the blizzard"),
            new Triumph("Rock Bottom", "Collect all Exo Stranger logs"),
            new Triumph("Red Rover", "Complete the \"Red Rover\" challenge"),
            new Triumph("Copies of Copies", "Complete the \"Copies of Copies\" challenge"),
            new Triumph("Of All Trades", "Complete the \"Of All Trades\" challenge"),
            new Triumph("The Core Four", "Complete the \"The Core Four\" challenge"),
        ]
    },
    {
        name: "Last Wish",
        location: "The Dreaming City",
        sealTitle: "Rivensbane",
        triumphs: [
            new Triumph("O Murderer Mine", "Complete the Last Wish raid"),
            new Triumph("Treasure Trove", "Loot hidden chests 10 times"),
            new Triumph("Clan Night: Last Wish", "Complete all encounters with a full fireteam of clanmates"),
            new Triumph("The New Meta", "Complete all raid encounters with a full fireteam of the same class"),
            new Triumph("Thunderstruck", "Complete all encounters with a full Arc fireteam", true),
            new Triumph("Sunburn", "Complete all encounters with a full Solar fireteam", true),
            new Triumph("Night Owl", "Complete all encounters with a full Void fireteam", true),
            new Triumph("Petras Run", "Complete all encounters without anyone dying"),
            new Triumph("Strength of Memory", "Complete the \"Strength of Memory\" challenge"),
            new Triumph("Summoning Ritual", "Complete the \"Summoning Ritual\" challenge"),
            new Triumph("Coliseum Champion", "Complete the \"Coliseum Champion\" challenge"),
            new Triumph("Keep Out", "Complete the \"Keep Out\" challenge"),
            new Triumph("Forever Fight", "Complete the \"Forever Fight\" challenge"),
        ]
    },
    {
        name: "Root of Nightmares",
        location: "Essence",
        sealTitle: "Dream Warrior",
        triumphs: [
            new Triumph("Root of Nightmares", "Complete any version of the \"Root of Nightmares\" raid"),
            new Triumph("Collective Consciousness", "Complete all encounters with a full fireteam of clanmates"),
            new Triumph("Terraformed Secrets", "Loot all hidden chests in the \"Root of Nightmares\" raid"),
            new Triumph("Classic Horror", "Complete all encounters with a full fireteam of the same class"),
            new Triumph("System Shock", "Complete all encounters with a full Arc fireteam", true),
            new Triumph("Infernal Pain", "Complete all encounters with a full Solar fireteam", true),
            new Triumph("Harbingers of Nothingness", "Complete all encounters with a full Void fireteam", true),
            new Triumph("Dream Weavers", "Complete all encounters with a full Strand fireteam", true),
            new Triumph("Illuminated Torment", "Complete the \"Illuminated Torment\" challenge"),
            new Triumph("Crossfire", "Complete the \"Crossfire\" challenge"),
            new Triumph("Cosmic Equilibrium", "Complete the \"Cosmic Equilibrium\" challenge"),
            new Triumph("All Hands", "Complete the \"All Hands\" challenge"),
            new Triumph("Final Nightmare", "Complete all challenges on Master")
        ]
    }
];

let Raid;
let activeFireteam;
let retObject;

let pastEvents = []
let newEvent;

const server = http.createServer(function (request, response) {

  if (request.method === "GET") {
    handleGet(request, response);
  } else if (request.method === "POST") {
    handlePost(request, response);
  } else {
    request.on("end", function () {
        retObject = {Raids};
        console.log(retObject)
        response.writeHead(200, "OK", { "Content-Type": "text/json" });
        response.end(JSON.stringify(retObject));
      });
  }
});

const handleGet = function (request, response) {
  const filename = dir + request.url.slice(1);

  if (request.url === "/") {
    sendFile(response, "public/raids.html");
  } else {
    sendFile(response, filename);
  }
};

const handlePost = function (request, response) {
    let dataString = "";

    request.on("data", function (data) {
      dataString += data;
    });

    if(request.url ==="/dataRaids")
    {
      request.on("end", function () {
        retObject = {Raids};
        console.log(retObject)
        response.writeHead(200, "OK", { "Content-Type": "text/json" });
        response.end(JSON.stringify(retObject));
      });
    }
    else if(request.url ==="/dataPlayers")
    {
      request.on("end", function () {
        retObject = {players};
        console.log(retObject)
        response.writeHead(200, "OK", { "Content-Type": "text/json" });
        response.end(JSON.stringify(retObject));
      });
    }
    else if(request.url ==="/dataRaid")
    {
      request.on("end", function () {
        retObject = {Raid};
        console.log(retObject)
        response.writeHead(200, "OK", { "Content-Type": "text/json" });
        response.end(JSON.stringify(retObject));
      });
    }
    else if(request.url ==="/dataEvent")
    {
      request.on("end", function () {
        retObject = {raidEvent: newEvent};
        console.log(retObject)
        response.writeHead(200, "OK", { "Content-Type": "text/json" });
        response.end(JSON.stringify(retObject));
      });
    }
    else if(request.url ==="/pastEvents")
    {
      request.on("end", function () {
        retObject = {pastEvents};
        console.log(retObject)
        response.writeHead(200, "OK", { "Content-Type": "text/json" });
        response.end(JSON.stringify(retObject));
      });
    }
    else if(request.url === "/sendRaid"){
        request.on("end", function (){
            const tmpRaid = JSON.parse(dataString).raid
            console.log(tmpRaid)
            Raid = tmpRaid;
            response.writeHead(301, {Location: 'http://localhost:3000/fireteam.html'});
            response.end()
        });
    }
    else if(request.url === "/sendFireteam"){
        request.on("end", function (){
            const ft = JSON.parse(dataString).activeFireteam
            console.log(ft)
            activeFireteam = ft;
            response.writeHead(301, {Location: 'http://localhost:3000/triumphs.html'});
            response.end()
        });
    }
    else if(request.url === "/sendRaidEvent"){
        request.on("end", function (){
            const triumphs = JSON.parse(dataString).selectedTriumphs
            //console.log(triumphs)
            newEvent = new RaidEvent(Raid, activeFireteam,"The Nights Watchmen", new Date().toUTCString().slice(5, 16), triumphs)
            pastEvents.push(newEvent)
            console.log(newEvent)
            response.writeHead(301, {Location: 'http://localhost:3000/event.html'});
            response.end()
        });
    }
    else{
      request.on("end", function () {
        retObject =  Raids ;
        response.writeHead(200, "OK", { "Content-Type": "text/json" });
        response.end(JSON.stringify(retObject));
      });
    }


};

const sendFile = function (response, filename) {
  const type = mime.getType(filename);

  fs.readFile(filename, function (err, content) {
    // if the error = null, then we've loaded the file successfully
    if (err === null) {
      // status code: https://httpstatuses.com
      response.writeHeader(200, { "Content-Type": type });
      response.end(content);
    } else {
      // file not found, error code 404
      response.writeHeader(404);
      response.end("404 Error: File Not Found");
    }
  });
};

server.listen(process.env.PORT || port);