import { JoinBody, LoginBody } from "@@types/user.type";
import { httpClient } from "./http.api";

export const createLogin = async ({ email, password }: LoginBody) => {
    const response = await httpClient.post("/user/login", { email, password });
    return response.data;
};

export const fetchUserInfo = async () => {
    const response = await httpClient.get("/user");
    return response.data;
};

export const fetchSubInfo = async () => {
    const response = await httpClient.get("/user/sub");
    return response.data;
};

export const createJoin = async ({ email, password, name, description }: JoinBody) => {
    const response = await httpClient.post("/user/join", { email, password, name, description });
    return response.data;
};
