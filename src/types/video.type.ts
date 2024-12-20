//비디오 정보 타입
export interface Channel {
    id: string;
    title: string;
    thumbnail: string;
}

export interface Video {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    viewCount: number;
    publishedAt: string;
    channelId: string;
    channelTitle: string;
    channelThumbnail: string;
    // 추가되는 필드들
    duration: string;
    createdAt: string;
    channel: Channel;
    previewUrl?: string;
    likes?: number;
    dislikes?: number;
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

export interface VideoUpload {
    runningTime: string;
    postName: string;
    description?: string;
}

export interface PlayerState {
    isPlaying: boolean;
    isTheaterMode: boolean;
    isFullscreen: boolean;
    volume: number;
    isMuted: boolean;
    currentTime: number;
    duration: number;
}

// 비디오 API 응답 타입
export interface VideoResponse {
    items: Video[];
    nextPageToken?: string;
}

// VideoCard 컴포넌트용 타입
export interface VideoCardProps {
    video?: Video;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
}
