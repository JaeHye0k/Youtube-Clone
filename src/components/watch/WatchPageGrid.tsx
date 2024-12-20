import styled from 'styled-components';
import { ReactNode } from 'react';

interface WatchPageGridProps {
    sidebar: ReactNode;
    main: ReactNode;
    secondary: ReactNode;
}

const WatchPageGrid = ({ sidebar, main, secondary }: WatchPageGridProps) => {
    return (
        <GridContainer>
            <SidebarColumn>{sidebar}</SidebarColumn>
            <MainColumn>{main}</MainColumn>
            <SecondaryColumn>{secondary}</SecondaryColumn>
        </GridContainer>
    );
};

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 240px minmax(850px, 1fr) 426px;
    gap: 24px;
    padding: 24px;
    width: 100%;
    
    @media (max-width: 1850px) {
        grid-template-columns: 240px minmax(850px, 1fr) 402px;
    }
    
    @media (max-width: 1200px) {
        grid-template-columns: 72px minmax(850px, 1fr);
    }
    
    @media (max-width: 992px) {
        grid-template-columns: minmax(850px, 1fr);
        padding: 0;
    }
`;

const SidebarColumn = styled.div`
    @media (max-width: 992px) {
        display: none;
    }
`;

const MainColumn = styled.div`
    min-width: 850px;
    width: 100%;
`;

const SecondaryColumn = styled.div`
    width: 402px;
    
    @media (max-width: 1200px) {
        display: none;
    }
`;

export default WatchPageGrid; 