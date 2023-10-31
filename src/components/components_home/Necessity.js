import React from 'react'

const Necessity = () => {
    const bgNecessity1 = { backgroundImage: "url('images/necessity/game.png')" };
    const bgNecessity2 = { backgroundImage: "url('images/necessity/pin.png')", backgroundColor: "rgb(151, 145, 145)" };
    const bgNecessity3 = { backgroundImage: "url('images/necessity/dungluong.png')", backgroundColor: "rgb(145, 105, 105)" };
    const bgNecessity4 = { backgroundImage: "url('images/necessity/cauhinhcao.png')", backgroundColor: "rgb(109, 95, 95)" };
    const bgNecessity5 = { backgroundImage: "url('images/necessity/mongnhe.png')", backgroundColor: "rgb(145, 105, 105)" };
    const bgNecessity6 = { backgroundImage: "url('images/necessity/chupanhdep.png')", backgroundColor: "rgb(188, 174, 182)" };
    return (
        <div className='necessity-container py-2'>
            <div className='container-xxl'>
                <div className='title-necessity'>Chọn theo nhu cầu</div>
                <div className='row py-2'>
                    <div className="col-6 d-flex justify-content-between align-items-center">
                        <a href='/#'>
                            <div className='item-necessity' style={bgNecessity1}>
                                <span className='text-white'>Chơi game</span>
                            </div>
                        </a>
                        <a href='/#'>
                            <div className='item-necessity' style={bgNecessity2}>
                                <span className='text-white'>Pin trâu</span>
                            </div>
                        </a>
                        <a href='/#'>
                            <div className='item-necessity' style={bgNecessity3}>
                                <span className='text-white'>Dung lượng lớn</span>
                            </div>
                        </a>
                        <a href='/#'>
                            <div className='item-necessity' style={bgNecessity4}>
                                <span className='text-white'>Cấu hình cao</span>
                            </div>
                        </a>
                        <a href='/#'>
                            <div className='item-necessity' style={bgNecessity5}>
                                <span className='text-white'>Mỏng nhẹ</span>
                            </div>
                        </a>
                        <a href='/#'>
                            <div className='item-necessity' style={bgNecessity6}>
                                <span className='text-white'>Chụp ảnh đẹp</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Necessity