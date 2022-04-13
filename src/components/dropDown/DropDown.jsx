import "./DropDown.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Text, Row } from "@nextui-org/react";

export const DropDown = () => {
  const [isActive, setIsActive] = useState(false);

  const closeDropdown = () => setIsActive(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <Row css={{ padding: "0 20px" }}>
          <Text color="$gray200" weight="semibold">
            Categorías
          </Text>
          <Text
            css={{ margin: "5px" }}
            color="$gray200"
            size={14}
            className="fas fa-caret-down"
          ></Text>
        </Row>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <Link to={"/categoria/tecnologia"}>
            <div onClick={closeDropdown} className="dropdown-item">
              <Text
                css={{ padding: "0 20px" }}
                color="$gray200"
                weight="semibold"
              >
                Tecnología
              </Text>
            </div>
          </Link>
          <Link to={"/categoria/hogar"}>
            <div onClick={closeDropdown} className="dropdown-item">
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
