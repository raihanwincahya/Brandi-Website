import { useState } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

function HeaderIcon({ inactiveIcon, activeIcon }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={() => setIsActive(!isActive)}>
      {isActive ? activeIcon : inactiveIcon}
    </div>
  );
}

export default function Favourite() {
    return (
    <>
      <HeaderIcon
        inactiveIcon={<IoHeartOutline color="#DE6B6B" size={18} />}
        activeIcon={<IoHeart color="#DE6B6B" size={18} />}
      />
    </>
  );
}