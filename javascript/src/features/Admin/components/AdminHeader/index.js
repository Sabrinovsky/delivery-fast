import React from 'react'
import { BrowserRouter as Router, Route, Switch,NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AdminHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">

        <a className="navbar-brand" href="#">DeliVeryFast</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Início <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/admin/produtos/novo" replace>Produtos <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/admin/usuarios" replace>Usuários <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/admin/entrega/editar" replace>Entrega <span className="sr-only">(current)</span></NavLink>
                </li>
            </ul>

        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
        </div>

    </nav>
  )
}
