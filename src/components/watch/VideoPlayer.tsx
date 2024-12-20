import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import VideoControls from "./VideoControls";

interface VideoPlayerProps {
    videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(100);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        videoRef.current?.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        videoRef.current?.pause();
        setIsPlaying(false);
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (time: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
        }
    };

    const handleVolumeChange = (newVolume: number) => {
        if (videoRef.current) {
            videoRef.current.volume = newVolume / 100;
            setVolume(newVolume);
        }
    };

    const handleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleFullScreen = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    useEffect(() => {
        return () => {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        };
    }, []);

    return (
        <VideoContainer>
            <VideoWrapper>
                <video
                    ref={videoRef}
                    src={videoUrl}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    playsInline
                />
                <VideoControls
                    currentTime={currentTime}
                    duration={duration}
                    isPlaying={isPlaying}
                    isMuted={isMuted}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onSeek={handleSeek}
                    onVolumeChange={handleVolumeChange}
                    onMute={handleMute}
                    onFullScreen={handleFullScreen}
                    volume={volume}
                    playbackSpeed={1}
                    quality="auto"
                    isAutoplayEnabled={false}
                    hasSubtitles={false}
                    subtitlesEnabled={false}
                    onPlaybackSpeedChange={function (speed: number): void {
                        if (videoRef.current) {
                            videoRef.current.playbackRate = speed;
                        }
                    }}
                    onQualityChange={function (quality: string): void {
                        console.log(`Quality changed to: ${quality}`);
                        // 실제 품질 변경 로직은 추후 구현
                    }}
                    onAutoplayToggle={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    onSubtitlesToggle={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    onMiniPlayerMode={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    onCastClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </VideoWrapper>
        </VideoContainer>
    );
};

const VideoContainer = styled.div`
    position: relative;
    width: 854px;
    background: #000;
    aspect-ratio: 16/9;
    border-radius: 12px;
    overflow: hidden;

    @media (max-width: 856px) {
        width: 640px;
    }

    @media (max-width: 656px) {
        width: 426px;
    }
`;

const VideoWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    video {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export default VideoPlayer;
