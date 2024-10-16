import Logo from "./components/logo";
import HeaderNav from "./components/headerNav";
import Profile from "./components/Profile";

export default function Home() {
  return (
  <div className="bg-white">
  <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-white" aria-label="Global">
    <div className="flex lg:flex-1">
        <Logo/>
    </div>
    <div className="hidden lg:flex lg:gap-x-12 bg-white">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-500">Home</a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-600">Tours</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <HeaderNav/>
    </div>
  </nav>
  </header>
  <div className="bg-white">
      <Profile/>
  </div>
  </div>
  );
}
