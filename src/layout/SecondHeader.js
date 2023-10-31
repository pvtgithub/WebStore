import React from 'react'
import { AiFillHome } from 'react-icons/ai'

function SecondHeader() {
    return (
        <div className="second-header py-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-2">
                        <div className="d-flex align-items-center justify-content-between">
                            <AiFillHome className='text-danger' />
                            <a href='/#' className='text-decoration-none text-secondary ml-auto'>Trang chủ</a>
                            <span className='text-secondary ml-auto'>&gt;</span>
                            <a href='/#' className='text-decoration-none text-secondary ml-auto'>Điện thoại</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondHeader