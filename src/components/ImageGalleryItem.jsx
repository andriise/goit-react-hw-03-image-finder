export const ImageGalleryItem = (photos, id) => {
  return photos.map(el => {
    return (
      <li className="ImageGalleryItem" key={id}>
        <img className="ImageGalleryItem-image" src={photos} alt="" />
      </li>
    );
  });
};
