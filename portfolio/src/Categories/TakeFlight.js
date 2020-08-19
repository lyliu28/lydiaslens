import React from "react"
import aData from './PhotoData/aData'
import ImageModal from './ImageModal'
import CatPhoto from "../Components/CatPhoto"
import CatPhotoLarge from "../Components/CatPhotoLarge"


//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/

class TakeFlight extends React.Component {
    render(){
      const photos = aData.map(photo=>
          <CatPhoto id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      const large_photos = aData.map(photo=>
            <CatPhotoLarge id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      return (
        <div>

          <h5>Take Flight</h5>
          <div className="category-container">
          {photos}
          </div>

          <div className="cat-large-container">
          {large_photos}
          </div>

        </div>

    )
    }
}

export default A
