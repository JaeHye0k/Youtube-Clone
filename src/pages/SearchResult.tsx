// src/components/SearchResult/SearchResult.tsx

import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Video from "../components/searchPage/Video";
import { VideoPreview } from "../types/searchResult.type";

const sampleVideos: VideoPreview[] = [
    {
        id: "1",
        title: "test1",
        viewCount: 1334132,
        channel: "Sample Channel",
        description: "This is a test video description.",
        uploadAt: new Date(),
        tag: ["sample", "test"],
        type: "video",
        thumbnailImageUrl: "http://example.com/thumbnail.jpg",
        videoUrl: "http://example.com/video.mp4"
    },
    {
        id: "2",
        title: "test2",
        viewCount: 1334132,
        channel: "Sample Channel",
        description: "This is a test video description.",
        uploadAt: new Date(),
        tag: ["sample", "test"],
        type: "video",
        thumbnailImageUrl: "http://example.com/thumbnail.jpg",
        videoUrl: "http://example.com/video.mp4"
    },
    {
        id: "3",
        title: "test3",
        viewCount: 1334132,
        channel: "Sample Channel",
        description: "This is a test video description.",
        uploadAt: new Date(),
        tag: ["sample", "test"],
        type: "video",
        thumbnailImageUrl: "http://example.com/thumbnail.jpg",
        videoUrl: "http://example.com/video.mp4"
    },
    {
        id: "4",
        title: "test4",
        viewCount: 1334132,
        channel: "Sample Channel",
        description: "This is a test video description.",
        uploadAt: new Date(),
        tag: ["sample", "test"],
        type: "video",
        thumbnailImageUrl: "http://example.com/thumbnail.jpg",
        videoUrl: "http://example.com/video.mp4"
    },
    {
        id: "5",
        title: "test5",
        viewCount: 1334132,
        channel: "Sample Channel",
        description: "This is a test video description.",
        uploadAt: new Date(),
        tag: ["sample", "test"],
        type: "video",
        thumbnailImageUrl: "http://example.com/thumbnail.jpg",
        videoUrl: "http://example.com/video.mp4"
    },
    {
        id: "6",
        title: "test6",
        viewCount: 1334132,
        channel: "Sample Channel",
        description: "This is a test video description.",
        uploadAt: new Date(),
        tag: ["sample", "test"],
        type: "video",
        thumbnailImageUrl: "http://example.com/thumbnail.jpg",
        videoUrl: "http://example.com/video.mp4"
    },
    
];

const SearchResult: React.FC = () => {
    const [searchParams] = useSearchParams();
    const fetchSearchQuery = searchParams.get("search_query") || ""; // 쿼리 매개변수 추출

    return (
        <>
            <SearchResultContainer>
                <ScrollContainer>
                    <VideoGrid>
                        {sampleVideos.map((video) => (
                            <Video key={video.id} video={video} />
                        ))}
                    </VideoGrid>
                </ScrollContainer>
            </SearchResultContainer>
        </>
    );
};

const SearchResultContainer = styled.div`
    position: fixed;
    top: 56px; /* 헤더 높이 */
    left: 72px; /* 사이드바 너비 */
    right: 0;
    bottom: 0;
    z-index: 1;
`;

const VideoGrid = styled.div`
    display: grid;
    gap: 10px;
    width: 100%;
    height: 300%;
    max-width: 1920px; /* 화면 너비 제한 */
`;

const ScrollContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 24px;
    box-sizing: border-box;

    /* 스크롤바 스타일링 */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #909090;
        border-radius: 4px;
    }
`;

export default SearchResult;
