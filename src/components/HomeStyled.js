import styled from 'styled-components';
 
export const boxmin = styled.div` 
    border:1px solid #ccc;
    &:hover{
        border: 1px solid #888aea;
        box-shadow: 0 0 8px #a9a8f5;
    }
    &:hover .over{
        left: 10%;
    }
    &:hover .buttonvew{
        bottom: -16px; 
    }
    .over{
        position: absolute;
        top: 40%;
        left: 100%;
        transition: .5s ease; 
    }
    .buttonvew{
        position: absolute;
        bottom: -50px;
        left: 0;
        transition: .5s ease;
        right:0;
    }
`;