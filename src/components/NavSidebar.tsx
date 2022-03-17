import './Nav-sidebar.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
// @ts-ignore
import Arrow from './Arrow.tsx';

const NavSidebar = ({ resourceUrl }) => {
  const [data, setData] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const [elements, setElements] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setData(response.data);
    })();
  }, []);

  useEffect(() => {

    // Set elements if there are not yet set
    if(!elements && data) {
      setElements({
        names: document.querySelectorAll<HTMLElement>(
          '.nav-sidebar__item-name'
        ),
        title: document.querySelector<HTMLElement>('.nav-sidebar__title'),
      });
    }

    // Execute code below only if elements rendered to prevent errors
    if(data && elements) {
      const {names, title} = elements; 
    
      names.forEach(handleNames);
      handleNames(title);
      // Show names a bit later during transition
      function handleNames(item) {
        if (isHidden) {
          item.style.display = 'none';
        } else {
          setTimeout(() => {
            item.style.display = 'initial';
          }, 100);
        }
      }
    }
   
  });

  const handleArrowClick = () => {
    setIsHidden(!isHidden);
  };

  const renderItems = () => {
    return data.map((item) => {
      return (
        <li className="nav-sidebar__item">
          <a
            href={item.name.toLowerCase()}
            className="nav-sidebar__item-wrapper"
          >
            <i className={`bx bx-${item.logoName} nav-sidebar__item-icon`}></i>
            <span className="nav-sidebar__item-name">{item.name}</span>
          </a>
        </li>
      );
    });
  };

  return (
    <nav className={`nav-sidebar ${isHidden ? 'is-hidden' : ''}`}>
      <Arrow handleClick={handleArrowClick} dir={isHidden ? 'right' : 'left'} />
      <header className="nav-sidebar__header">
        <div className="nav-sidebar__logo">logo</div>

        <div className="nav-sidebar__title">title</div>
      </header>
      <ul className="nav-sidebar__items">{data ? renderItems() : ''}</ul>
      <footer className="nav-sidebar__footer"></footer>
    </nav>
  );
};

export default NavSidebar;
