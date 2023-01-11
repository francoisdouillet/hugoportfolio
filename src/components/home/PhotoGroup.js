const PhotoGroup = ({ group, images, id }) => {
  return (
    <div className="photos__group" id={id}>
      <p>{group.toUpperCase()}</p>
      {images.map((image, i) => (
        <a
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noreferrer"
        >
          <img key={i} alt="hugophoto" src={image.src} />
        </a>
      ))}
    </div>
  );
};

export default PhotoGroup;
