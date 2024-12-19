import React from 'react';
import styled from 'styled-components';
import { VideoPreview } from '../types/searchResult.type';

const Video: React.FC<VideoPreview> = ({ video }) => {
    return (
        <VideoContainer>
            <Thumbnail src={video.thumbnailImageUrl} alt={video.title} />
            <Details>
                <Title>{video.title}</Title>
                <ViewCount>조회수 {video.viewCount}회</ViewCount>
                {/* <UploadAt>{video.uploadAt} 전</UploadAt> */}
                <Channel>{video.channel}</Channel>
                <Description>{video.description}</Description>
                
            </Details>
        </VideoContainer>
    );
};

const VideoContainer = styled.div`
    position : relative;
    display: flex;
    flex-direction: row;
    align-items : flex-start;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    min-width : 428px;
s
`;

const Thumbnail = styled.img`
    width: 38%;
    background-color: transparent;
    object-fit: cover;
    visibility: inherit;
    display: inline-block;
    min-height: 80px;
    min-width: 200px;
    border-radius: 4px;      //경계표시-추후삭제
    border : 1px solid black; //추후삭제
    margin-right : 1.5rem;
    aspect-ratio: 16/9;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Roboto", "Arial", sans-serif;
    line-height: 2.6rem;
    font-weight: 400;
`;

const Title = styled.div`
    color: #0F0F0F;
    font-size: 1.8rem;
    margin: 0;
`;

const ViewCount = styled.span`
    color : #606060;
    font-size: 1.2rem;
    display: inline-block;
`

const UploadAt = styled.span`
    color : #606060;
    font-size: 1.2rem;
`

const Description = styled.span`
    color : #606060;
    font-size: 1.2rem;
    margin: 5px 0;
`;

const Channel = styled.span`
    color : #606060;
    font-size: 1.2rem;
}
`;

export default Video;
