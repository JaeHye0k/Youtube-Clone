import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useAuth } from "@hooks/useAuth";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { userLogin } = useAuth();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        if (!email || !password) return;
        userLogin({ email, password });
    };

    const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    if (isLoggedIn) {
        navigate("/");
        return;
    }

    return (
        <LoginPageStyle>
            <LoginStyle>
                <h1>로그인</h1>
                <form onSubmit={handleLogin} id="login-form">
                    <input
                        type="email"
                        placeholder="이메일"
                        value={email}
                        onChange={handleEmailInput}
                        required
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={handlePasswordInput}
                        required
                    />
                </form>
                <div className="button-container">
                    <button form="login-form">로그인</button>
                </div>
                <JoinLink>
                    <Link to="/join">아직 계정이 없으신가요?</Link>
                </JoinLink>
            </LoginStyle>
        </LoginPageStyle>
    );
};

export const LoginPageStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background: #f0f4f9;
`;

export const LoginStyle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        input {
            line-height: 30px;
            font-size: 15px;
            padding: 5px 12px;
            outline: none;
            border: 1px solid #808080;
            border-radius: 5px;
            &:hover {
                border: 1px solid #000;
            }
        }
    }

    .button-container {
        button {
            border: none;
            outline: none;
            width: 100px;
            height: 40px;
            border-radius: 20px;
            margin-top: 20px;
            padding: 10px 12px;
            background: #0b57d0;
            color: #fff;
            font-size: 15px;
            cursor: pointer;

            &:hover {
                background: #0241a5;
            }
        }
    }
`;

const JoinLink = styled.div`
    margin-top: 20px;
    a {
        font-size: 13px;
        text-decoration: none;
        color: rgb(0, 0, 0, 0.5);

        &:hover {
            color: rgb(0, 0, 0, 0.7);
            text-decoration: underline;
        }
    }
`;

export default LoginPage;
