let firstcard = 5
let secondcard = 8
let sum = firstcard + secondcard
let hasBlackjack = false
let isAlive = true

if(sum < 21){
    console.log("Quieres sacar otra carta?")
}
else if(sum ===21){
    console.log("Blackjack")
    hasBlackjack = true
}
else{
    console.log("Perdiste")
    isAlive = false
}
