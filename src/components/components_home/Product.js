import React, { useEffect, useState } from 'react'
import Product_item from './Product_item'
import { AiOutlineDown } from 'react-icons/ai'
import Loading from '../Loading'

function Product() {
    // const [phone, setPhone] = useState([
    //     {
    //         id: 1,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         price_old: 34990000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    //     {
    //         id: 2,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    //     {
    //         id: 3,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    //     {
    //         id: 4,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         price_old: 34990000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    //     {
    //         id: 5,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         price_old: 34990000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    //     {
    //         id: 6,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         price_old: 34990000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    //     {
    //         id: 7,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         price_old: 34990000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    //     {
    //         id: 8,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         price_old: 34990000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    //     {
    //         id: 9,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         price_old: 34990000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    //     {
    //         id: 10,
    //         name: 'iPhone 14 Pro Max 128GB | Chính hãng VN/A',
    //         price: 28090000,
    //         price_old: 34990000,
    //         description: 'Nhập mã APPLEMOCA - giảm 600k khi mua iPhone, iPad, Mac từ 19',
    //         star: 5,
    //         image: '/images/product/i-14-promax.png',
    //         rate_promotion: 20,
    //         tag1: '6.7 Inch',
    //         tag2: '6GB',
    //         tag3: '128GB',
    //     },
    // ])
    const [currentPage, setCurrentPage] = useState(1)
    const [phone, setPhone] = useState([])
    const [lastPage, setLastPage] = useState()
    const [isDisplayButtonMore, setIsDisplayButtonMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [mesageError, setMesageError] = useState("");

    useEffect(() => {
        setIsLoading(true)
        fetch(`http://127.0.0.1:8000/api/products?page=${currentPage}`)
            .then((response) => {
                if (response.ok)
                    return response.json()
            })
            .then((res) => {
                setPhone([...phone, ...res.data])
                setLastPage(res.last_page)
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
                setMesageError('Không thể load sản phẩm');
            });
    }, [currentPage])

    const handleGetCurrentPage = () => {
        if (currentPage >= lastPage - 1) {
            setCurrentPage(currentPage => currentPage + 1)
            setIsDisplayButtonMore(false);
        } else {
            setCurrentPage(currentPage => currentPage + 1)
        }
    }

    const resultComponent = (
        <div className='product_list_container'>
            <div className='container-xxl'>
                <div className='row py-2'>
                    <div className='col-12 d-flex flex-wrap justify-content-left align-item-center'>
                        {phone.map(item => (
                            <Product_item
                                key={item.id}
                                name={item.name}
                                price={item.price}
                                price_old={item.price_old}
                                description={item.description}
                                star={item.star}
                                image={item.image}
                                rate_promotion={item.rate_promotion}
                                tag1={item.tag1}
                                tag2={item.tag2}
                                tag3={item.tag3}
                            />
                        ))}
                    </div>
                </div>

                <div className='row py-2'>
                    <div className='col-12 d-flex justify-content-center'>
                        {isDisplayButtonMore ? (
                            <div className='button_show_more' onClick={handleGetCurrentPage}>
                                <span>Xem thêm sản phẩm</span>
                                <AiOutlineDown />
                            </div>
                        ) : (
                            <div className='notification_lose'>
                                <span>Đã xem hết sản phẩm...</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        <div>

            {mesageError ? (
                <div className='notification_lose text-center'>
                    <span>{mesageError}...</span>
                </div>
            ) : isLoading ? <Loading /> : resultComponent}
        </div>
    )
}

export default Product