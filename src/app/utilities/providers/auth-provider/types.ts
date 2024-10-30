interface UserResponse {
    pk: number;
    email: string;
    first_name: string;
    last_name: string;
}

interface AuthResponse {
    access: string;
    refresh: string;
    user: UserResponse;
}


interface SignupRequest {
    email: string;
    password1: string;
    password2: string;
    first_name: string;
    last_name: string;
}

interface SignupResponse extends AuthResponse {
}

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse extends AuthResponse {
}

interface RefreshRequest {
    refresh: string;
}

interface RefreshResponse {
    access: string;
    access_expiration: string;
}

interface TokenResponse {
    access_token: string;
    refresh_token: string;
}