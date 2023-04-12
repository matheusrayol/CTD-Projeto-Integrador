import React from 'react'
import travelgreen_watermark from '../../assets/travelgreen_icon_car.svg'
import { Link } from 'react-router-dom'

export const CategoryCard = category => {
    return (
        <div className="col-md-6 col-xl-3 gx-2 gy-2">
            <Link className="travelgreen-category-card" key={category.imageData.id} onClick={() => category.onSelectCategory(`${category.imageData.id}`)} data-bs-toggle="tooltip" data-bs-placement="bottom" title={category.imageData.descriptions}>
                <div className="card shadow py-2 travelgreen-category-card rounded" style={{ backgroundImage: `url(${category.imageData.urlImage})` }}>
                    <div className="card-body pb-0 pt-0">
                        <div className="row align-items-center no-gutters">
                            <div className="col me-2">
                                <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                                    <span className="fs-4 fw-bold text-white poppins">{category.imageData.qualification}</span>
                                </div>
                                <div className="h6">
                                    <p className="fw-normal text-light mt-2 ubuntu tt-2l">
                                    {category.imageData.descriptions}
                                    </p>
                                </div>
                            </div>
                            <div className="col-2 align-self-end justify-content-end">
                                <img className="travelgreen-watermark" src={travelgreen_watermark} width="36px" height="36px" alt="Travel Green" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
