// model
let collection = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
let addTodo = document.getElementById('addTodo')
let addTodoForm = document.getElementById('addTodoForm')
let todos = document.getElementById('todos')

updateTodo()

// controller
addTodoForm.addEventListener('submit',function(e) {
  e.preventDefault()
  if (addTodo.value != "") {
    collection.push(addTodo.value)
    addTodo.value = ""
  }
})

// view
Object.observe(collection,updateTodo)

function updateTodo(changes) {
  todos.innerHTML = ""
  console.log(changes)
  collection.forEach(function(item,index) {
    let todo = document.createElement('li')
    todo.innerHTML = item
    todos.appendChild(todo)

    todos.childNodes[todos.childNodes.length - 1].addEventListener('click',function(e) {
      collection.splice(index,1)
    })
  })
  localStorage.setItem('todos',JSON.stringify(collection))
}

export default {}