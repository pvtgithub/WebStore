import React, { useState } from 'react'
import { HiFilter } from 'react-icons/hi'
import { GiMineTruck } from 'react-icons/gi'
import { FaMoneyBillAlt } from 'react-icons/fa'
import Criteria_item from './Criteria_item'

function Criteria() {
    const necessity = ['Chơi game', 'Pin trâu', 'Dung lượng lớn', 'Cấu hình cao', 'Mỏng nhẹ', 'Chụp ảnh đẹp', 'Nhỏ gọn dễ cầm'];
    const phone = ['Android', 'Điện thoại phổ thông', 'IOS'];
    const feature = ['Sạc không dây', 'Bảo mật vân tay', 'Nhận diện khuôn mặt', 'Kháng nước kháng bụi', 'Hổ trợ 5G'];
    const rom = ['Dưới 32GB', '32GB và 64GB', '128GB và 256GB', 'Trên 512GB'];
    const hz = ['60Hz', '90Hz', '120Hz', 'Từ 140hz trở lên'];
    const ram = ['Dưới 4GB', '4GB - 8GB', '8GB - 12GB', '12GB trở lên'];
    const size_screen = ['Dưới 6 Inch', 'Trên 6 Inch'];
    const type_screen = ['Tai thỏ', 'Tràn viền', 'Màn hình gập', 'Đục lỗ', 'Giọt nước'];
    const camera = ['Chụp xóa phông', 'Chụp góc rộng', 'Quay video 4K', 'Chụp zoom xa', 'Chụp macro', 'Chống rung'];
    const propsContent = [
        { title: 'Bộ lọc', icondown: false, icon: <HiFilter />, dropdown: true },
        { title: 'Sẵn sàng', icondown: false, icon: <GiMineTruck /> },
        { title: 'Giá tiền', icondown: false, icon: <FaMoneyBillAlt /> },
        { title: 'Nhu cầu sử dụng', icondown: true, filter: necessity },
        { title: 'Loại điện thoại', icondown: true, filter: phone },
        { title: 'Tính năng đặc biệt', icondown: true, filter: feature },
        { title: 'Bộ nhớ trong', icondown: true, filter: rom },
        { title: 'Tần số quét', icondown: true, filter: hz },
        { title: 'Dung lượng RAM', icondown: true, filter: ram },
        { title: 'Kích thước màn hình', icondown: true, filter: size_screen },
        { title: 'Kiểu màn hình', icondown: true, filter: type_screen },
        { title: 'Camera', icondown: true, filter: camera },
    ]
    return (
        <div className="criteria_container">
            <div className="container-xxl">
                <div className='title-criteria'>Chọn theo tiêu chí</div>
                <div className="row py-3">
                    <div className="col-10 d-flex align-items-center justify-content-right flex-wrap">
                        {propsContent.map(item => (
                            <Criteria_item key={item.title} icon={item.icon} title={item.title} icondown={item.icondown} dropdown={item.dropdown} filter={item.filter} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Criteria