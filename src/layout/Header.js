import React from 'react'
import { FaAlignJustify } from "react-icons/fa";
import { ImLocation2 } from 'react-icons/im';
import { BsSearch } from 'react-icons/bs';
import { AiFillHome, AiOutlinePhone, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiTruck } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';
const Header = () => {
  return (
    <>
      <div className='header_fixed_container'>
        <div className='header_container py-2'>
          <div className="container-xxl">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className='text-white'>
                  <h3>PVT StorePhone</h3>
                </div>
                <div className='categories'>
                  <div className="dropdown p-2">
                    <FaAlignJustify className='text-white' />
                    <a className="btn" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Danh Mục
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/#">Điện thoại</a></li>
                      <li><a className="dropdown-item mt-3" href="/#">Máy tính</a></li>
                      <li><a className="dropdown-item mt-3" href="/#">Đồng hồ</a></li>
                    </ul>
                  </div>
                </div>
                <div className='categories text-white'>
                  <div className="dropdown dropdown-toggle">
                    <ImLocation2 className='text-white fs-5' />
                    <a className="btn" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Xem giá tại
                      <h6 className='text-white'>Đà Nẵng</h6>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/#">TP Hồ Chí Minh</a></li>
                      <li><a className="dropdown-item mt-3" href="/#">Hà Nội</a></li>
                      <li><a className="dropdown-item mt-3" href="/#">Đà Nẵng</a></li>
                    </ul>
                  </div>
                </div>
                <div className='search-form'>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
                      <BsSearch />
                    </span>
                    <input type="text" className="form-control" placeholder="Nhập sản phẩm cần tìm..." aria-label="Username" aria-describedby="addon-wrapping" />
                  </div>
                </div>

                <a href='tel:0348485360' className='menu_item text-decoration-none text-white'>
                  <div className='d-flex'>
                    <AiOutlinePhone className='fs-3 mt-3' />
                    <div className='d-flex flex-column p-2'>
                      <span>Gọi mua hàng</span>
                      <strong>0348485360</strong>
                    </div>
                  </div>
                </a>

                <a href='tel:0348485360' className='menu_item text-decoration-none text-white'>
                  <div className='d-flex'>
                    <ImLocation2 className='fs-3 mt-3' />
                    <div className='d-flex flex-column p-2'>
                      <span>Cửa hàng<br />gần bạn</span>
                    </div>
                  </div>
                </a>

                <a href='tel:0348485360' className='menu_item text-decoration-none text-white'>
                  <div className='d-flex'>
                    <FiTruck className='fs-3 mt-3' />
                    <div className='d-flex flex-column p-2'>
                      <span>Tra Cứu<br />đơn hàng</span>
                    </div>
                  </div>
                </a>
                <a href='tel:0348485360' className='menu_item text-decoration-none text-white'>
                  <div className='d-flex mt-2'>
                    <AiOutlineShoppingCart className='fs-3 mt-2' />
                    <div className='d-flex flex-column p-2'>
                      <span className='mt-2'>Giỏ hàng</span>
                    </div>
                  </div>
                </a>

                <a href='tel:0348485360' className='menu_item_user text-decoration-none text-white'>
                  <div className='d-flex flex-column align-items-center mt-2'>
                    <BiUserCircle className='fs-3' />
                    <span>Tài khoản</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header