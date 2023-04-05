let num = 0;

function keepTime(){
    let counter = document.querySelector('#counter');
    console.log(counter);
    setTimeout(() => {
        num+=1;
        counter.innerText = `${num}`;
        keepTime();}, 1000);
}

document.querySelector("#minus").addEventListener('click', e => {
    num -=1;
    counter.innerText = `${num}`;
})

document.querySelector("#plus").addEventListener('click', e => {
    num +=1;
    counter.innerText = `${num}`;
})

document.querySelector('#heart').addEventListener('click', e => {
    if (!!document.getElementById(num) === false){
        let likes = document.createElement('p');
        likes.id = num;
        likes.hearts = 1;
        likes.innerText = `${num} has been liked 1 times`;
        document.querySelector(`.likes`).append(likes)
    } else {
        addLike(document.getElementById(num))
    }
});

function addLike(likes){
    likes.hearts += 1;
    console.log(likes.hearts);
    likes.innerText = `${likes.id} has been liked ${likes.hearts} times`
}

keepTime();