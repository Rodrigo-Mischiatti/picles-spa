import { createBrowserRouter } from "react-router-dom";
import { Home } from './pages/Home'
import { Pets } from "./pages/Pets";
import { PetDetails } from "./pages/PetDetails";
import { Shelter } from "./pages/Admin/Shelter";
import { PetList } from "./pages/Admin/PetList";
import { AuthHOC } from "./components/common/AuthHOC/AuthHOC";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pets',
    children: [
      {
        index: true,
        element: <Pets />
      },
      {
        path: '/pets/:id',
        element: <PetDetails />
      }
    ]
  },
  {
    path: '/admin',
    children: [
      {
        index: true,
        element: <Shelter />
      },
      {
        path: '/admin/pets',
        element: <AuthHOC />,   //aqui sera checado se tem pelo menos um shelter cadadtrado, se sim, ai habilita a pagina. na utilização do AuthHOC que foi crido, veremos um outlet, que justamente retorna uma condicional se vai exibir ou não a pagina. Se não tiver este elemento "element" a rota ja mostraria direto a pagina sem a condicional
        children: [
          {
            index: true,
            element: <PetList />
          }
        ]
      }
    ]
  }
])

export default router