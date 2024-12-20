import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import VideoPlayer from "@components/watch/VideoPlayer";
import { useVideos } from "@hooks/useVideos";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { Video } from "@@types/video.type";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const { data, isLoading } = useVideos(videoId ? parseInt(videoId) : undefined);

    const currentVideo: Video | undefined = data?.pages[0]?.data?.[0];

    if (isLoading) return <div>로딩중...</div>;
    if (!currentVideo) return <div>비디오를 찾을 수 없습니다.</div>;

    return (
        <PageContainer>
            <MainColumn>
                <VideoSection>
                    <VideoPlayer videoUrl={currentVideo.videoUrl} />
                </VideoSection>
                <InfoSection>
                    <Title>{currentVideo.title}</Title>
                    <MetaSection>
                        <ChannelInfo>
                            <ChannelAvatar />
                            // ChannelName 컴포넌트 부분만 수정
                            <ChannelMeta>
                                <ChannelName>
                                    {typeof currentVideo.channel === "string"
                                        ? currentVideo.channel
                                        : "채널 정보 없음"}
                                </ChannelName>
                                <SubscriberCount>구독자 123만명</SubscriberCount>
                            </ChannelMeta>
                            <SubscribeButton>구독</SubscribeButton>
                        </ChannelInfo>
                        <ActionButtons>
                            <ButtonGroup>
                                <ActionButton>
                                    <AiOutlineLike size={20} />
                                    <span>2.3만</span>
                                </ActionButton>
                                <Divider />
                                <ActionButton>
                                    <AiOutlineDislike size={20} />
                                </ActionButton>
                            </ButtonGroup>
                            <ActionButton>
                                <PiShareFat size={20} />
                                <span>공유</span>
                            </ActionButton>
                            <ActionButton>
                                <LuDownload size={20} />
                                <span>오프라인 저장</span>
                            </ActionButton>
                            <ActionButton>
                                <BsThreeDots size={20} />
                            </ActionButton>
                        </ActionButtons>
                    </MetaSection>
                    <DescriptionCard>
                        <ViewCount>조회수 {currentVideo.viewCount}회</ViewCount>
                        <Description>{currentVideo.description || "설명 없음"}</Description>
                    </DescriptionCard>
                </InfoSection>
            </MainColumn>
            <SecondaryColumn>{/* 추천 동영상 목록 */}</SecondaryColumn>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 240px minmax(850px, 1fr) 426px;
    gap: 24px;
    padding: 24px;
    width: 100%;
    max-width: 1850px;
    margin: 0 auto;

    @media (max-width: 1200px) {
        grid-template-columns: 72px minmax(0, 1fr);
    }

    @media (max-width: 792px) {
        grid-template-columns: 1fr;
        padding: 0;
    }
`;

const MainColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const VideoSection = styled.div`
    width: 854px;
    margin-bottom: 24px;

    @media (max-width: 856px) {
        width: 640px;
    }

    @media (max-width: 656px) {
        width: 426px;
    }
`;

const InfoSection = styled.div`
    margin-bottom: 24px;
    max-width: 960px;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    margin: 0 0 12px 0;
    color: #0f0f0f;
`;

const MetaSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #e5e5e5;
`;

const ChannelInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const ChannelAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #e5e5e5;
`;

const ChannelMeta = styled.div`
    flex: 1;
`;

const ChannelName = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #0f0f0f;
`;

const SubscriberCount = styled.div`
    font-size: 12px;
    color: #606060;
`;

const SubscribeButton = styled.button`
    background: #0f0f0f;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: #272727;
    }
`;

const ActionButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    background: #f2f2f2;
    border-radius: 20px;
    margin-right: 8px;
`;

const ActionButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border: none;
    border-radius: 20px;
    background: #f2f2f2;
    color: #0f0f0f;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: #e5e5e5;
    }
`;

const Divider = styled.div`
    width: 1px;
    height: 24px;
    background: #ccc;
`;

const DescriptionCard = styled.div`
    margin-top: 12px;
    padding: 12px;
    background: #f2f2f2;
    border-radius: 12px;
`;

const ViewCount = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #0f0f0f;
    margin-bottom: 8px;
`;

const Description = styled.p`
    font-size: 14px;
    line-height: 20px;
    color: #0f0f0f;
    white-space: pre-wrap;
    margin: 0;
`;

const SecondaryColumn = styled.div`
    @media (max-width: 1200px) {
        display: none;
    }
`;

export default WatchPage;
