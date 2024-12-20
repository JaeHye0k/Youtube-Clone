import { LoginPageStyle as JoinPageStyle } from "./LoginPage";
import { LoginStyle as JoinStyle } from "./LoginPage";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useAuth } from "@hooks/useAuth";

const JoinPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [isNextPage, setIsNextPage] = useState(false);
    const [channelName, setChannelName] = useState("");
    const [channelDescription, setChannelDescription] = useState("");
    const channelNameRef = useRef<HTMLInputElement>(null);
    const { userJoin } = useAuth();

    const handleJoin = (e: FormEvent) => {
        e.preventDefault();
        if (isNextPage) {
            userJoin({
                email,
                password,
                name: channelName,
                description: channelDescription,
            });
        }
        if (!email.trim() || !password.trim() || !passwordCheck.trim()) return;
        if (password === passwordCheck) {
            setIsNextPage(true);
        }
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { title, value } = e.target;
        switch (title) {
            case "채널명":
                return setChannelName(value);
            case "채널 설명":
                return setChannelDescription(value);
            case "이메일":
                return setEmail(value);
            case "비밀번호":
                return setPassword(value);
            case "비밀번호 재확인":
                return setPasswordCheck(value);
        }
    };

    useEffect(() => {
        if (isNextPage) {
            channelNameRef.current?.focus();
        }
    }, [isNextPage]);

    return (
        <JoinPageStyle>
            <JoinStyle>
                <h1>회원가입</h1>
                <form onSubmit={handleJoin} id="join-form">
                    {isNextPage ? (
                        <>
                            <input
                                type="text"
                                placeholder="채널명"
                                title="채널명"
                                value={channelName}
                                onChange={handleInput}
                                required
                                ref={channelNameRef}
                            />
                            <input
                                type="text"
                                placeholder="채널 설명"
                                title="채널 설명"
                                value={channelDescription}
                                onChange={handleInput}
                            />
                        </>
                    ) : (
                        <>
                            <input
                                type="email"
                                placeholder="이메일"
                                title="이메일"
                                value={email}
                                onChange={handleInput}
                                required
                            />
                            <input
                                type="password"
                                placeholder="비밀번호"
                                title="비밀번호"
                                value={password}
                                onChange={handleInput}
                                required
                            />
                            <input
                                type="password"
                                placeholder="비밀번호 재확인"
                                title="비밀번호 재확인"
                                value={passwordCheck}
                                onChange={handleInput}
                                required
                            />
                        </>
                    )}
                </form>
                <div className="button-container">
                    <button form="join-form">{isNextPage ? "가입" : "다음"}</button>
                </div>
            </JoinStyle>
        </JoinPageStyle>
    );
};

export default JoinPage;
