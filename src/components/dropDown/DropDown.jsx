import "./DropDown.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Text } from "@nextui-org/react";

export const DropDown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <Text css={{ padding: "0 20px" }} color="$gray200" weight="semibold">
          Categorias
          <Text
            css={{ ml: "10px" }}
            color="$gray200"
            weight="semibold"
            className="fas fa-caret-down"
          ></Text>
        </Text>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <Link to={"/categoria/tecnologia"}>
            <div
              onClick={(e) => {
                setSelected(e.target.textConent);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              <Text
                css={{ padding: "0 20px" }}
                color="$gray200"
                weight="semibold"
              >
                Tecnologia
              </Text>
            </div>
          </Link>
          <Link to={"/categoria/hogar"}>
            <div
              onClick={(e) => {
                setSelected(e.target.textConent);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              <Text
                css={{ padding: "0 20px" }}
                color="$gray200"
                weight="semibold"
              >
                Hogar
              </Text>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
