const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later',
    'please come over at 5pm tonight'
];

//const sweetMessage = `${messages[0]}, sweetie?`;

//const sweetMessages = [];
//for (let i = 0; i < messages.length; i++){
//    const newMessage = `${messages[i]}, sweetie?`;
//    sweetMessages.push(newMessage); }
//

const sweetMessages = messages.map((messages) => `${messages}, sweetie?`);

console.log(sweetMessages);

