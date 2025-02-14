const accountId = 124;
let accountEmail = "swati@gmail.com"
var accountPassword = "1235";
accountCity = "jaipur"; // can declare a variable like this but not a good practise.

accountEmail = "Gajjawelli@gmail.com";
accountPassword = "189";
accountCity = "Hyderabad";
let accountState; 

// accountId = 2;// cannot change the value of const.

// Can change the value of let and var.
// But var dosen't have block scope and functional scope control. 
// let supports the block and functional scope feature.

//prefer not to use 'var' because of the issue in block scope and functionl scope.

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

