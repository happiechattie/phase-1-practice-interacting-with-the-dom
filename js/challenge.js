let num = 0;
let run = true;

function keepTime(){
    let counter = document.querySelector('#counter');
    if (run === true){
        setTimeout(() => {
            num+=1;
            counter.innerText = `${num}`;
            keepTime();}, 1000);
    } else {
        setTimeout(() => {keepTime();}, 1000);
    }
}

document.querySelector('#pause').addEventListener('click', e => {
    if (run === true) {
        run = false;
        disableButtons();
    } else if (run === false) {
        run = true;
        disableButtons();
    } else {
        return;
    }
})

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

function disableButtons(){
    if (run === false){
        document.getElementById('minus').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('heart').disabled = true;
        document.getElementById('submit').disabled = true;
    }else if (run === true) {
        document.getElementById('minus').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('heart').disabled = false;
        document.getElementById('submit').disabled = false;
    } else{
        return;
    }
}

document.getElementById('comment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let comment = document.createElement('p');
    comment.innerText = document.getElementById('comment-input').value;
    document.getElementById('list').append(comment);
})

keepTime();