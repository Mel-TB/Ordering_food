import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../../services/apiRestaurant";

import MenuItem from "../MenuItems/MenuItem";
const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((item) => (
        <MenuItem
          pizza={item}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
