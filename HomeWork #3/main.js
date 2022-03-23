
const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
let el = document.getElementsByTagName('li');

// Эта кнопка добавляет новые задачи. Я ещё хотел сделать, чтобы он сохранял новые внесённые задачи, но не знал, как это реализовать.
btn.onclick = function(){
    
    let txt = input.value;
    if(txt ==''){
        alert('Напиши, что нибудь...');
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    
};

//Эта функция вычеркивает задачу
list.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};

function newElement(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('form-control').value;
    var i = document.createTextNode(inputValue);
    li.appendChild(i);
    var date = new Date();
    var taskDate = date.toLocaleString();
    var time = document.createTextNode(" " + taskDate);
    li.appendChild(time);
}
