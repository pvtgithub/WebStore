import React, { useEffect } from 'react'
import { BiSortUp, BiSortDown } from 'react-icons/bi'

function Sort() {
    return (
        <div className='sort_container'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='title-sort'>Sắp xếp theo</div>
                    </div>
                </div>
                <div className='row py-3'>
                    <div className='col-4 d-flex justify-content-left'>
                        <div className='sort_item'>
                            <BiSortUp />
                            <span>Giá thấp đến cao</span>
                        </div>
                        <div className='sort_item'>
                            <BiSortDown />
                            <span>Giá cao đến thấp</span>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Sort