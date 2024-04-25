class Triumph{
    constructor(name, description, selective=false){
        this.name = name;
        this.description = description;
        this.selective = selective;
    }
}

class RaidEvent {
    constructor(raid, fireteam, clan, date=datetime.now(), completedTriumphs) {
        this.raid = raid;
        this.fireteam = fireteam;
        this.clan = clan;
        this.date = date;
        this.triumphs = completedTriumphs;
    }

}

const players = ["Aidan", "Andy", "Ian", "Matt", "Cyn", "Will", "Tom", "Chris"]

const raids = [
    {
        name: "Crota's End",
        location: "Hellmouth, Moon",
        sealTitle:"Swordbearer",
        triumphs: [
            Triumph("Spoils of Conquest", "Loot all hidden chets"),
            Triumph("Unbowed", "Complete all encounters with a full fireteam of clanmates"),
            Triumph("Retributive Charge", "Complete all encounters with a full Arc fireteam", true),
            Triumph("Enlightended Emanation", "Complete all encounters with a full Solar fireteam", true),
            Triumph("Hidden Depths", "Complete all encounters with a full Void fireteam", true),
            Triumph("In Unison", "Complete all encounters with a full fireteam of the same class"),
            Triumph("Conservation of Energy", "Complete the \"Conservation of Energy\" challenge"),
            Triumph("Precarious Balanace", "Complete the \"Precarious Balanace\" challenge"),
            Triumph("Equal Vessels", "Complete the \"Equal Vessels\" challenge"),
            Triumph("All for One", "Complete the \"All for One\" challenge"),
            Triumph("Broken Throne", "Complete the raid \"Crota's End\" on Master difficulty"),
            Triumph("Conquest by Virtue", "Complete all encounter challenges on Master difficulty")
        ]
    },
    {
        name: "Deep Stone Crypt",
        location: "Eventide Ruins, Europa",
        sealTitle: "Descendant",
        triumphs: [
            Triumph("Cryptkeeper", "Loot all hidden chests"),
            Triumph("Clan Night: Deep Stone Crypt", "Complete all encounters with a full fireteam of clanmates"),
            Triumph("Control Group", "Complete all encounters with a full fireteam of the same class"),
            Triumph("Electric Sheep", "Complete all encounters with a full Arc fireteam", true),
            Triumph("Meltdown", "Complete all encounters with a full Solar fireteam", true),
            Triumph("Devoid of the Rest", "Complete all encounters with a full Void fireteam", true),
            Triumph("Freezing Point", "Complete all encounters with a full Stasis fireteam", true),
            Triumph("Not a Scratch", "Get all Pikes through the blizzard"),
            Triumph("Rock Bottom", "Collect all Exo Stranger logs"),
            Triumph("Red Rover", "Complete the \"Red Rover\" challenge"),
            Triumph("Copies of Copies", "Complete the \"Copies of Copies\" challenge"),
            Triumph("Of All Trades", "Complete the \"Of All Trades\" challenge"),
            Triumph("The Core Four", "Complete the \"The Core Four\" challenge"),
        ]
    },
    {
        name: "Last Wish",
        location: "The Dreaming City",
        sealTitle: "Rivensbane",
        triumphs: [
            Triumph("O Murderer Mine", "Complete the Last Wish raid"),
            Triumph("Treasure Trove", "Loot hidden chests 10 times"),
            Triumph("Clan Night: Last Wish", "Complete all encounters with a full fireteam of clanmates"),
            Triumph("The New Meta", "Complete all raid encounters with a full fireteam of the same class"),
            Triumph("Thunderstruck", "Complete all encounters with a full Arc fireteam", true),
            Triumph("Sunburn", "Complete all encounters with a full Solar fireteam", true),
            Triumph("Night Owl", "Complete all encounters with a full Void fireteam", true),
            Triumph("Petras Run", "Complete all encounters without anyone dying"),
            Triumph("Strength of Memory", "Complete the \"Strength of Memory\" challenge"),
            Triumph("Summoning Ritual", "Complete the \"Summoning Ritual\" challenge"),
            Triumph("Coliseum Champion", "Complete the \"Coliseum Champion\" challenge"),
            Triumph("Keep Out", "Complete the \"Keep Out\" challenge"),
            Triumph("Forever Fight", "Complete the \"Forever Fight\" challenge"),
        ]
    },
    {
        name: "Root of Nightmares",
        location: "Essence",
        sealTitle: "Dream Warrior",
        triumphs: [
            Triumph("Root of Nightmares", "Complete any version of the \"Root of Nightmares\" raid"),
            Triumph("Collective Consciousness", "Complete all encounters with a full fireteam of clanmates"),
            Triumph("Terraformed Secrets", "Loot all hidden chests in the \"Root of Nightmares\" raid"),
            Triumph("Classic Horror", "Complete all encounters with a full fireteam of the same class"),
            Triumph("System Shock", "Complete all encounters with a full Arc fireteam", true),
            Triumph("Infernal Pain", "Complete all encounters with a full Solar fireteam", true),
            Triumph("Harbingers of Nothingness", "Complete all encounters with a full Void fireteam", true),
            Triumph("Dream Weavers", "Complete all encounters with a full Strand fireteam", true),
            Triumph("Illuminated Torment", "Complete the \"Illuminated Torment\" challenge"),
            Triumph("Crossfire", "Complete the \"Crossfire\" challenge"),
            Triumph("Cosmic Equilibrium", "Complete the \"Cosmic Equilibrium\" challenge"),
            Triumph("All Hands", "Complete the \"All Hands\" challenge"),
            Triumph("Final Nightmare", "Complete all challenges on Master")
        ]
    }
]

module.exports = {players, raids, Triumph, RaidEvent};