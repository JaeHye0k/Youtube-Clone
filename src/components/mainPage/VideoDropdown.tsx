import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BsThreeDotsVertical, BsBookmark } from 'react-icons/bs';
import { MdOutlineWatchLater, MdOutlineShare } from 'react-icons/md';
import { BiListPlus, BiBlock } from 'react-icons/bi';
import { IoFlagOutline } from 'react-icons/io5';
import { TfiDownload } from 'react-icons/tfi';
import { RiUserUnfollowLine } from 'react-icons/ri';

interface Props {
  videoId: string;
}

const VideoDropdown: React.FC<Props> = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { icon: <BiListPlus size={24} />, label: '현재 재생목록에 추가' },
    { icon: <MdOutlineWatchLater size={24} />, label: '나중에 볼 동영상에 저장' },
    { icon: <BsBookmark size={24} />, label: '재생목록에 저장' },
    { icon: <TfiDownload size={24} />, label: '오프라인 저장' },
    { icon: <MdOutlineShare size={24} />, label: '공유' },
    { type: 'divider' },
    { icon: <BiBlock size={24} />, label: '관심 없음' },
    { icon: <RiUserUnfollowLine size={24} />, label: '채널 추천 안함' },
    { icon: <IoFlagOutline size={24} />, label: '신고' }
  ];

  return (
    <DropdownContainer ref={dropdownRef}>
      <MoreButton 
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="더보기 메뉴"
      >
        <BsThreeDotsVertical size={20} />
      </MoreButton>
      
      {isOpen && (
        <DropdownMenu onClick={e => e.stopPropagation()}>
          {menuItems.map((item, index) => (
            item.type === 'divider' ? (
              <Divider key={`divider-${index}`} />
            ) : (
              <MenuItem key={index}>
                <IconWrapper>{item.icon}</IconWrapper>
                <Label>{item.label}</Label>
              </MenuItem>
            )
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MoreButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #030303;
  
  &:hover {
    color: #030303;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  min-width: 240px;
  padding: 8px 0;
  z-index: 1000;
  margin-top: 4px;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  cursor: pointer;
  color: #0f0f0f;
  font-size: 14px;
  text-align: left;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 8px 0;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: #030303;
`;

const Label = styled.span`
  flex: 1;
`;

export default VideoDropdown;