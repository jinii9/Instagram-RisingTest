import styled from "styled-components";

export const PageWrap = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: stretch;

    flex-direction: column;
    background-color: rgb(250, 250, 250);

`
export const MainPageWrap = styled.div`
    display: flex;
    /* justify-content: center; */
    /* align-items: stretch; */
    height: 100vh;

    flex-direction: column;
    background-color: rgb(250, 250, 250);
`
export const HeaderWrap = styled.div`
    width: 100%;
    background-color: white;
    height: 6rem;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    position: sticky;

    border-bottom: 1px solid rgb(219, 219, 219);
    display: flex;
    align-items: center;
    justify-content: center;
    /* order: 2; */
`
export const Section = styled.div`
    width: 100%;
    
    margin-top: 3.2rem;
    padding-bottom: 3.2rem;

    display: flex;
    justify-content: center;
    flex-basis: 100%;
    align-items: center;
    background-color: rgb(250, 250, 250);
    /* order: 4; */
`;
export const SectionSub = styled(Section)`
    margin: 0rem;
    /* align-items: flex-start; */
    /* align-items: stretch; */
    /* height: 100vh; */
    /* height: 100%; */
    /* align-self: flex-start; */
    /* flex: 1 1 auto; */
    /* width: 100%; */
    /* display: flex; */
    /* justify-content: center; */
    /* flex-basis: 100%; */
    align-items: flex-start;

`;
export const HeaderStyle = styled.div`
    margin-top: 10rem;
    display: flex;
    
`;

const SideImg = styled.div`
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png);
    background-position: -4.6rem 0;
    background-size: 46.832rem 63.415rem;
    flex-basis: 38.032rem;

    height: 58.115rem;
    margin-bottom: 1.2rem;
    margin-right: 3.2rem;
`;
export const LoginWrap = styled.div`
    display:flex;
    flex-direction: column;
`;
export const FooterWrap = styled.div`
    /* width: 100%; */
    /* flex-basis: 100%; */
    background-color: rgb(250, 250, 250);

`;
export const BlueLetterBtn = styled.button`
    color: rgb(0, 149, 246);
    -webkit-appearance: none;
    background: none;
    border: none;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
`;



// export const PageWrap = styled.div`
//     width:100vw;
//     height:100vh;
// `;
export const TextMiddle = styled.div`
    position:absolute;
    top:50%;
    left:50%;

    transform:translate(-50%,-50%);
`;