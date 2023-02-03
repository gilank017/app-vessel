import '../../static/css/sidebar.css'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import DashboardLogo from '../../static/img/icon/Dashboard.svg'
import DashboardActiveLogo from '../../static/img/ActiveIcon/Dashboard.svg'
import CalendarLogo from '../../static/img/icon/Calendar.svg'
import CalendarActiveLogo from '../../static/img/ActiveIcon/Calendar.svg'
import GlobeLogo from '../../static/img/icon/Globe.svg'
import GlobeActiveLogo from '../../static/img/ActiveIcon/Globe.svg'
import ShipLogo from '../../static/img/icon/Ship.svg'
import ShipActiveLogo from '../../static/img/ActiveIcon/Ship.svg'
import CrewLogo from '../../static/img/icon/Crew.svg'
import CrewActiveLogo from '../../static/img/ActiveIcon/Crew.svg'
import SettingLogo from '../../static/img/icon/Setting.svg'
import SettingActiveLogo from '../../static/img/ActiveIcon/Setting.svg'
import UserLogo from '../../static/img/icon/User.svg'
import UserActiveLogo from '../../static/img/ActiveIcon/User.svg'

import WeatherImg from '../../static/img/Weather.png'

const Sidebar = (props) => {
  const router = useLocation()
  const showSidebar = props.showSidebar
  const menu = [
    {
      title: '',
      icon: DashboardLogo,
      ActiveIcon: DashboardActiveLogo,
      route: '/dashboard'
    },
    {
      title: 'Schedule',
      icon: CalendarLogo,
      ActiveIcon: CalendarActiveLogo,
      route: '/schedule',
    },
    {
      title: 'Vessel Activity',
      icon: GlobeLogo,
      ActiveIcon: GlobeActiveLogo,
      route: '/activity',
    },
    {
      title: 'Vessel',
      icon: ShipLogo,
      ActiveIcon: ShipActiveLogo,
      route: '/vessel',
    },
    {
      title: 'Crewlist',
      icon: CrewLogo,
      ActiveIcon: CrewActiveLogo,
      route: '/crew',
    },
    {
      title: 'Maintenance',
      icon: SettingLogo,
      ActiveIcon: SettingActiveLogo,
      route: '/setting',
    },
    {
      title: 'User',
      icon: UserLogo,
      ActiveIcon: UserActiveLogo,
      route: '/profile',
    },
  ]

  const menuList = menu.map((val, index) => {
    return (
      <li key={index} className={val.route === router.pathname ? 'menu-list active-menu': 'menu-list'}>
        <Link className={val.route === router.pathname ? 'active-text': 'link-text'} to={val.route}>
          <div className='d-flex'>
            <Image src={val.route === router.pathname ? val.ActiveIcon : val.icon} style={{ marginRight: '16px' }} />
            <div>{val.title}</div>
          </div>
        </Link>
        
      </li>
    )
  })

  return(
    <div className={showSidebar === true ? 'sidebar vertical-menu': 'no-sidebar'} >
      <div className={showSidebar === true ? 'sidebar-menu': 'd-none'}>
        <div className="sidebar-wrapper">
          <ul className='menu-style'>
            {menuList}
          </ul>
          <div className="weather">
            <div style={{ fontWeight: 'bold', color: '#ffff', position: 'absolute', bottom: '23rem', left: '3.5rem' }}>Jakarta, Indonesia</div>
            <Image src={WeatherImg} className="weather-logo"/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar