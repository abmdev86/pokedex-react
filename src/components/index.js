import Auth from "components/Authentication/Auth";
import Pokedex from "components/Pokedex/Pokedex";
import Roster from "components/Roster/Roster";
import Battle from "components/Battle/Battle";
import CreateMonster from "components/CreateMonster/CreateMonster";
import News from "components/News/News";

const Elements = [
  {
    path: "authenticate",
    element: <Auth />,
  },
  {
    path: "pokedex",
    element: <Pokedex />,
  },
  {
    path: "roster",
    element: <Roster />,
  },
  {
    path: "battle",
    element: <Battle />,
  },
  {
    path: "create",
    element: <CreateMonster />,
  },
  {
    path: "news",
    element: <News />,
  },
];
export default Elements;
