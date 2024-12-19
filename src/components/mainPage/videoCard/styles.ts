import { styled } from "styled-components";

export const Container = styled.div<{ size: string }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 1px;
    border-radius: 12px;
    transition: background-color 0.1s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const ThumbnailWrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 4px;
    background-color: #f8f8f8;
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const DurationOverlay = styled.div`
    position: absolute;
    bottom: 4px;
    right: 4px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 2px 4px;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 500;
`;

export const PreviewWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
`;

export const Info = styled.div`
    padding: 0 1px 2px 1px;
`;

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: #0f0f0f;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Channel = styled.span`
    font-size: 14px;
    color: #606060;
    display: block;
    margin: 4px 0;
    cursor: pointer;

    &:hover {
        color: #030303;
    }
`;
export const Stats = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    color: #606060;
    font-size: 14px;
`;

export const Views = styled.span`
    margin-right: 2px;
`;

export const Date = styled.span``;

export const ControlsContainer = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const ControlButton = styled.button`
    padding: 8px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.9);
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const PreviewOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity 0.2s;

    ${ThumbnailWrapper}:hover & {
        opacity: 1;
    }
`;

export const VideoTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
`;

export const TitleAndDropdown = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`;

export const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
`;