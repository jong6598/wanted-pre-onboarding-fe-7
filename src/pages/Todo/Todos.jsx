import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { todoApi } from '../../shared/api';

const Todos = () => {
    const navigate = useNavigate();
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [isValid, setIsValid] = useState(false);

    const getTodos = async () => {
        try {
            const res = await todoApi.getTodos();
            setTodoList(res.data);
        } catch (err) {
            alert(err)
        }
        
    }

    useEffect(() => {
        getTodos();
    }, []);

    const addTodo = async (e) => {
        e.preventDefault()
        if (todo.length>0) {
            try {
                const res = await todoApi.createTodo(todo);
                const newTodo = res.data;
                setTodoList([...todoList, newTodo]);
                alert('새로운 할일 등록완료!')
                setTodo("");
            } catch (err) {
                alert("등록에 실패하였습니다");
                console.log(err);
            }
        }
    }

    const Logout = (() => {
        localStorage.removeItem("accessToken");
        navigate('/')
    })

    return (
        <TodoDiv>
            <h1>투두 리스트</h1>
            <div className='createTodo'>
                <input
                    type="text"
                    placeholder='이건 못 참지~'
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.currentTarget.value);
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
            <div className='todoList'>
                <p>여기는 투두 맵돌리기</p>
            </div>
            <button className='logoutBtn' onClick={Logout}>로그아웃</button>
        </TodoDiv>
    )

};
export default Todos;

const TodoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    .createTodo{
        flex-direction: row;
        input {
            margin-right: 0.5rem;
        }
    }
    .logoutBtn{
        margin: 1rem 20rem;
    }
    .todoList{
        margin: 1rem;
        border: 0.4rem solid black ;
    }
`