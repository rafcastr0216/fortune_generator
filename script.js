//console.log('Hello User here is your fortune');
const structures = {
    starters: ['Hello ', 'Hi ', 'Nice to see you '],
    middle: ['Well ', 'I think that ', 'Chances are that '],
    ending: ['Luck is on your side', 'I do not have an answer for that', 'It will happen', 'Sorry not likely']
};
const fortune = (user, question) => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let n = Math.floor(Math.random()*4);

    let sentence = structures.starters[i] + user + ', ' + 'You asked: ' + question + ' your answer is: ' + structures.middle[j] + structures.ending[n];
    return sentence;
};

console.log(fortune('Raul', 'will I find love?'))