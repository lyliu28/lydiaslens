import React from "react"
import travelPhotos from './travelPhotos.js'
import CatPhoto from './Components/CatPhoto'
import CatPhotoLarge from './Components/CatPhotoLarge'


//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/

class Travel extends React.Component {
    render(){
      const photos = travelPhotos.map(photo=>
        <CatPhoto id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      const large_photos = travelPhotos.map(photo=>
        <CatPhotoLarge id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      return (
        <div>
          <div className = "title"> Travel</div>

          <div className="category-container">
          {photos}
          </div>

        </div>

    )
    }
}

export default Travel

