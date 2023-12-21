import Avatar from "react-avatar";
import logo from "../images/logo.svg";
import { useOutletContext } from "react-router-dom";

function NotFound() {
  const [isDarkMode, background] = useOutletContext();

  return (
    <>
      <div className={`h-screen flex items-center justify-center ${isDarkMode}`}>
        <div className="isolate px-6 lg:px-8">
          <div className="text-center">
            <Avatar className="h-8 w-auto mb-6" src={logo} alt="" />
            <p className="text-base font-semibold text-blue-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm 
              hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-blue-600"
              >
                Go back home
              </a>
            </div>
          </div>
          {background}
        </div>
      </div>
    </>
  );
}

export default NotFound;
