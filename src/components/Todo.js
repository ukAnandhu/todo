import React from 'react'

function Todo({input, setInput, todo, setTodo}) {
    //const data = ['Buy a gaming laptop', 'Complete previos task', 'Create video for YouTube', 'Create a new portfolio site']
    const clickHandler = (e) => {
        e.preventDefault()
        if (input === '') return
        setTodo([  ...todo,
            input])
            setInput("")
        console.log(input);
    }
    
    const deleteHandler = (index) => {
          //const d = todo.splice(index, 1)
           setTodo((prevState) => {
               const data = prevState.splice(index, 1); 
               return prevState.filter(item !== data);
        
        })
           
         console.log(setTodo, 'p');
        //   setTodo(todo.filter(item !== d)
        //  console.log(todo, 'bla');

    }
    
    return (
        <div className="todo">
            <div className="todo-container">
                <header className="todo__header">Add New Todo</header>
                <div className="todo__input">
                    <input 
                    required
                    type="text" 
                    value={input}
                    className="todo__input--inner" 
                    placeholder="Add Your New Todo"
                    onChange={(e) => setInput(e.target.value)}
                     />
                    <button className="todo__button" onClick={clickHandler}>+</button>
                </div>
                 <div className="items">    
                {
                    todo.map((item, index) => ( <div className="items__content"  key={index}> 
                            <li className="items__list" >{item}{index}</li> 
                            <button  className="items__button" onClick={() => deleteHandler(index)}>del</button> 
                      </div>))
                }
               
                </div>
               
                <div className="todo__footer">
                    <p className="todo__footer--text">you have {todo.length} pending states</p>
                    <button className="todo__clear" onClick={() => {setTodo(todo.filter((el) => el.id === todo.id))}}>Clear All</button>
                </div>    
            </div>
        </div>
    )    
}
export default Todo
