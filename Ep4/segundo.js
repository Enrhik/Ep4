function getRandomInt(min, max){
    return Math.floor(Math.random()*(max - min + 1))+ min;
}
function generateAndDisplayNumbers(min, max){
    const list = document.getElementById('randomNumbers');
    let i = 0;
    do{
        let number = getRandomInt(min, max);
        let listItem = document.createElement('li');
        listItem.textContent = (i + 1) + '.' + number;
        list.appendChild(listItem);
        i++;
    }while(i < 20);
}
const min = 1;
const max = 300;
generateAndDisplayNumbers(min, max);