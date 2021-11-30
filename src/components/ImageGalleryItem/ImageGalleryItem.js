import s from "./ImageGalleryItem.module.css";
import { Component } from "react";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img
          src={this.props.webformatURL}
          alt=""
          className={s.ImageGalleryItemImage}
          onClick={this.props.showImageHandle}
        />
      </li>
    );
  }
}

ImageGalleryItem.propType = {
  img: PropTypes.string.isRequired,
  showImageHandle: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
