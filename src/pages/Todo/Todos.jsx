import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { todoApi } from '../../shared/api';
import Todo from '../../components/Todo';

const Todos = () => {
    const navigate = useNavigate();
    const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [isValid, setIsValid] = useState(false);

    const getTodos = async () => {
        try {
            const res = await todoApi.getTodos();
            setTodoList(res.data);
            console.log(res)
        } catch (err) {
            alert(err)
        }
        console.log(todoList)
    }

    useEffect(() => {
        getTodos();
    }, []);

    const addTodo = async (e) => {
        e.preventDefault()
        if (newTodo.length > 0) {
            try {
                const res = await todoApi.createTodo(newTodo);
                const addedTodo = res.data;
                setTodoList([...todoList, addedTodo]);
                alert('새로운 할일 등록완료!')
            } catch (err) {
                alert("등록에 실패하였습니다");
                console.log(err);
            }
            setNewTodo("");
        }
    }


    const updateTodo = async (id, todo, isCompleted) => {
        try {
            const res = await todoApi.updateTodo(id, todo, isCompleted);
            let newtodo = todoList.map((todo) => (todo.id === id ? res.data : todo));
            setTodoList(newtodo);
        } catch (err) {
            alert(err);
        }
    }

    const deleteTodo = async (id) => {
        const result = window.confirm('TODO를 삭제하시겠습니까?');
        if (result) {
            try {
                await todoApi.deleteTodo(id);
                setTodoList(todoList.filter((select) => select.id !== id));
                alert("삭제 완료!")
            } catch (err) {
                alert(err)
            }
        }
    }

    const Logout = (() => {
        localStorage.removeItem("accessToken");
        navigate('/')
    })

    return (
        <TodosDiv>
            <h1>투두 리스트</h1>
            <div className='createTodo'>
                <input
                    type="text"
                    placeholder='해야할 일을 적어주세요~'
                    value={newTodo}
                    onChange={(e) => {
                        setNewTodo(e.currentTarget.value);
                    }}
                    onKeyUp={(e) => {
                        e.currentTarget.value.length > 0
                            ? setIsValid(true)
                            : setIsValid(false);
                    }}
                />
                <button
                    disabled={!isValid}
                    onClick={addTodo}
                >추가하기</button>
            </div>
            {todoList.length > 0 &&
                <div className='todoList'>
                    {todoList.map((todo) => (
                        <Todo 
                            todo={todo}
                            deleteTodo={deleteTodo}
                            updateTodo={updateTodo}
                        />
                    ))}
                </div>
            }

            <button className='logoutBtn' onClick={Logout}>로그아웃</button>
        </TodosDiv>
    )

};
export default Todos;

const TodosDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 41vw;
    margin: 0 auto;
    .createTodo{
        flex-direction: row;
        input {
            margin-right: 0.5rem;
        }
    }
    .todoList{
        border: 0.2rem solid black ;
        border-radius: 1rem;
        overflow: hidden;
        margin: 3rem auto;
    }
`