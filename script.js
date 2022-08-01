var playerno = 0
var hasanswered = false
var playerinfo = {Player: 0, Playerscore: 0} //object prototype
var list = [] //Object list (for both playerno and playerscore)
var list2 = [] //Number list (for playerscore only)

function main(input){
        if(playerno <= 5 && hasanswered == false){
            if(input.length>0){                              //catch errors
                return "Press submit to roll dice first"
            }
            playerno++
            outputval = `Welcome Player ${playerno}<br>`
            dice1=rolldice()
            dice2=rolldice()
            outputval = outputval + `Your dice rolls are ${dice1} for dice 1 & ${dice2} for dice 2<br>Choose the order of the dice by entering "1" or "2".`
            
        }
        hasanswered = true
        if(input == 1){
            diceresult = String(dice1) + String(dice2)
            outputval = `Player ${playerno} chose ${input}<br>Your number is ${diceresult}.`
            hasanswered = false

//Creating Objects and assigning values to them and store them in array: "list"
            Objectmake = input //creating seperate variable to not confuse with actual input
            Player = playerno
            Objectmake = Object.create(playerinfo)
            Objectmake.Player = Number(Player)
            Objectmake.Playerscore = Number(diceresult)
            list.push(Objectmake)
            list2.push(Objectmake.Playerscore)
            

        } else if(input == 2){
            diceresult = String(dice2) + String(dice1)
            outputval = `Player ${playerno} chose ${input}<br>Your number is ${diceresult}.`
            hasanswered = false

//Creating Objects and assigning values to them and store them in array: "list"
            Objectmake = input //creating seperate variable to not confuse with actual input
            Player = playerno
            Objectmake = Object.create(test)
            Objectmake.Player = Number(Player)
            Objectmake.Playerscore = Number(diceresult)
            list.push(Objectmake)
            list2.push(Objectmake.Playerscore)


         } 
        if (playerno==6){
            console.log(list)

            highestnum = Math.max(...list2)
            searchIndex = list.findIndex((P) => P.Playerscore == highestnum)
            Winner = list[searchIndex].Player                                   //finding the player that has the highest score
            console.log(highestnum)


            outputval = `Winner is player ${Winner} with a number of ${highestnum}`
        }
        
    return outputval
    
}

//generate random number from 1-6
function rolldice(){
    randomfloat = Math.random()*6
    randomint = Math.floor(randomfloat) +1
    return randomint
}
