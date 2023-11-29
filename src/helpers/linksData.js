import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faAddressCard,
  faG,
  faLayerGroup,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const style = { fontSize: "24px", color: "orange" };

export const links = [
  {
    icon: <FontAwesomeIcon icon={faChalkboardUser} style={style} />,
    path: "/",
  },
  {
    icon: <FontAwesomeIcon icon={faAddressCard} style={style} />,
    path: "/aboutMe",
  },
  { icon: <FontAwesomeIcon icon={faG} style={style} />, path: "/guide" },
  {
    icon: <FontAwesomeIcon icon={faCode} style={style} />,
    path: "/techStack",
  },
  {
    icon: <FontAwesomeIcon icon={faLayerGroup} style={style} />,
    path: "/extra",
  },
];
