import styled from 'styled-components';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { PiShareFat } from 'react-icons/pi';
import { LuDownload } from 'react-icons/lu';
import { BsThreeDots } from 'react-icons/bs';
import { formatDate, formatNumber } from '../../utils/format';

interface VideoInfoProps {
    video: {
        publishedAt: any;
        title: string;
        channelTitle: string;
        viewCount: number;
        tags?: string[];
        description?: string;
    };
}

const VideoInfo = ({ video }: VideoInfoProps) => {
    return (
        <Container>
            <Title>{video.title}</Title>
            <MetaInfo>
                <ViewCount>조회수 {formatNumber(video.viewCount)}회</ViewCount>
                <UploadDate>{formatDate(video.publishedAt)}</UploadDate>
            </MetaInfo>
            <ChannelRow>
                <ChannelInfo>
                    <ChannelAvatar />
                    <ChannelMeta>
                        <ChannelName>{video.channelTitle}</ChannelName>
                        <SubscriberCount>구독자 123만명</SubscriberCount>
                    </ChannelMeta>
                    <SubscribeButton>구독</SubscribeButton>
                </ChannelInfo>
                <ButtonRow>
                    <LikeGroup>
                        <Button>
                            <AiOutlineLike size={20} />
                            <span>2.3만</span>
                        </Button>
                        <Divider />
                        <Button>
                            <AiOutlineDislike size={20} />
                        </Button>
                    </LikeGroup>
                    <Button>
                        <PiShareFat size={20} />
                        <span>공유</span>
                    </Button>
                    <Button>
                        <LuDownload size={20} />
                        <span>오프라인 저장</span>
                    </Button>
                    <Button>
                        <BsThreeDots size={20} />
                    </Button>
                </ButtonRow>
            </ChannelRow>
            <DescriptionBox>{video.description}</DescriptionBox>
        </Container>
    );
};

const Container = styled.div`
    width: 854px;
    padding: 0;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    margin: 12px 0;
    color: #0f0f0f;
    width: 100%;
`;

const MetaInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #606060;
    font-size: 14px;
    margin-bottom: 12px;
`;

const ViewCount = styled.span`
    &:after {
        content: '•';
        margin: 0 4px;
    }
`;

const UploadDate = styled.span``;

const ChannelRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin: 12px 0;
    padding: 12px 0;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
`;

const ChannelInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const ChannelMeta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
`;

const LikeGroup = styled.div`
    display: flex;
    align-items: stretch;
    background: #f2f2f2;
    border-radius: 20px;
    overflow: hidden;
    height: 36px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 36px;
    padding: 0 16px;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    background: #f2f2f2;
    cursor: pointer;

    &:hover {
        background: #e5e5e5;
    }
`;

const ChannelAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e5e5e5;
`;

const ChannelName = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: #0f0f0f;
`;

const SubscriberCount = styled.div`
    font-size: 12px;
    color: #606060;
`;

const SubscribeButton = styled.button`
    padding: 8px 16px;
    border-radius: 18px;
    border: none;
    background: ${({ theme }) => theme.colors.red};
    color: white;
    font-weight: 500;
    cursor: pointer;
    
    &:hover {
        background: ${({ theme }) => theme.colors.redDark};
    }
`;

const Divider = styled.div`
    width: 1px;
    height: 20px;
    background: #ccc;
    margin: 0 8px;
`;

const DescriptionBox = styled.div`
    width: 100%;
    background: #f2f2f2;
    border-radius: 12px;
    padding: 12px;
    margin-top: 12px;
`;

export default VideoInfo; 