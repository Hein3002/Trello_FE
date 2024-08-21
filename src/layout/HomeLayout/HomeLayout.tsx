import { Outlet } from 'react-router-dom'
import Header from '../../component/Header/Header'
import SideBar from '../../component/SideBar/SideBar'

const HomeLayout = () => {
  return (
    <>
      <Header/>
      <div className='row m-0'>
        <div className='container col-9'>
          <div className='mt-5 pt-5'>
            <SideBar />
            <div style={{marginLeft: '260px'}}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeLayout
