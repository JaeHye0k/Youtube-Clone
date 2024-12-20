import { styled } from "styled-components";
import HeaderStart from "../header/HeaderStart";
import { useAuth } from "@hooks/useAuth";
import { ReactComponent as Home } from "@assets/sidebar/home.svg";
import { ReactComponent as Shorts } from "@assets/sidebar/shorts.svg";
import { ReactComponent as Subscription } from "@assets/sidebar/subscription.svg";
import { ReactComponent as YoutubeMusic } from "@assets/sidebar/youtubeMusic.svg";
import { ReactComponent as History } from "@assets/sidebar/history.svg";
import { ReactComponent as Download } from "@assets/sidebar/download.svg";
import { ReactComponent as Playlist } from "@assets/sidebar/playlist.svg";
import { ReactComponent as Video } from "@assets/sidebar/video.svg";
import { ReactComponent as LaterVideo } from "@assets/sidebar/laterVideo.svg";
import { ReactComponent as Like } from "@assets/sidebar/like.svg";
import { ReactComponent as GreaterThan } from "@assets/sidebar/greaterthan.svg";
import { ReactComponent as Hot } from "@assets/sidebar/hot.svg";
import { ReactComponent as Shopping } from "@assets/sidebar/shopping.svg";
import { ReactComponent as Music } from "@assets/sidebar/music.svg";
import { ReactComponent as Movie } from "@assets/sidebar/movie.svg";
import { ReactComponent as Live } from "@assets/sidebar/live.svg";
import { ReactComponent as Game } from "@assets/sidebar/game.svg";
import { ReactComponent as Sports } from "@assets/sidebar/sports.svg";
import { ReactComponent as Course } from "@assets/sidebar/course.svg";
import { ReactComponent as Podcast } from "@assets/sidebar/podcast.svg";
import { ReactComponent as YoutubeStudio } from "@assets/sidebar/youtubeStudio.svg";
import { ReactComponent as YoutubeMusicColor } from "@assets/sidebar/youtubeMusicColor.svg";
import { ReactComponent as YoutubeKids } from "@assets/sidebar/youtubeKids.svg";
import { ReactComponent as Config } from "@assets/sidebar/config.svg";
import { ReactComponent as Report } from "@assets/sidebar/report.svg";
import { ReactComponent as Service } from "@assets/sidebar/service.svg";
import { ReactComponent as Suggest } from "@assets/sidebar/suggest.svg";
import { ReactComponent as ArrowDown } from "@assets/sidebar/arrowDown.svg";
import { ReactComponent as SubscriptionList } from "@assets/sidebar/subscriptionList.svg";
import { ReactComponent as UserCircle } from "@assets/userCircle.svg";
import SidebarSection from "./SidebarSection";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarSectionTitle from "./SidebarSectionTitle";
import { Link } from "react-router-dom";
import { useSubscription } from "@hooks/useSubscription";
import { useState } from "react";
import SidebarFooter from "./SidebarFooter";
import LoginButton from "@components/header/LoginButton";

const menus = [
    {
        title: "홈",
        href: "/",
        icon: <Home />,
        defaultShow: true,
    },
    {
        title: "Shorts",
        href: "/shorts/:shorts_id",
        icon: <Shorts />,
        defaultShow: true,
    },
    {
        title: "구독",
        href: "/feed/subscriptions",
        icon: <Subscription />,
        defaultShow: true,
    },
    {
        title: "YouTube Music",
        href: "https://music.youtube.com/",
        icon: <YoutubeMusic />,
        defaultShow: false,
    },
];

const myPage = [
    {
        title: "시청 기록",
        href: "/feed/history",
        icon: <History />,
        defaultShow: true,
    },
    {
        title: "재생목록",
        href: "/feed/playlists",
        icon: <Playlist />,
        defaultShow: false,
    },
    {
        title: "내 동영상",
        href: "/channel/videos/:channel_id", // 임의 경로
        icon: <Video />,
        defaultShow: false,
    },
    {
        title: "나중에 볼 동영상",
        href: "/playlists?list=WL",
        icon: <LaterVideo />,
        defaultShow: false,
    },
    {
        title: "좋아요 표시한 동영상",
        href: "/playlists?list=LL",
        icon: <Like />,
        defaultShow: false,
    },
    {
        title: "오프라인 저장 동영상",
        href: "/feed/downloads",
        icon: <Download />,
        defaultShow: false,
    },
];

// const subscription = [];

const explore = [
    {
        title: "인기 급상승",
        href: "/feed/trending",
        icon: <Hot />,
    },
    {
        title: "쇼핑",
        href: "/channel/shopping",
        icon: <Shopping />,
    },
    {
        title: "음악",
        href: "/channel/music",
        icon: <Music />,
    },
    {
        title: "영화",
        href: "/feed/storefront",
        icon: <Movie />,
    },
    {
        title: "실시간",
        href: "/channel/live",
        icon: <Live />,
    },
    {
        title: "게임",
        href: "/gaming",
        icon: <Game />,
    },
    {
        title: "스포츠",
        href: "/channel/sports",
        icon: <Sports />,
    },
    {
        title: "학습 프로그램",
        href: "/feed/courses_destination",
        icon: <Course />,
    },
    {
        title: "팟캐스트",
        href: "/podcasts",
        icon: <Podcast />,
    },
];

const youtubeMore = [
    {
        title: "YouTube 스튜디오",
        href: "https://studio.youtube.com/",
        icon: <YoutubeStudio />,
    },
    {
        title: "YouTube Music",
        href: "https://music.youtube.com/",
        icon: <YoutubeMusicColor />,
    },
    {
        title: "YouTube Kids",
        href: "https://www.youtubekids.com/?source=youtube_web",
        icon: <YoutubeKids />,
    },
];

const etc = [
    {
        title: "설정",
        href: "/account",
        icon: <Config />,
    },
    {
        title: "신고 기록",
        href: "/reporthistory",
        icon: <Report />,
    },
    {
        title: "고객센터",
        href: "",
        icon: <Service />,
    },
    {
        title: "의견 보내기",
        href: "",
        icon: <Suggest />,
    },
];

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarOpen: React.FC<Props> = ({ ...props }) => {
    const { isLoggedIn } = useAuth();
    const { subscriptions, moreSubscriptions } = useSubscription();
    const [showMore, setShowMore] = useState(false);
    const filteredMenus = isLoggedIn ? menus : menus.filter((item) => item.defaultShow);
    const filteredMyPage = isLoggedIn ? myPage : myPage.filter((item) => item.defaultShow);

    return (
        <SidebarOpenStyle {...props}>
            <header>
                <HeaderStart isLoggedIn={isLoggedIn} />
            </header>
            <div className="content">
                <SidebarSection>
                    {filteredMenus.map((item, i) => (
                        <SidebarMenuItem aria-label={item.title} key={i}>
                            <Link to={item.href}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarSection>
                <SidebarSection>
                    {isLoggedIn ? (
                        <div className="my-page">
                            <Link to="/feed/you">
                                <div className="label">내 페이지</div>
                                <GreaterThan />
                            </Link>
                        </div>
                    ) : (
                        <SidebarMenuItem>
                            <Link to="/feed/you">
                                <UserCircle />
                                <span>내 페이지</span>
                            </Link>
                        </SidebarMenuItem>
                    )}
                    {filteredMyPage.map((item, i) => (
                        <SidebarMenuItem aria-label={item.title} key={i}>
                            <Link to={item.href}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarSection>

                {isLoggedIn ? (
                    <SidebarSection>
                        <SidebarSectionTitle>구독</SidebarSectionTitle>
                        {subscriptions.map((item, i) => (
                            <SidebarMenuItem aria-label={item.name} key={i}>
                                <Link to={`/${item.channelId}`}>
                                    <img src={item.profileLocation} alt={item.name} />
                                    <span>{item.name}</span>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                        {showMore &&
                            moreSubscriptions.map((item, i) => (
                                <SidebarMenuItem aria-label={item.name} key={i}>
                                    <Link to={`/${item.channelId}`}>
                                        <img src={item.profileLocation} alt={item.name} />
                                        <span>{item.name}</span>
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        {showMore && (
                            <SidebarMenuItem>
                                <Link to="/feed/channels">
                                    <SubscriptionList />
                                    <span>모든 구독</span>
                                </Link>
                            </SidebarMenuItem>
                        )}
                        <SidebarMenuItem onClick={() => setShowMore(!showMore)}>
                            <ArrowDown
                                style={{
                                    transform: showMore ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                            />
                            <span>더보기</span>
                        </SidebarMenuItem>
                    </SidebarSection>
                ) : (
                    <div className="login-section">
                        <p>
                            로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.
                        </p>
                        <LoginButton />
                    </div>
                )}

                <SidebarSection>
                    <SidebarSectionTitle>탐색</SidebarSectionTitle>
                    {explore.map((item, i) => (
                        <SidebarMenuItem aria-label={item.title} key={i}>
                            <Link to={item.href}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarSection>
                <SidebarSection>
                    <SidebarSectionTitle>YouTube 더보기</SidebarSectionTitle>
                    {youtubeMore.map((item, i) => (
                        <SidebarMenuItem aria-label={item.title} key={i}>
                            <Link to={item.href}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarSection>
                <SidebarSection>
                    {etc.map((item, i) => (
                        <SidebarMenuItem aria-label={item.title} key={i}>
                            <Link to={item.href}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarSection>
                <SidebarFooter />
            </div>
        </SidebarOpenStyle>
    );
};

const SidebarOpenStyle = styled.div`
    /* --scrollbar-width: 11px; */
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100vh;
    background-color: rgb(255, 255, 255);
    z-index: 4000;

    /* &:hover {
        margin-right: calc(-1 * var(--scrollbar-width));
    } */

    overflow-y: hidden;
    overflow-x: hidden;
    &:hover {
        scrollbar-width: thin;
        overflow-y: auto;
        scrollbar-color: #909090 transparent;
    }

    &:hover .content {
        margin-right: 0;
    }

    header {
        padding-left: 16px;
    }

    .content {
        flex: 1;
        margin-right: 11px;

        .my-page {
            border-radius: 10px;

            &:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }

            a {
                color: rgb(15, 15, 15);
                font-size: 16px;
                padding: 0 12px;
                display: flex;
                text-decoration: none;
                height: 40px;
                align-items: center;
                justify-content: flex-start;

                .label {
                    padding-right: 8px;
                }
            }
        }

        .login-section {
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            padding: 16px 21px 16px 32px;

            p {
                margin: 0;
                font-size: 1.4rem;
                line-height: 2rem;
                color: #0f0f0f;
            }

            button {
                margin-top: 12px;
                overflow: visible;
            }
        }
    }
`;

export default SidebarOpen;
