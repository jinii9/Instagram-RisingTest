import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostViewModal from "../components/postViewModal"
import EditPage from "../Edit"
import IndexPage from "../pages"
import DirectPage from "../pages/direct"
import Message from "../pages/direct/message"
import HomePage from "../pages/home"
import LoginPage from "../pages/login"
import NoMatchPage from "../pages/noMatch"
import ProfilePage from "../pages/profile"
import FollowModal from "../pages/profile/followModal"
import Post from "../pages/profile/post"
import Save from "../pages/profile/save"
import Tag from "../pages/profile/tag"
import SafariPage from "../pages/safari"
import SignPage from "../pages/sign"
import BirthdayPage from "../pages/sign/birthday"

const RootRoute = () => {
  // 모달창 on/off 상태 가져오기
//   const {postView} = useSelector((state) => state.ModalReducer);

    return (
        <BrowserRouter>
            <Routes>

                {/* 로그인 페이지 */}
                {/* <Route path='/' element={<IndexPage />} exact key="index" /> */}
                <Route path='/login' element={<LoginPage />}/>


                {/* 회원가입 페이지 */}
                {/* <Route path='/login' element={<LoginPage />} exact key="loign" /> */}
                <Route path='/sign' element={<SignPage />}/>
                <Route path='/birthday' element={<BirthdayPage />}/>

                {/* 기본 메인 페이지 */}
                <Route path='/' element={<HomePage />}/>
                <Route path='/:postId' element={<HomePage />}/>


                {/* 프로필 페이지 */}
                <Route path='/profile' element={<ProfilePage />}>
                    <Route path='save' element={<Save />}/>
                    <Route path='tag' element={<Tag />}/>
                </Route>
                <Route path='/profile/following' element={<ProfilePage/>}></Route>
                <Route path='/profile/:postId' element={<ProfilePage />}/>
                {/* 프로필 편집 */}
                <Route path='/accounts/edit' element={<EditPage />}/>

                {/* 사파리 페이지 */}
                <Route path='/explore' element={<SafariPage />}/>

                {/* 게시물 조회 페이지 */}
                {/* <Route path='/p/:postId' element={<PostView />}/> */}
                <Route path='/p/:postId' element={<SafariPage />}/>
                {/* <Route path='/p/:postId' element={<SafariPage />}/> */}


                {/* 디엠 페이지 */}
                <Route path='/direct' element={<DirectPage />}/>
                <Route path='/direct/t/:firendId' element={<DirectPage />}/>


                {/* 경로가 유효하지 않을 때 */}
                <Route path='*' element={<NoMatchPage />} key="noMatch" />

            </Routes>
        </BrowserRouter>
    )
}


export default RootRoute