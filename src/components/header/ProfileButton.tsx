import Dropdown from "@components/common/Dropdown";
import { styled } from "styled-components";
import { useUser } from "@hooks/useUser";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoutIcon } from "@assets/header/logout.svg";
import { useAuth } from "@hooks/useAuth";

const ProfileButton = () => {
    const { user } = useUser();
    const { userLogout } = useAuth();
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handleLogout = () => {
        userLogout();
    };
    return (
        <ProfileButtonStyle>
            <Dropdown
                isOpen={isProfileDropdownOpen}
                setIsOpen={setIsProfileDropdownOpen}
                toggleButton={
                    <ToggleAvatarButton aria-label="계정 메뉴">
                        <img src={user.profileLocation} alt="아바타" />
                    </ToggleAvatarButton>
                }
            >
                <DropdownPannel>
                    <div className="account-menu">
                        <div>
                            <PannelAvatarButton aria-label="계정 메뉴">
                                <img src={user.profileLocation} alt="아바타" />
                            </PannelAvatarButton>
                        </div>
                        <div className="channel-label-wrapper">
                            <div className="name">{user.name}</div>
                            <div className="email">{user.email}</div>
                            <div className="link">
                                <Link to={user.channelId}>내 채널 보기</Link>
                            </div>
                        </div>
                    </div>
                    <MenuSection>
                        <MenuItem onClick={handleLogout}>
                            <LogoutIcon />
                            <div className="label">로그아웃</div>
                        </MenuItem>
                    </MenuSection>
                </DropdownPannel>
            </Dropdown>
        </ProfileButtonStyle>
    );
};

const ToggleAvatarButton = styled.div`
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin: 0 8px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
    }
`;

const PannelAvatarButton = styled(ToggleAvatarButton)`
    width: 40px;
    height: 40px;
    margin-right: 16px;
`;

const DropdownPannel = styled.div`
    border-radius: 12px;
    position: absolute;
    right: 0;
    background: #fff;
    width: 300px;
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);

    .account-menu {
        --padding: 16px;
        display: flex;
        padding: var(--padding);
        width: 100%;

        .channel-label-wrapper {
            display: flex;
            flex-direction: column;
            max-width: calc(100% - var(--padding) * 2);

            .name,
            .email {
                font-size: 1.6rem;
                line-height: 2.2rem;
                max-width: calc(100% - var(--padding) * 2);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .link {
                a {
                    color: #065fd4;
                    text-decoration: none;
                    font-size: 14px;
                }
            }
        }
    }
`;

const ProfileButtonStyle = styled.div`
    padding: 1px 6px;
    position: relative;

    button {
        border: none;
        background: none;
    }
`;

const MenuSection = styled.section`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 0;
`;
const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0 36px 0 16px;
    color: #0f0f0f;
    height: 48px;
    font-size: 14px;
    cursor: pointer;

    svg {
        margin-right: 16px;
    }
    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }
`;
export default ProfileButton;
