import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import CollectionsData from "./shop.data";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      Collections: CollectionsData,
    };
  }
  render() {
    const { Collections } = this.state;
    return (
      <div>
        {this.state.Collections.map((collection) => (
          <div>
            <CollectionPreview collection={collection} />
          </div>
        ))}
      </div>
    );
  }
}

export default Shop;
