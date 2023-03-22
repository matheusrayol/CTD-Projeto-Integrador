import { Link } from 'react-router-dom'
import './style.sass'
export function CardProduct(props) {
  return (
    <div className="card-product" id="card-product">
      <img src={props.data.image} alt="" />
      <div className="content-product" id="content-product">
        <div className="header-product" id="header-product">
          <div className="info-product" id="info-product">
            <span className="category-product" id="category-product">
              {props.data.category}
            </span>
            <h1 className="name-product" id="name-product">
              {props.data.title}
            </h1>
          </div>
          <div className="reputation-product" id="reputation-product">
            <div className="rating-scale-product" id="rating-scale-product">
              <span id="rating-scale-product-span">{props.data.rated}</span>
            </div>
          </div>
        </div>
        <div className="location-product" id="location-product">
          <span>{props.data.location}</span>
        </div>
        <div className="description-product" id="description-product">
          <p>{props.data.description}</p>
        </div>
        <Link
          to={`/product/${props.data.id}`}
          className="btn-view-more-product"
          id="btn-view-more-product"
        >
          <button className="btn-view-more" id="btn-view-more">
            Mais detalhes
          </button>
        </Link>
      </div>
    </div>
  )
}
