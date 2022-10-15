import React, { useState } from 'react';
import styled from 'styled-components';

const Todo = ({ todo, deleteTodo, updateTodo }) => {
    const [editMode, setEditMode] = useState(false);
    const [newTodo, setNewTodo] = useState({ ...todo }.todo);
    const [newCheck, setNewCheck] = useState(todo.isCompleted)


    const changeTodo = async () => {
        if (newTodo !== "" && newTodo !== Todo.todo) {
            if (todo.isCompleted !== newCheck) {
                await updateTodo(todo.id, newTodo, newCheck);
                setEditMode(false);
            } else {
                await updateTodo(todo.id, newTodo, todo.isCompleted)
                setEditMode(false);
            }
        } else if (newTodo !== "" && newTodo === Todo.todo) {
            if (todo.isCompleted !== newCheck) {
                await updateTodo(todo.id, Todo.todo, newCheck)
                setEditMode(false);
            } else {
                alert("변경사항이 없습니다!")
            }
        }
    }


    return (
        <TodoDiv>
            {editMode ?
                <div>
                    <input type="checkbox" checked={newCheck} onChange={(e) => setNewCheck((prev) => (!prev))} />
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <div className='btnDiv'>
                        <button onClick={changeTodo} disabled={todo.isCompleted === newCheck && newTodo === Todo.todo}>완료</button>
                        <button onClick={() => (setEditMode(false))}>취소</button>
                    </div>

                </div>
                :
                <div>
                    {todo.isCompleted ? <p className='completeCheckbox'>완료</p> : <p className='notcompleteCheckbox'>미완</p>}
                    <p>{todo.todo}</p>
                    <div className='btnDiv'>
                        <button onClick={() => (setEditMode(true))}>수정</button>
                        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
                    </div>
                </div>
            }
        </TodoDiv>
    )
}


export default Todo;

const TodoDiv = styled.div`
    background-color: aliceblue;
    margin: 0 auto;
    width: 40vw;
   div{
    display: flex;
    flex-direction: row;
    .completeCheckbox{
        background-color: skyblue;
        border-radius: 0.3rem;
    }
    .notcompleteCheckbox{
        border-radius: 0.3rem;
        background-color: #EF96A7;
    }
    p{
        margin-left: 1rem;
    }
    input{
        margin-left: 1rem;
    }
    .btnDiv{
        position: absolute;
        right: 31rem;
        
    }
   }
`