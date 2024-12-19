//비디오 정보 타입
export interface Video{
    id: string;
    title: string;
    channel:string;
    thumbnailUrl: string;
    previewUrl?: string;
    viewCount: number;
    createdAt: string; 
    duration: string;
    channelId?: string;
}

// 채널 정보 타입
export interface channel {
    id: string;
    name: string;
    profileImageUrl: string;
    subscriberCount: string;
    videoCount: string;
    customUrl?: string;
    totalView?: number;
    joinDate?: string;
    country?: string;
    description?: string;
    email?: string;
}

export interface PaginationMeta {
    currentPage: number;
    totalPage: number;
    hasNextPage: boolean;
}

// API 응답 타입
export interface VideoListResponse {
    success: boolean; 
    data?: Video[];  
    meta?: PaginationMeta;
    error?: string;   
}