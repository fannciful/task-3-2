const userName = prompt("Input your Name: ");
const userAge = prompt("Input your Age: ");
const userCity = prompt("Input your City: ");

if (!userName || !userAge || !userCity) {
    alert('Some line is not entered!');
} 
else if (isNaN(userAge)) {
    alert('You entered not a number in age line');
} 
else if (!userName.trim() || !userAge.trim() || !userCity.trim()){
    alert('You entered nothing in some line!');
}
else {
    const resultLine = `Name: ${userName}; City: ${userCity}; Age: ${userAge}`;
    console.log(resultLine);
}
