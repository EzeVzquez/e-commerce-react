import { Link } from "react-router-dom";

export const NavBarMenu = ({classname, onClickHide})=> {

return(
    <ul className={classname}>
            <li className="nav-menu_item">
              <Link
                className="nav-menu_item--link"
                to={"/"}
                onClick={onClickHide}
              >
                <p className="nav-text nav-text_menu">Inicio</p>
              </Link>
            </li>
            <li className="nav-menu_item">
              <Link
                className="nav-menu_item--link"
                to={"/categoria/tecnologia"}
                onClick={onClickHide}
              >
                <p className="nav-text nav-text_menu">Tecnología</p>
              </Link>
            </li>
            <li className="nav-menu_item">
              <Link
                className="nav-menu_item--link"
                to={"/categoria/hogar"}
                onClick={onClickHide}
              >
                <p className="nav-text nav-text_menu">Hogar</p>
              </Link>
            </li>
          </ul>
)

}