// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/facility">The Facility</Link>
        </li>
        <li>
          <Link href="/nights">Public Nights</Link>
        </li>
        <li>
          <Link href="/images">Images</Link>
        </li>
        <li><a href="https://www.cleardarksky.com/c/NePhilAprtPAkey.html" target="_blank" rel="noopener noreferrer">Weather Forecast</a></li>
        <li><a href="https://www.heavens-above.com/?lat=39.95395&lng=-75.18607&alt=25&loc=Lynch+Observatory&tz=EST" target="_blank" rel="noopener noreferrer">Satellite Predictions</a></li>
        <li><a href="https://www.physics.drexel.edu/observatory/skycal/2023.shtml" target="_blank" rel="noopener noreferrer">Sky Calendar</a></li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
