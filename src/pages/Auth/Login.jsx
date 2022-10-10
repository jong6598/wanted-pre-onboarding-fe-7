import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const onSubmit = () => {

    }

    return (
        <LoginDiv>
            <input type="text" placeholder='이메일을 입력해주세요'/>
            <input type="text" placeholder='비밀번호를 입력해주세요'/>
            <div className='BtnDiv'>
                <button onClick={onSubmit}>로그인</button>
                <button onClick={()=> {
                    navigate(`/signup`)
                }}>회원가입</button>
            </div>
        </LoginDiv>
    )
   
};
export default Login;

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 23rem;
    .BtnDiv{
        flex-direction: row;
    }
`
