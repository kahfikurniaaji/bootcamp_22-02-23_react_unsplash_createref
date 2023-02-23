import React from "react";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// component ImageCard
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.image = React.createRef();
  }

  render() {
    return (
      <Card>
        <Image src={this.props.image} wrapped ui={false} />
      </Card>
    );
  }
}

export default ImageCard