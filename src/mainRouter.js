import Auth from "components/Authentication/Auth";
import Pokedex from "components/Pokedex/Pokedex";
import Roster from "components/Roster/Roster";
import Battle from "components/Battle/Battle";
import CreateMonster from "components/CreateMonster/CreateMonster";
import News from "components/News/News";

const routerRoutes = [
  {
    id: 0,

    path: "authenticate",
    element: <Auth />,
  },
  {
    id: 1,
    path: "pokedex",
    element: <Pokedex />,
  },
  {
    id: 2,

    path: "roster",
    element: <Roster />,
  },
  {
    id: 3,

    path: "battle",
    element: <Battle />,
  },
  {
    id: 4,

    path: "create",
    element: <CreateMonster />,
  },
  {
    id: 5,

    path: "news",
    element: <News />,
  },
];
export default routerRoutes;
