import './VideoListing.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { VideoCard } from '../../Components/VideoCard/VideoCard'
import { Sidebar } from '../../Components'

const VideoListing = () => {
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(' ')
  useEffect(() => {
    async function getData() {
      setLoading('Loading....')
      const productResponse = await axios.get('/api/videos')
      setLoading('')
      setProductsData(productResponse.data.videos)
    }
    getData()
  }, [])
  return (
    <div className="inner-Body">
    <Sidebar />
    <div className="product-container">
      <h1 className="trandingVideo">Tranding Videos</h1>
      <div className="section">
        <h3 className="loading">{loading}</h3>
        {productsData.map(
          ({
            _id,
            title,
            videoLength,
            thumbnail,
            chennelProfile,
            chennelName,
            view,
          }) => {
            return (
              <div key={_id}>
                <VideoCard
                  _id={_id}
                  title={title}
                  videoLength={videoLength}
                  thumbnail={thumbnail}
                  chennelProfile={chennelProfile}
                  chennelName={chennelName}
                  view={view}
                  video={productsData}
                />
              </div>
            )
          },
        )}
      </div>
    </div>
    </div>
  )
}
export { VideoListing }
