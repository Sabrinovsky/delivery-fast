import React, {useContext} from 'react'
import { NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserConsumer from './../../../../services/userContext'

export default function AdminHeader() {
    const user = useContext(UserConsumer)

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">

        <a className="navbar-brand" href="#/admin">DeliVeryFast</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link text-center" to="/admin/home">
                        <i className="fa fa-home"></i>
                        Início
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-center" to="/admin/produtos">
                        <i className="fa fa-cube"></i>
                        Produtos
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-center" to="/admin/usuarios">
                        <i className="fa fa-users"></i>
                        Usuários
                    </NavLink>
                </li>
                {user.can_access_delivery_configuration &&
                    <li className="nav-item">
                        <NavLink className="nav-link text-center" to="/admin/entrega/editar">
                            <i className="fa fa-wrench"></i>
                            Entrega
                        </NavLink>
                    </li>
                }
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
