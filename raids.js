import { players, raids, Triumph, RaidEvent } from 'data.js';

function getRaid(raidName){
    for(let raid in raids){
        if(raid.name == raidName){
            return raid;
        }
    }
}

function handleRaid(raidName){
    let raid = getRaid(raidName);
    console.log(raid.name)

}