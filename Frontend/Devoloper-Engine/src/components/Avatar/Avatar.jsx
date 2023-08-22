import React from 'react'

function Avatar({children,backgroundColor,px,py,color,borderRadius,fontSize}) {
    const style={
        backgroundColor,padding:`${px} ${py}`,
        color:color || 'black',
        borderRadius,fontSize,
        textAlign:"center",cursor:"cursor" || "none",
        textDecoration:"none"
    }
  return (
    <div style={style}>
        {children}
        </div>
  )
}

export default Avatar