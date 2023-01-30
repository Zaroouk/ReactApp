import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";

function MenuComponent({setAuth}) {
  const handleClick = () => setAuth("")
  return (
    <div>
      <Menu>
        <MenuButton sx={{ borderRadius: "25px" }}>
          <Avatar src={"https://64.media.tumblr.com/25edb15f222c9220e8d01cc56ce5e607/tumblr_oiyo3a0gfa1udkksno3_1280.png"} />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleClick}>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default MenuComponent;
