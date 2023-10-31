import React from 'react'
import { BsFillCaretUpFill } from 'react-icons/bs'

function BottomIconControl() {
    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className='bottom_icon_container d-flex flex-column align-items-center' onClick={handleToTop}>
            <BsFillCaretUpFill className='icon_up' />
            <span>Lên đầu</span>
        </div>
    )
}

export default BottomIconControl