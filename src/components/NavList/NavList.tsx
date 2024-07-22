import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";

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
    {id: 3, label: 'Expired Tasks', link: '/Expired', icon: <FaRegClock className="size-5"/>}
  ]
  return (
    <div className="mt-24">
        <div>Link1</div>
        <div>Link2</div>
        <div>Link3</div>
    </div>
  )
}

export default NavList