import React from 'react'

import './styles.css';

export default function PageName({title, icon}) {
  return (
    <div className="page-name">
        <h3>
          <i className={`fa fa-${icon}`}></i>
          {title}
        </h3>
    </div>
  )
}
