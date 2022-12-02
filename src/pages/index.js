import styled from "styled-components"
import { TextMiddle, PageWrap } from "../components/common/styled";
import Header from "../components/common/header";


const IndexPage = () => {
    return (
        <PageWrap>
            <Header page="index" />
            <IndexText>컴공선배 리액트 템플릿 입니다.</IndexText>
        </PageWrap>
    )
}

const IndexText = styled(TextMiddle)`
    font-size:30px;
    font-weight:600;
`;

export default IndexPage