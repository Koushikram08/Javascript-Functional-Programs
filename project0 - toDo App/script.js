const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

var todoItems=[]
var count=0
var unchecked=0
const LINE_THROUGH="lineThrough"
const list = document.getElementById('todo-list')
const uncheckedCountSpan = document.getElementById('unchecked-count')



function newTodo() {
    const text= document.getElementById('input').value
    const todo = {
    task:text,
    check: false,
    id: Date.now(),
    }

    todoItems.push(todo)
    console.log(todo.id)
    displayToDo(todo.task,todo.id)
    
}

function displayToDo(toDo,id){

    const Line = status ? LINE_THROUGH : ""
    const display=`<li class="todo-container"><input type="checkbox" class="todo-checkbox" id="check-${id}" job="complete"><label class = "todo-text${Line}" >${toDo}</label><button id="button-${id}" class="todo-delete" job="delete"> delete </button> </li>`

    list.insertAdjacentHTML("beforeend",display)
    updateCount()

    
}

function updateCount(){
  count+=1
  unchecked+=1
  document.getElementById("item-count").innerHTML = count
  document.getElementById("unchecked-count").innerHTML = unchecked
}

list.addEventListener("click", function(event){
  const element = event.target
  const elementJob = element.attributes.job.value
      console.log(element.parentNode)

  if(elementJob =="complete"){
    completeJob(element)
  }
  else if(elementJob=="undo"){
    undoJob(element)
  }
  else if(elementJob=="delete"){
    deleteElement(element)
  }
});

  function completeJob(element){
    unchecked-=1
    element.attributes.job.value="undo"
    element.parentNode.querySelector(".todo-text").classList.toggle(LINE_THROUGH)
    document.getElementById("item-count").innerHTML = count
    document.getElementById("unchecked-count").innerHTML = unchecked
  }

   function undoJob(element){
    unchecked+=1
    element.attributes.job.value="complete"

    document.getElementById("item-count").innerHTML = count
    document.getElementById("unchecked-count").innerHTML = unchecked
  }

  function deleteElement(element){
    count-=1
    unchecked-=1
    document.getElementById("item-count").innerHTML = count
    document.getElementById("unchecked-count").innerHTML = unchecked
    element.parentNode.parentNode.removeChild(element.parentNode)
    
  }