import './Nav-sidebar.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import 'boxicons';

const NavSidebar = ({resourceUrl}) => {

  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
			const response = await axios.get(resourceUrl);
			setData(response.data)
		})();
  }, [resourceUrl])

  const renderItems = () => {
     
    return data.map((item) => {
      return(
      <li className='nav-sidebar__item'>
        <i className={`bx bx-${item.logoName}`}></i>
        <a href={item.name} className='nav-sidebar__item-link'>{item.name}</a>
      </li>
      )
    })
  }

  return(
    <nav className='nav-sidebar'>
      <header className='nav-sidebar__header'>
        <div className="nav-sidebar__logo">
        </div>

        <div className="nav-sidebar__title">
          sdfasdgsd
        </div>
      </header>
      <ul className="nav-sidebar__items">
        {data ? renderItems() : ''}
      </ul>
    </nav>
    )
} 

export default NavSidebar;