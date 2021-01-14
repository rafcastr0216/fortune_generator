//console.log('Hello User here is your fortune');
const structures = {
    starters: ['Hello ', 'Hi ', 'Nice to see you '],
    middle: ['to answer your question: ', 'I think that ', 'Chances are that '],
    ending: ['Luck is on your side', 'I do not have an answer for that', 'It will happen', 'Sorry not likely']
};
const fortune = (user, question) => {
    let i = Math.floor(Math.random()*3);
    let j = Math.floor(Math.random()*3);
    let n = Math.floor(Math.random()*4);

    let sentence = structures.starters[i] + user + ' ' + 'You ask ' + question + ' ' + structures.middle[j] + structures.ending[n];
    return sentence;
};

console.log(fortune(Raul, will I find love?))