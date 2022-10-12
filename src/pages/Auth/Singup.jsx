import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { userApi } from '../../shared/api';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setisValid] = useState(false);

    const validation = (() => {
        if (email.includes('@') && password.length >= 8) {
            setisValid(true);
        } else {
            setisValid(false);
        }
    });

    useEffect(()=> {
        validation();
    }, [email, password])

    const onSignSubmit =  async(e) => {
        e.preventDefault();
        try{
            await userApi.signup(email, password);
            navigate('/')
        }catch (err) {
            console.log(err)
            alert("회원가입에 실패했습니다.")
        }
    }

    return (
        <SignupDiv>
            <p>회원가입</p>
            <form>
                <input type="text" placeholder='이메일 형식으로 입력해주세요' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='비밀번호는 8자리 이상입니다' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className='BtnDiv'>
                    <button disabled={!isValid} onClick={onSignSubmit}>회원가입</button>
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
   form{
            display: flex;
            flex-direction: column;
        }
    .BtnDiv{
        flex-direction: row;
        margin-top: 1rem;
    }
`