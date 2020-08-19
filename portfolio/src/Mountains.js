import React from "react"
import mountainPhotos from './mountainData.js'
import CatPhoto from './Components/CatPhoto'
import CatPhotoLarge from './Components/CatPhotoLarge'


//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/

class Mountain extends React.Component {
    render(){
      const photos = mountainPhotos.map(photo=>
        <CatPhoto id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      const large_photos = mountainPhotos.map(photo=>
        <CatPhotoLarge id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      return (
        <div>
          <div className = "title"> Mountain</div>

          <div className="category-container">
          {photos}
          </div>
        </div>

    )
    }
}

export default Mountain

