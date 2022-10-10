import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate();


    return (
        <SignupDiv>
            <input type="text" placeholder='이메일'/>
            <input type="text" placeholder='비밀번호'/>
            <div className='BtnDiv'>
                <button>회원가입</button>
                <button onClick={()=> {
                    navigate(`/`)
                }}>취소하기</button>
            </div>
        </SignupDiv>
    )
   
};
export default Signup;

const SignupDiv = styled.div`
    display: flex;
    flex-direction: column;
    .BtnDiv{
        flex-direction: row;
    }
`