import s from "./ImageGallery.module.css";
import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  render() {
    return (
      <ul className={s.ImageGallery}>
        {this.props.images.map((image, index) => {
          return (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              showImageHandle={this.props.showImageHandler(image.largeImageURL)}
              index={index}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
