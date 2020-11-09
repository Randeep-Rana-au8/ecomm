import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./CollectionPreview.scss";

const CollectionPreview = ({ collection }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{collection.title}</h1>
      <div className="preview">
        {collection.items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
