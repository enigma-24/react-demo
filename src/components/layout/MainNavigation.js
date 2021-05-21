import { Link } from 'react-router-dom';

const MainNavigation = () => (
  <header>
    <div>React Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>Add NewMeetup</Link>
        </li>
        <li>
          <Link to='/favourites'>My Favourites</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
