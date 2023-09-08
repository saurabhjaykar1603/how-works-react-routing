export default function Navbar() {
  return (
    <>
      <nav className="bg-blue-500 py-6">
        <div className="container mx-auto">
          <ul className="flex space-x-6   text-2xl ">
            <li>
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
