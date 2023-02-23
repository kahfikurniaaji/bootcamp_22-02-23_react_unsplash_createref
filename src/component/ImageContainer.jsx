import React from "react";
import ImageCard from "./ImageCard";
import "semantic-ui-css/semantic.min.css";

// Component Image container
class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images.map((image) => <ImageCard image={image.urls.thumb} />),
    };
  }
  render() {
    return <div>{this.state.images}</div>;
  }
}

export default ImageContainer;
