const PhotoGroup = ({ group, images, id }) => {
  return (
    <div className="photos__group" id={id}>
      <p>{group.toUpperCase()}</p>
      {images.map((image, i) => (
        <a
          href={image}
          data-pswp-width="6048px"
          data-pswp-height="4008px"
          target="_blank"
          rel="noreferrer"
        >
          <img key={i} alt="hugophoto" src={image} />
        </a>
      ))}
    </div>
  );
};

export default PhotoGroup;
