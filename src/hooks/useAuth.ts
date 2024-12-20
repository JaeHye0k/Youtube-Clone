import { useAuthStore } from "@stores/authStore";
import { createJoin, createLogin } from "@apis/user.api";
import { useNavigate } from "react-router-dom";
import { JoinBody, LoginBody, LoginResponse } from "@@types/user.type";

export const useAuth = () => {
    const { isLoggedIn, storeLogin, storeLogout } = useAuthStore();
    const navigate = useNavigate();

    const userLogin = ({ email, password }: LoginBody) => {
        createLogin({ email, password }).then((res: LoginResponse) => {
            storeLogin(res.token);
            navigate("/");
        });
    };

    const userLogout = () => {
        window.alert("로그아웃 되었습니다.");
        storeLogout();
    };

    const userJoin = ({ email, name, password, description = "" }: JoinBody) => {
        createJoin({ email, name, password, description }).then(() => {
            window.alert("회원가입에 성공했습니다.");
            userLogin({ email, password });
        });
    };

    return { isLoggedIn, userLogin, userLogout, userJoin };
};
