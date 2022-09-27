import React from "react";
import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }

  if (props.filteredItems && props.filteredItems.items.length === 0) {
    return (
      <div id="empty" className="py-4 text-center no-items">
        No items found for "{props.searchTitle}"
      </div>
    );
  }

  if (props.filteredItems) {
    console.log(props.filteredItems);
    console.log(props.filteredItems.items);
    return (
      <div className="container py-2">
        <div className="row">
          {props.filteredItems.items.map((item) => {
            return (
              <div className="col-sm-4 pb-2" key={item.slug}>
                <ItemPreview item={item} />
              </div>
            );
          })}
        </div>

        <ListPagination
          pager={props.pager}
          itemsCount={props.itemsCount}
          currentPage={props.currentPage}
        />
      </div>
    );
  } else {
    return (
      <div className="container py-2">
        <div className="row">
          {props.items.map((item) => {
            return (
              <div className="col-sm-4 pb-2" key={item.slug}>
                <ItemPreview item={item} />
              </div>
            );
          })}
        </div>

        <ListPagination
          pager={props.pager}
          itemsCount={props.itemsCount}
          currentPage={props.currentPage}
        />
      </div>
    );
  }
};

export default ItemList;

