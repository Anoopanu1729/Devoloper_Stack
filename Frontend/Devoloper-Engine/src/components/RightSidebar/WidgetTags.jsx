import React from 'react'

const WidgetTags = () => {

  const tags =['C' , 'JAVA','JAVASCRIPT','PHYTHON','MERN','MEAN','NODE','.NET','GOLANG','KOTLIN','EXPRESS','MVP','FIREBASE','MONGODB','PHP','JQUREY','JSON','LARAWEL','AJAX ',' SPRINBOOT ',' REACT' ,' ANGULAR ']
  return (
   <div className="widget-tags">
    <h3>Watched Tags</h3>
    <div className="widget-tags-div">
      {
        tags.map((tag)=>(
          <p key={tag}>{tag}</p>
        ))
      }
    </div>

   </div>
  )
}

export default WidgetTags