import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='first_footer_container py-3'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-3'>
                                <h6>Tổng đài hỗ trợ miễn phí</h6>
                                <div className='call_footer'>
                                    <p>Gọi mua hàng <a href='tel:18002097' className='text-decoration-none'>1800.2097</a> (7h30 - 22h00)</p>
                                    <p>Gọi khiếu nại <a href='tel:18002097' className='text-decoration-none'>1800.2097</a> (7h30 - 22h00)</p>
                                    <p>Gọi bảo hành <a href='tel:18002097' className='text-decoration-none'>1800.2097</a> (7h30 - 22h00)</p>
                                </div>
                                <h6>Phương thức thanh toán</h6>
                                <div className='logo_payment d-flex flex-wrap'>
                                    <a className='logo_payment_item' href='/#'><img src='images/payment/alepay-logo.png' alt=''></img></a>
                                    <a className='logo_payment_item' href='/#'><img src='images/payment/kredivo-logo.png' alt='ale pay'></img></a>
                                    <a className='logo_payment_item' href='/#'><img src='images/payment/moca-logo.png' alt='ale pay'></img></a>
                                    <a className='logo_payment_item' href='/#'><img src='images/payment/zalopay-logo.png' alt='ale pay'></img></a>
                                    <a className='logo_payment_item' href='/#'><img src='images/payment/mpos-logo.png' alt='ale pay'></img></a>
                                    <a className='logo_payment_item' href='/#'><img src='images/payment/onepay-logo.png' alt='ale pay'></img></a>
                                    <a className='logo_payment_item' href='/#'><img src='images/payment/vnpay-logo.png' alt='ale pay'></img></a>
                                </div>
                            </div>
                            <div className='col-3'>
                                <h6>Thông tin và chính sách</h6>
                                <div className='info_footer'>
                                    <p>Mua hàng và thanh toán online</p>
                                    <p>Mua hàng trả góp Online</p>
                                    <p>Tra thông tin đơn hàng</p>
                                    <p>Tra điểm Smember</p>
                                    <p>Xem ưu đãi Smember</p>
                                    <p>Tra thông tin bảo hành</p>
                                    <p>Tra cứu hoá đơn điện tử</p>
                                    <p>Trung tâm bảo hành chính hãng</p>
                                    <p>Quy định về việc sao lưu dữ liệu</p>
                                    <p>Dịch vụ bảo hành điện thoại</p>
                                    <p>Dịch vụ bảo hành mở rộng</p>
                                </div>
                            </div>
                            <div className='col-3'>
                                <h6>Dịch vụ và thông tin khác</h6>
                                <div className='service_footer'>
                                    <p>Khách hàng doanh nghiệp</p>
                                    <p>Ưu đãi thanh toán</p>
                                    <p>Quy chế hoạt động</p>
                                    <p>Chính sách Bảo hành</p>
                                    <p>Liên hệ hợp tác kinh doanh</p>
                                    <p>Tuyển dụng</p>
                                </div>
                            </div>
                            <div className='col-3'>
                                <h6>Kết nối với PVT Store Phone</h6>
                                <div className='icon_connect d-flex justify-content-left mb-3'>
                                    <a href='/#'><img src='images/connect/cellphones-youtube.png' alt=''></img></a>
                                    <a href='/#'><img src='images/connect/cellphones-instagram.png' alt=''></img></a>
                                    <a href='/#'><img src='images/connect/cellphones-tiktok.png' alt=''></img></a>
                                    <a href='/#'><img src='images/connect/cellphones-facebook.png' alt=''></img></a>
                                    <a href='/#'><img src='images/connect/cellphones-zalo.png' alt=''></img></a>
                                </div>
                                <h6>Website thành viên</h6>
                                <div className='member_web'>
                                    <p>Hệ thống bảo hành sửa chữa Điện thoại - Máy tính</p>
                                    <a href='/#'><img src='images/member/dienthoaivui.png' alt=''></img></a>
                                </div>
                                <div className='member_web'>
                                    <p>Trung tâm bảo hành uỷ quyền Apple</p>
                                    <a href='/#'><img src='images/member/dienthoaivui-asp.png' alt=''></img></a>
                                </div>
                                <div className='member_web'>
                                    <p>Kênh thông tin giải trí công nghệ cho giới trẻ</p>
                                    <a href='/#'><img src='images/member/schanel.png' alt=''></img></a>
                                </div>
                                <div className='member_web'>
                                    <p>Trang thông tin công nghệ mới nhất</p>
                                    <a href='/#'><img src='images/member/sforum.png' alt=''></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-container py-2'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-3'>
                                <a href='/#' className='fsize-footer'>Điện thoại  – Điện thoại iPhone  – Điện thoại iPhone 14</a><br />
                                <a href='/#' className='fsize-footer'>iPhone 14 Pro 128GB  – iPhone 14 Pro Max 128GB</a><br />
                                <a href='/#' className='fsize-footer'>Điện thoại iPhone 12  – Điện thoại iPhone 13</a>
                            </div>
                            <div className='col-3'>
                                <a href='/#' className='fsize-footer'>Điện thoại  – Điện thoại iPhone  – Điện thoại iPhone 14</a><br />
                                <a href='/#' className='fsize-footer'>iPhone 14 Pro 128GB  – iPhone 14 Pro Max 128GB</a><br />
                                <a href='/#' className='fsize-footer'>Điện thoại iPhone 12  – Điện thoại iPhone 13</a>
                            </div>
                            <div className='col-3'>
                                <a href='/#' className='fsize-footer'>Điện thoại  – Điện thoại iPhone  – Điện thoại iPhone 14</a><br />
                                <a href='/#' className='fsize-footer'>iPhone 14 Pro 128GB  – iPhone 14 Pro Max 128GB</a><br />
                                <a href='/#' className='fsize-footer'>Điện thoại iPhone 12  – Điện thoại iPhone 13</a>
                            </div>
                            <div className='col-3'>
                                <a href='/#' className='fsize-footer'>Điện thoại  – Điện thoại iPhone  – Điện thoại iPhone 14</a><br />
                                <a href='/#' className='fsize-footer'>iPhone 14 Pro 128GB  – iPhone 14 Pro Max 128GB</a><br />
                                <a href='/#' className='fsize-footer'>Điện thoại iPhone 12  – Điện thoại iPhone 13</a>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-12'>
                                <p>Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD: 0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center align-items-center'>
                                <img src='images/logoSaleNoti.png' alt=''></img>
                                <img src='images/dmca_copyright_protected150c.png' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer