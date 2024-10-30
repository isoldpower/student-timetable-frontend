import axios from "axios";
import {apiRoutes} from "@/app/routing";

export const fetchUser = async (token?: string): Promise<UserResponse | undefined> => {
    return await axios.get<UserResponse>(apiRoutes.auth.fetch, {
        method: 'GET',
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => response?.data)
        .catch(() => undefined);
}

export const requestLogin = async (email: string, password: string): Promise<LoginResponse | undefined> => {
    return await axios.post<LoginResponse>(apiRoutes.auth.login, {
        email,
        password
    }).then(response => response.data)
        .catch(() => undefined);
}

export const requestRefresh = async (refresh: string): Promise<RefreshResponse | undefined> => {
    return await axios.post<RefreshResponse>(apiRoutes.auth.refresh, {
        refresh
    }).then(response => response.data)
        .catch(() => undefined);
}

export const requestLogout = async (token: string): Promise<boolean> => {
    return await axios.post<void>(apiRoutes.auth.logout, {
        token
    }).then(() => true)
        .catch(() => false);
}

export const requestSignup = async (data: SignupRequest): Promise<SignupResponse | undefined> => {
    return await axios.post<SignupResponse>(apiRoutes.auth.signup, data)
        .then((response) => response.data)
        .catch(() => undefined);
}