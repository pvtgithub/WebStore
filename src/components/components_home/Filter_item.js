import React, { useEffect, useState } from 'react'

function Filter_item(props) {
    const [isClick, setIsClick] = useState(false)

    // if (isClick) {
    //     props.setFilterItem(...props.filterItem, props.title)
    // } else {
    //     removeElement(props.title)
    // }
    // console.log(props.filterItem)

    const handleClick = () => {
        setIsClick(isClick => !isClick)
        console.log(isClick)
    }

    // const removeElement = (itemToRemove) => {
    //     const newList = props.filterItem.filter(item => item !== itemToRemove);
    //     props.setFilterItem(newList);
    // }

    const styleClick = {
        color: "red",
        backgroundColor: "#fde0e6",
        border: "1px solid red"
    }
    return (
        <div className='filter_item p-1' style={isClick ? styleClick : null} onClick={handleClick}>
            <span>{props.title}</span>
        </div>
    )
}
export default Filter_item