import React from "react"
import oceanPhotos from './oceanPhotos.js'
import CatPhoto from './Components/CatPhoto'
import CatPhotoLarge from './Components/CatPhotoLarge'
import Copyright from './Components/Copyright'


//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/

class Ocean extends React.Component {
    render(){
      const photos = oceanPhotos.map(photo=>
        <CatPhoto id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      return (
        <div>
          <div className = "title"> Ocean</div>

          <div className="category-container">
          {photos}
          </div>

        </div>

    )
    }
}

export default Ocean

