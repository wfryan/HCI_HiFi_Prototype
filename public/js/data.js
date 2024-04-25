export class Triumph{
    constructor(name, description, selective=false){
        this.name = name;
        this.description = description;
        this.selective = selective;
    }
}

export class RaidEvent {
    constructor(raid, fireteam, clan, date=datetime.now(), completedTriumphs) {
        this.raid = raid;
        this.fireteam = fireteam;
        this.clan = clan;
        this.date = date;
        this.triumphs = completedTriumphs;
    }

}

export const players = ["Aidan", "Andy", "Ian", "Matt", "Cyn", "Will", "Tom", "Chris"]

export const Raids = [
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
