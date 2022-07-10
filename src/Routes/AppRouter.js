import {
  Home,
  VideoListing,
  Login,
  SignUp,
  WatchList,
  Liked,
  History,
  Playlist,
  SinglePlayList,
  SingleVideo,
} from './../Page/index'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './../RequireAuth'
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VideoListing" element={<VideoListing />} />
        <Route
          path="/LikedPage"
          element={
            <RequireAuth>
              <Liked />
            </RequireAuth>
          }
        />
        <Route
          path="/WatchLater"
          element={
            <RequireAuth>
              <WatchList />
            </RequireAuth>
          }
        />
        <Route
          path="/HistoryPage"
          element={
            <RequireAuth>
              <History />
            </RequireAuth>
          }
        />
        <Route
          path="/PlaylistPage"
          element={
            <RequireAuth>
              <Playlist />
            </RequireAuth>
          }
        />
        <Route
          path="/PlaylistPage/:playlistId"
          element={
            <RequireAuth>
              <SinglePlayList />
            </RequireAuth>
          }
        />
        <Route path="/VideoListing/:videoId" element={<SingleVideo />} />
        <Route path="/loginPage" element={<Login />} />
        <Route path="/SignUpPage" element={<SignUp />} />
      </Routes>
    </>
  )
}
export { AppRouter }
