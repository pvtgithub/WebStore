import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import Heart from "react-heart"

function Product_item(props) {
    const [active, setActive] = useState(false)
    return (
        <div className='position-relative'>
            <div className='product_item d-flex flex-column'>
                <div className='image_product'>
                    <img src={props.image} alt='' />
                </div>
                <div className='title_product'>
                    {props.name}
                </div>
                <div className='tag_product'>
                    <p>{props.tag1}</p>
                    <p>{props.tag2}</p>
                    <p>{props.tag3}</p>
                </div>
                <div className='price_product d-flex'>
                    <p className='price_show'>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price)}</p>
                    {
                        props.price_old && (
                            <del className='price_through'>{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price_old)}</del>
                        )
                    }
                </div>
                <div className='description_product'>
                    {props.description}
                </div>
                <div className='star_product'>
                    <ReactStars
                        count={5}
                        value={props.star}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                    />
                </div>
                <div className='heart_product'>
                    <span>Yêu thích</span>
                    <Heart style={{ width: "1rem" }} isActive={active} onClick={() => setActive(!active)} />
                </div>
            </div>
            <div className='promotion_item'>
                Giảm {props.rate_promotion} %
            </div>
        </div>
    )
}

export default Product_item