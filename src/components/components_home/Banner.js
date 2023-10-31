import React, { useState } from 'react'

function Banner() {
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    function useHandleHovering() {
        setIsHovering(true);
    };

    function useHandleOutHovering() {
        setIsHovering(false);
    };
    function useHandleHovering2() {
        setIsHovering2(true);
    };

    function useHandleOutHovering2() {
        setIsHovering2(false);
    };
    return (
        <div className='banner-container py-3'>
            <div className='container-xxl'>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='col-6 banner-item' onMouseOver={useHandleHovering} onMouseOut={useHandleOutHovering}>
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            {isHovering && (
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={1} aria-label="Slide 2" />
                                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={2} aria-label="Slide 3" />
                                </div>
                            )
                            }
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="3000">
                                    <img src="images/banner-1.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="3000">
                                    <img src="images/banner-2.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="3000">
                                    <img src="images/banner-3.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            {
                                isHovering && (
                                    <>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className='col-6 banner-item' onMouseOver={useHandleHovering2} onMouseOut={useHandleOutHovering2}>
                        <div id="carouselExampleInterval-2" className="carousel slide" data-bs-ride="carousel">
                            {
                                isHovering2 && (
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleInterval-2" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                        <button type="button" data-bs-target="#carouselExampleInterval-2" data-bs-slide-to={1} aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleInterval-2" data-bs-slide-to={2} aria-label="Slide 3" />
                                    </div>
                                )
                            }
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/banner-1.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/banner-2.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/banner-3.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            {isHovering2 && (
                                <div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval-2" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval-2" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner