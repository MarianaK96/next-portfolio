import { motion } from "framer-motion";
import { NavWrapper, WordWrapper } from "./NavItem.styles";

const NavItem = ({ selected, value, onSelection }) => {
  // console.log(selected, value)
  return (
    <li onClick={onSelection}>
      <WordWrapper selected={selected}>{value}</WordWrapper>
      {selected && (
        <NavWrapper
          layoutId="outline"
          className="outline"
          initial={false}
          // animate={{ borderColor: color }}
          // transition={spring}
        />
      )}
    </li>
  );
};

export default NavItem;
