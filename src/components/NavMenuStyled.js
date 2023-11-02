import styled from "styled-components";

export const drop = styled.li`
   position: relative;
   line-height: 38px;
   transition: 0.8s ease;
   &:hover .submenu{
    display:block;
    transition: 0.8s ease;
   }

   & .submenu{
        position:absolute;
        top:100%;
        left:0;
        background: #64748b;
        z-index: 9;
        margin: 0;
        padding: 0px 10px;
        width: 200px;
        display:none;
        transition: 0.8s ease;
   }
`;