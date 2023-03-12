import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
