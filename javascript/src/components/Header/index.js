import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">

        <a className="navbar-brand" href="#">DeliVeryFast</a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Início <span className="sr-only">(current)</span></a>
                </li>
            </ul>
        
        </div>
    
    </nav>
  )
}
