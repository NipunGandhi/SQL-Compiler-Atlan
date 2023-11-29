import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

const getIcon = () => (
  <FontAwesomeIcon
    icon={faChalkboardUser}
    style={{ fontSize: "24px", color: "orange" }}
  />
);

export const links = [
  { icon: getIcon(), path: "/" },
  { icon: getIcon(), path: "/aboutMe" },
  { icon: getIcon(), path: "/guide" },
  { icon: getIcon(), path: "/techStack" },
  { icon: getIcon(), path: "/extra" },
];
