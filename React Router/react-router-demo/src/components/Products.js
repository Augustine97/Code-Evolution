import { Link, Outlet } from 'react-router-dom';
import './Products.css';
export const Products = () => {
  return (
    <>
      <div className='search'>
        <input type='search' placeholder='Search Products' />
      </div>
      <nav className='featured-new-div'>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </>
  );
};
