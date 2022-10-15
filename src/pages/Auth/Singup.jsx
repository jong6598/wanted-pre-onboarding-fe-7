import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../../shared/api';

const Signup = () => {
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

  
    const onSignUpSubmit =  async(e) => {
        e.preventDefault();
        if (!validateValue()) return;
        try{
            await userApi.signUp(emailRef.current.value, passwordRef.current.value);
            alert("회원가입 완료!")
            navigate('/')
        }catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    return (
        <SignupDiv>
            <p>회원가입</p>
            <form>
                <input type="text" placeholder='이메일 형식으로 입력해주세요' ref={emailRef} onChange={validateValue}/>
                <input type="password" placeholder='비밀번호는 8자리 이상입니다' ref={passwordRef} onChange={validateValue}/>
                <div className='BtnDiv'>
                    <button disabled={!isValid} onClick={onSignUpSubmit}>회원가입</button>
                    <button onClick={() => {
                        navigate(`/`)
                    }}>취소하기</button>
                </div>
            </form>
        </SignupDiv>
    )
};
export default Signup;

const SignupDiv = styled.div`
    margin: 0 auto;
    width: 40vw;
   form{
            display: flex;
            flex-direction: column;
        }
    .BtnDiv{
        flex-direction: row;
        margin-top: 1rem;
    }
`