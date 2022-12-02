import React from 'react';
import styled from 'styled-components';

const AppDownload = () => {
    return (
        <DownLoad>
            <p>앱을 다운로드하세요.</p>
            <AppImgWrap>
                <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D2C3527A8-EFC3-4792-A92B-E45638D07D10%26utm_content%3Dlo%26utm_medium%3Dbadge'><img alt="Google Play에서 다운로드" src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png" /></a>
                <a href='ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1534%2C131%2C1531%2C820'><img alt="Microsoft에서 다운로드" src="https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png"/></a>
            </AppImgWrap>

        </DownLoad>
    );
};

export default AppDownload;

const DownLoad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & p {
        font-size: 1.4rem;
        line-height: 1.8rem;
        margin: 2rem 2rem;
    }
`;
const AppImgWrap = styled.div`
    display: flex;
    margin: 1rem 0;
    & img {
        height: 4rem;
        margin-right: 0.8rem;
    }
`;