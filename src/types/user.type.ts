export interface LoginResponse {
    token: string;
}

export interface UserInfoResponse {
    channelId: string;
    email: string;
    name: string;
    profileLocation: string;
}

export interface SubscriptionResponse {
    name: string;
    channelId: string;
    profileLocation: string;
}

export interface JoinBody {
    email: string;
    password: string;
    name: string;
    description?: string;
}

export interface LoginBody {
    email: string;
    password: string;
}
