import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../../shared/api';


const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isValid, setIsValid] = useState(false);

    const validateValue = (() => {
        if (emailRef.current.value.includes('@') && passwordRef.current.value.length >= 8) {
            setIsValid(true);
            return true;
        } 
        setIsValid(false)
        return false
    });

  
    const onLoginSubmit =  async(e) => {
        e.preventDefault();
        if (!validateValue()) return;
        try{
            const response = await userApi.signIn(emailRef.current.value, passwordRef.current.value);
            localStorage.setItem("accessToken", response.data.access_token);
            navigate('/todo');
        }catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }
    

    return (
        <LoginDiv>
            <p>로그인</p>
            <form >
                <input type="text" placeholder='이메일을 입력해주세요' ref={emailRef} onChange={validateValue}/>
                <input type="password" placeholder='비밀번호를 입력해주세요' ref={passwordRef} onChange={validateValue}/>
                <div className='BtnDiv'>
                    <button disabled={!isValid} onClick={onLoginSubmit}>로그인</button>
                    <button onClick={() => {
                        navigate(`/signup`)
                    }}>회원가입</button>
                </div>
            </form>
        </LoginDiv>
    )

};
export default Login;

const LoginDiv = styled.div`
    form{
            display: flex;
            flex-direction: column;
        }
    .BtnDiv{
        flex-direction: row;
        margin-top: 1rem;
    }
    
`
