import React from 'react'
/**
 *
 * accept props: 
 * 
 * margin, marginTop, marginBottom, marginLeft, marginRight
 * 
 * padding, paddingTop, paddingBottom, paddingLeft, paddingRight
 * @param {*} props
 * @returns void
 */
const Space = (props) => {
    const style = {
        margin: props.margin,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        padding: props.padding,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        paddingLeft: props.paddingLeft,
        paddingRight: props.paddingRight
    }
    return <div style={style}></div>
}

export default Space