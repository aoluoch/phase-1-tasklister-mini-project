document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.reset()
  })
});

function buildToDo(todo){
  let li = document.createElement('li')
  let button = document.createElement('button')
  button.addEventListener('click', handleDelete)
  button.textContent = 'remove'
  p.textContent = `${todo} ` 
  p.appendChild(button)
  console.log(p)
  document.querySelector('#list').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
