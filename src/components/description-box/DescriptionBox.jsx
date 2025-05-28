import "./description-box.css";

function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          provident quas hic in quam consequatur voluptatem placeat fugiat nemo
          officia.
        </p>
        <p>
          Consectetur corporis amet? Deleniti inventore voluptatem, illo et nisi
          officiis.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
