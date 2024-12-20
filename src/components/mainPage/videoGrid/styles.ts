import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    gap: 4px;  
    width: calc(100% - 120px); 
    max-width: 1850px;  
    margin: 0 auto;
    padding: 16px 0;
    
    @media (min-width: 2100px) {
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    
    @media (min-width: 1850px) and (max-width: 2099px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    
    @media (min-width: 1500px) and (max-width: 1849px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        width: calc(100% - 80px);
    }
    
    @media (min-width: 1000px) and (max-width: 1499px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        width: calc(100% - 60px);
    }
    
    @media (min-width: 600px) and (max-width: 999px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        width: calc(100% - 32px);
    }
    
    @media (max-width: 599px) {
        grid-template-columns: 1fr;
        width: calc(100% - 24px);
    }
`;