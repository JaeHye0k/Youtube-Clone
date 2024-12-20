import { create } from 'zustand';
import { Video, PlayerState } from '@@types/video.type';

interface VideoStore {
    currentVideo: Video | null;
    playerState: PlayerState;
    isLoading: boolean;
    error: string | null;

    setCurrentVideo: (video: Video) => void;
    setPlayerState: (state: Partial<PlayerState>) => void;
    togglePlay: () => void;
    toggleTheaterMode: () => void;
    toggleMute: () => void;
    setVolume: (volume: number) => void;
    setError: (error: string | null) => void;
    setLoading: (loading: boolean) => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
    currentVideo: null,
    playerState: {
        isPlaying: false,
        isTheaterMode: false,
        isFullscreen: false,
        volume: 1,
        isMuted: false,
        currentTime: 0,
        duration: 0,
    },
    isLoading: false,
    error: null,

    setCurrentVideo: (video) => set({ currentVideo: video }),
    setPlayerState: (state) => set((prev) => ({ 
        playerState: { ...prev.playerState, ...state } 
    })),
    togglePlay: () => set((prev) => ({ 
        playerState: { 
            ...prev.playerState, 
            isPlaying: !prev.playerState.isPlaying 
        } 
    })),
    toggleTheaterMode: () => set((prev) => ({ 
        playerState: { 
            ...prev.playerState, 
            isTheaterMode: !prev.playerState.isTheaterMode 
        } 
    })),
    toggleMute: () => set((prev) => ({
        playerState: {
            ...prev.playerState,
            isMuted: !prev.playerState.isMuted,
        }
    })),
    setVolume: (volume) => set((prev) => ({
        playerState: {
            ...prev.playerState,
            volume,
            isMuted: volume === 0,
        }
    })),
    setError: (error) => set({ error }),
    setLoading: (loading) => set({ isLoading: loading }),
}));
