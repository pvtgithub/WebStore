import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Filter_item from './Filter_item'
import { AiOutlineDown } from 'react-icons/ai'

function Criteria_item(props) {

    const [isVisible, setIsVisible] = useState(false);
    const [filterItem, setFilterItem] = useState([]);
    const ref = useRef();
    const refDropdown = useRef();

    const necessity = ['Chơi game', 'Pin trâu', 'Dung lượng lớn', 'Cấu hình cao', 'Mỏng nhẹ', 'Chụp ảnh đẹp', 'Nhỏ gọn dễ cầm'];
    const phone = ['Android', 'Điện thoại phổ thông', 'IOS'];
    const feature = ['Sạc không dây', 'Bảo mật vân tay', 'Nhận diện khuôn mặt', 'Kháng nước kháng bụi', 'Hổ trợ 5G'];
    const rom = ['Dưới 32GB', '32GB và 64GB', '128GB và 256GB', 'Trên 512GB'];
    const hz = ['60Hz', '90Hz', '120Hz', 'Từ 140hz trở lên'];
    const ram = ['Dưới 4GB', '4GB - 8GB', '8GB - 12GB', '12GB trở lên'];
    const size_screen = ['Dưới 6 Inch', 'Trên 6 Inch'];
    const type_screen = ['Tai thỏ', 'Tràn viền', 'Màn hình gập', 'Đục lỗ', 'Giọt nước'];
    const camera = ['Chụp xóa phông', 'Chụp góc rộng', 'Quay video 4K', 'Chụp zoom xa', 'Chụp macro', 'Chống rung'];

    const handleClickOutside = (event) => {

        if (refDropdown.current && refDropdown.current.contains(event.target)) {
            setIsVisible(isVisible => !isVisible)

        } else if (ref.current && ref.current.contains(event.target)) {
            setIsVisible(true)
        } else if (ref.current && !ref.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    const handleClose = () => {
        setIsVisible(false)
    }

    useEffect(() => {
        // add event listener to handle outside clicks
        document.addEventListener('mousedown', handleClickOutside);

        // cleanup function to remove event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    if (props.icondown === false && props.dropdown === true) {
        return (
            <div className='position-relative' ref={ref}>
                <div ref={refDropdown} className='criteria-item'>
                    {props.icon}
                    <span>{props.title}</span>
                </div>
                {
                    isVisible && (
                        <div className='area_criteria_item p-2'>
                            <div className='row'>
                                <div className='col-4'>
                                    <h5>Nhu cầu sử dụng</h5>
                                    <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                        {necessity.map(item => (
                                            <Filter_item key={item} title={item} setFilterItem={setFilterItem} filterItem={filterItem} />
                                        ))}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <h5>Loại điện thoại</h5>
                                    <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                        {phone.map(item => (
                                            <Filter_item key={item} title={item} />
                                        ))}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <h5>Tính năng đặc biệt</h5>
                                    <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                        {feature.map(item => (
                                            <Filter_item key={item} title={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-4'>
                                    <h5>Bộ nhớ trong</h5>
                                    <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                        {rom.map(item => (
                                            <Filter_item key={item} title={item} />
                                        ))}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <h5>Tần số quét</h5>
                                    <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                        {hz.map(item => (
                                            <Filter_item key={item} title={item} />
                                        ))}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <h5>Dung lượng RAM</h5>
                                    <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                        {ram.map(item => (
                                            <Filter_item key={item} title={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-4'>
                                    <h5>Kích thước màn hình</h5>
                                    <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                        {size_screen.map(item => (
                                            <Filter_item key={item} title={item} />
                                        ))}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <h5>Kiểu màn hình</h5>
                                    <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                        {type_screen.map(item => (
                                            <Filter_item key={item} title={item} />
                                        ))}
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <h5>Camera</h5>
                                    <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                        {camera.map(item => (
                                            <Filter_item key={item} title={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='btn_filter d-flex'>
                                <div onClick={handleClose} className='btn_close'> Đóng</div>
                                <div className='btn_result'> Xem Kết Quả</div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
    if (props.icondown === false) {
        return (
            <div className='criteria-item'>
                {props.icon}
                <span>{props.title}</span>
            </div>
        )
    } else {
        return (
            <div className='position-relative'>
                <div ref={refDropdown} className='criteria-item'>
                    <span>{props.title}</span>
                    <AiOutlineDown />
                </div>
                {
                    isVisible && (
                        <div className='area_criteria_item_second p-2' ref={ref}>
                            <div className='d-flex justify-content-left align-item-center flex-wrap'>
                                {props.filter.map(item => (
                                    <Filter_item key={item} title={item} />
                                ))}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Criteria_item