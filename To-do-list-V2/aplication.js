const criarItem = () =>{
    const item = document.createElement('label');
    item.innerHTML = `
    <input type="checkbox">
    <div>teste-item1</div>
    <input type="button" value="X">
    `
    item.classList.add('item');
    document.getElementById('to-do-tasks').appendChild(item);
}
