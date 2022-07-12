import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import CreateIcon from "@mui/icons-material/Create";

export const mainNavBarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "Authenticate",
    route: "authenticate",
  },
  {
    id: 1,
    icon: <CatchingPokemonIcon />,
    label: "Pokedex",
    route: "pokedex",
  },

  {
    id: 2,
    icon: <GroupsIcon />,
    label: "Roster",
    route: "roster",
  },
  {
    id: 3,
    icon: <SportsMmaIcon />,
    label: "Battle",
    route: "battle",
  },
  {
    id: 2,
    icon: <CreateIcon />,
    label: "Create Monster",
    route: "create",
  },
  {
    id: 5,
    icon: <NewspaperIcon />,
    label: "News",
    route: "news",
  },
];
