import React from 'react'
import TodoList from './TodoList'
import Footer from './Footer'


function Content({todoList, todoFilter, filterSet, todosSet}) {
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <TodoList todos={todoList} todosSet={todosSet} />
            </section>
            <footer todoFilter={todoFilter} filterSet={filterSet} todos={todoList}/>

        </>
    )
}

export default Content
