import styled from 'styled-components';
import { IoPlaySharp, IoPause, IoPlaySkipForward } from 'react-icons/io5';
import { IoMdVolumeHigh, IoMdVolumeMute } from 'react-icons/io';
import { BiCog } from 'react-icons/bi';
import { RiPlayList2Fill } from 'react-icons/ri';
import { TbRectangle } from 'react-icons/tb';
import { MdFullscreen, MdClosedCaption, MdCast } from 'react-icons/md';
import { FaRegKeyboard } from 'react-icons/fa';
import { useState } from 'react';

interface VideoControlsProps {
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    isMuted: boolean;
    volume: number;
    playbackSpeed: number;
    quality: string;
    isAutoplayEnabled: boolean;
    hasSubtitles: boolean;
    subtitlesEnabled: boolean;
    onPlay: () => void;
    onPause: () => void;
    onSeek: (time: number) => void;
    onVolumeChange: (volume: number) => void;
    onMute: () => void;
    onPlaybackSpeedChange: (speed: number) => void;
    onQualityChange: (quality: string) => void;
    onAutoplayToggle: () => void;
    onSubtitlesToggle: () => void;
    onFullScreen: () => void;
    onMiniPlayerMode: () => void;
    onCastClick: () => void;
}

const SubtitlesMenu = styled.div`
    position: absolute;
    bottom: 40px;
    right: 10px;
    background: rgba(28, 28, 28, 0.9);
    border-radius: 4px;
    padding: 8px 0;
    min-width: 200px;
    color: white;
`;

const SettingsMenu = styled.div`
    position: absolute;
    bottom: 40px;
    right: 10px;
    background: rgba(28, 28, 28, 0.9);
    border-radius: 4px;
    padding: 8px 0;
    min-width: 250px;
    color: white;
    z-index: 100;
`;

const SettingsItem = styled.div`
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    label {
        color: white;
        font-size: 14px;
    }

    select {
        background: transparent;
        color: white;
        border: none;
        padding: 4px 8px;
        cursor: pointer;
        
        &:focus {
            outline: none;
        }

        option {
            background: rgba(28, 28, 28, 0.9);
            color: white;
        }
    }

    input[type="checkbox"] {
        width: 16px;
        height: 16px;
        cursor: pointer;
    }
`;

const VideoControls = ({ 
    currentTime, 
    duration, 
    isPlaying, 
    isMuted, 
    volume,
    playbackSpeed,
    quality,
    isAutoplayEnabled,

    onPlay,
    onPause,
    onSeek,
    onVolumeChange,
    onMute,
    onPlaybackSpeedChange,
    onQualityChange,
    onAutoplayToggle,

    onFullScreen,
    onMiniPlayerMode,
    onCastClick,
}: VideoControlsProps) => {
    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        onSeek(pos * duration);
    };

    const [showSettings, setShowSettings] = useState(false);
    const [showSubtitles, setShowSubtitles] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    return (
        <ControlsContainer 
            $isHovering={isHovering}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <PreviewBar>
                <PreviewThumbnail />
                <PreviewTime>{formatTime(currentTime)}</PreviewTime>
            </PreviewBar>
            <ProgressBar onClick={handleSeek}>
                <Progress 
                    value={duration ? (currentTime / duration) * 100 : 0} 
                />
                <Chapters>
                    {/* 챕터 마커들 */}
                </Chapters>
            </ProgressBar>
            <Controls>
                <LeftControls>
                    <ControlButton onClick={isPlaying ? onPause : onPlay}>
                        {isPlaying ? <IoPause size={20} /> : <IoPlaySharp size={20} />}
                    </ControlButton>
                    <ControlButton>
                        <IoPlaySkipForward size={20} />
                    </ControlButton>
                    <VolumeControl>
                        <ControlButton onClick={onMute}>
                            {isMuted ? <IoMdVolumeMute size={20} /> : <IoMdVolumeHigh size={20} />}
                        </ControlButton>
                        <VolumeSlider 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={volume}
                            onChange={(e) => onVolumeChange(Number(e.target.value))}
                        />
                    </VolumeControl>
                    <TimeDisplay>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </TimeDisplay>
                </LeftControls>
                <RightControls>
                    <ControlButton onClick={() => setShowSubtitles(!showSubtitles)}>
                        <MdClosedCaption size={20} />
                    </ControlButton>
                    <ControlButton onClick={onCastClick}>
                        <MdCast size={20} />
                    </ControlButton>
                    <ControlButton onClick={() => setShowSettings(!showSettings)}>
                        <BiCog size={20} />
                    </ControlButton>
                    <ControlButton>
                        <RiPlayList2Fill size={20} />
                    </ControlButton>
                    <ControlButton onClick={onMiniPlayerMode}>
                        <TbRectangle size={20} />
                    </ControlButton>
                    <ControlButton onClick={onFullScreen}>
                        <MdFullscreen size={20} />
                    </ControlButton>
                </RightControls>
            </Controls>
            
            {showSettings && (
                <SettingsMenu>
                    <SettingsItem>
                        <span>재생 속도</span>
                        <select 
                            value={playbackSpeed} 
                            onChange={(e) => onPlaybackSpeedChange(Number(e.target.value))}
                            title="재생 속도 선택"
                        >
                            <option value="0.25">0.25x</option>
                            <option value="0.5">0.5x</option>
                            <option value="0.75">0.75x</option>
                            <option value="1">일반</option>
                            <option value="1.25">1.25x</option>
                            <option value="1.5">1.5x</option>
                            <option value="1.75">1.75x</option>
                            <option value="2">2x</option>
                        </select>
                    </SettingsItem>
                    <SettingsItem>
                        <span>화질</span>
                        <select 
                            value={quality} 
                            onChange={(e) => onQualityChange(e.target.value)}
                            title="화질 선택"
                        >
                            <option value="auto">자동</option>
                            <option value="1080p">1080p</option>
                            <option value="720p">720p</option>
                            <option value="480p">480p</option>
                            <option value="360p">360p</option>
                        </select>
                    </SettingsItem>
                    <SettingsItem>
                        <span>자동 재생</span>
                        <input 
                            type="checkbox" 
                            checked={isAutoplayEnabled}
                            onChange={onAutoplayToggle}
                            title="자동 재생 설정"
                        />
                    </SettingsItem>
                    <KeyboardShortcuts>
                        <FaRegKeyboard size={16} />
                        <span>키보드 단축키</span>
                    </KeyboardShortcuts>
                </SettingsMenu>
            )}
            
            {showSubtitles && (
                <SubtitlesMenu>
                    {/* 자막 설정 메뉴 */}
                </SubtitlesMenu>
            )}
        </ControlsContainer>
    );
};

const ControlsContainer = styled.div<{ $isHovering: boolean }>`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    padding: 0 12px;
    opacity: ${(props) => (props.$isHovering ? 1 : 0)};
    transition: opacity 0.2s ease-in-out;
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
`;

const LeftControls = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const RightControls = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ControlButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    position: relative;

    &:hover {
        height: 5px;
    }
`;

const Progress = styled.div<{ value: number }>`
    height: 100%;
    background: #ff0000;
    width: ${(props) => {
        const value = Number.isNaN(props.value) ? 0 : props.value;
        return `${value}%`;
    }};
`;

const VolumeControl = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const VolumeSlider = styled.input`
    width: 80px;
    height: 3px;
    -webkit-appearance: none;
    background: rgba(255, 255, 255, 0.3);

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 12px;
        height: 12px;
        background: white;
        border-radius: 50%;
        cursor: pointer;
    }
`;

const TimeDisplay = styled.div`
    color: white;
    font-size: 14px;
    margin-left: 8px;
`;

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const PreviewBar = styled.div`
    position: absolute;
    top: -80px;
    display: none;
    
    ${ProgressBar}:hover & {
        display: block;
    }
`;

const PreviewThumbnail = styled.div`
    width: 160px;
    height: 90px;
    background: #000;
`;

const PreviewTime = styled.div`
    text-align: center;
    color: white;
    font-size: 12px;
`;

const KeyboardShortcuts = styled(SettingsItem)`
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 8px;
    gap: 8px;
`;

const Chapters = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    pointer-events: none;
`;

export default VideoControls;