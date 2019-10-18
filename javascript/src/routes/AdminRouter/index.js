import React,{useState, useEffect} from 'react';
import { UserProvider } from '../../services/userContext'
import request from '../../services/request'
import { HashRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import { ProductRoutes } from '../../features/Admin/Product/routes'
import { UserRoutes } from '../../features/Admin/User/routes'
import { DeliveryConfigurationRoutes } from '../../features/Admin/DeliveryConfiguration/routes'
import AdminHeader from '../../features/Admin/components/AdminHeader'
import Footer from '../../components/Footer'
import PageName from '../../components/PageName';
export const AdminRouter = () => {

  const [user,setUser] = useState(null)
  const [isAuthing,setIsAuthing] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(()=>{
    if(isAuthing){
      request.get('auth')
        .then((user)=>{
          setUser(user)
        })
        .catch((error)=>{
          setHasError(error)
        })
        .then(()=>{
          setIsAuthing(false)
        })
    }
  },[isAuthing])

  if (hasError && hasError.response.status === 401) return <Redirect to='/login' />
  if (hasError) {
    return(
      <div class="alert alert-danger" role="alert">
        Ocorreu um erro, tente recarregar a página
      </div>
    )
  }

  return (
    <UserProvider value={user}>
      <AdminHeader />
      <Router>
        <Switch>
          <Route  path='/admin/produtos' component={ProductRoutes}/>
          <Route  path='/admin/usuarios' component={UserRoutes}/>
          <Route  path='/admin/entrega' component={DeliveryConfigurationRoutes}/>
          <Route  path='/admin' component={()=> <PageName title="Admin" icon="list"/> }/>
        </Switch>
      </Router>
      <Footer />
    </UserProvider>

  )
}
