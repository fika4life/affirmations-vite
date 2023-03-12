import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function SharedLayout() {
  return (
    <>
      <Navbar></Navbar>
      <main className="text-center container mx-auto my-16">
        <Outlet></Outlet>
      </main>
    </>
  );
}
