import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  return (
    <>
      <header>
        <nav className="container">
          <ul className="no-bullet menu align-center">
            <li className="">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>

      <footer>
        
      </footer>

    </>
  )
};

export default Layout;
