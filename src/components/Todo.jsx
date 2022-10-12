import React, { useState } from 'react';
import styled from 'styled-components';
import { todoApi } from '../shared/api';

const Todo = ({todo, deleteTodo, updateTodo}) => {
    const [editMode, setEditMode] = useState(false);
    const [newTodo, setNewTodo] = useState({ ...todo}.todo);
    const [newCheck, setNewCheck] = useState(todo.isCompleted)

    //FIXME: 
    //FIXME: 업데이트 바꾸기


    return (
        <TodoDiv>
            {editMode ?
                <div>
                    <input type="checkbox" />
                     <input 
                        type="text"
                        
                        />
                    <div className='btnDiv'>
                        <button onClick={updateTodo}>완료</button>
                        <button onClick={()=>(setEditMode(false))}>취소</button>
                    </div>

                </div>
                :
                <div>
                    {todo.isCompleted ?<p>완료</p> : <p>아직</p>}                   
                    <p>{todo.todo}</p>
                    <div className='btnDiv'>
                        <button onClick={()=>(setEditMode(true))}>수정</button>
                        <button onClick={deleteTodo}>삭제</button>
                    </div>
                </div>
            }
        </TodoDiv>
    )
}


export default Todo;

const TodoDiv = styled.div`
    background-color: aliceblue;
    margin: 0.5rem 0;
   div{
    display: flex;
    flex-direction: row;
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