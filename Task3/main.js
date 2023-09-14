const titleIn = document.querySelector('.titlein');
const desIn = document.querySelector('.desin');
const add = document.querySelector('.btn');
const form = document.querySelector('form');
const list = document.querySelector('ul');

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    titleIn.value = '';
    desIn.value = '';
});
add.addEventListener('click',()=>{
    const t = titleIn.value;
    const d = desIn.value;
    if(t !== '' && d !== ''){
        const newItem = { title: t, description: d };
        setValues(newItem);
        todoList.push(newItem);
        saveTodoList();
    }
});
function setValues(item) {
    const li = document.createElement('li');
    const r = document.createElement('div');
    r.setAttribute('class','result');

    const tit = document.createElement('div');
    tit.setAttribute('class','title1');
    const p1 = document.createElement('p');
    const t1 = document.createTextNode(item.title);
    const des = document.createElement('div');
    des.setAttribute('class','des1');
    const p2 = document.createElement('p');
    const t2 = document.createTextNode(item.description);
    const del = document.createElement('div');
    del.setAttribute('class','delete');
    const b = document.createElement('button');
    b.setAttribute('class','btn1');
    const i = document.createElement('i');
    i.setAttribute('class','fa-solid fa-trash');

    p1.appendChild(t1);
    tit.appendChild(p1);
    p2.appendChild(t2);
    des.appendChild(p2);
    b.appendChild(i);
    del.appendChild(b);

    r.appendChild(tit);
    r.appendChild(des);
    r.appendChild(del);
    li.appendChild(r);
    list.appendChild(li);

    b.addEventListener('click', () => {
        list.removeChild(li);
        const index = todoList.indexOf(item);
        if (index !== -1) {
            todoList.splice(index, 1);
            saveTodoList();
        }
    });
}
function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
todoList.forEach((item) => {
    setValues(item);
});
