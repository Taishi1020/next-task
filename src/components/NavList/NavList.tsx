import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

interface NaveItemType {
  id: number;
  label: string
  link: string
  icon: React.ReactNode
}

const NavList = () => {
  const naveList: NaveItemType[] = [
    {id: 1, label: 'All Tasks', link: '/', icon: <FaTasks className="size-5"/>},
    {id: 2, label: 'Completexd Tasks', link: '/completed', icon: <FaRegCheckSquare className="size-5"/>},
    {id: 3, label: 'Expired Tasks', link: '/expired', icon: <FaRegClock className="size-5"/>}
  ]
  return (
    <div className="mt-24">
        {naveList.map((item) => (
          <NavItem key={item.id} label={item.label} link={item.link} icon={item.icon}/>
        ))}
    </div>
  )
}

export default NavList