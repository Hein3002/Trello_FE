import { Outlet } from 'react-router-dom'
import SideBarWork from '../../component/SideBar/SideBarWork'
import Header from '../../component/Header/Header'

const BoardLayout = () => {
  return (
    <>
      <Header />
      <div className='vh-100 pt-2 overflow-y-hidden' style={{ backgroundColor: "hsla(206, 13.7%, 10%, 0.9)" }}>
        <SideBarWork />
        <div style={{ marginLeft: "260px"}} className='overflow-y-hidden'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default BoardLayout
