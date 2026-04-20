const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //Also Possible
let accountState;

// accountId = 2 //Not allowed
console.log(accountId)

accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
