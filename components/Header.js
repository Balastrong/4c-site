import Link from "next/link";

const Navbar = () => {
  return (
    <header className="p-[3em] my-[0] max-w-[840px]">
      <div className="container">
        <nav className="flex items-start justify-between">
          <div className="flex flex-wrap items-center gap-6 md:gap-5">
            <Link href="/">
              <img
                className="w-[100%] max-w-[50px]"
                frameBorder="0"
                allowtransparency="true"
                src="https://raw.githubusercontent.com/FrancescoXX/4c-site/main/mediakit/4c-logo-circle.png"
              />
            </Link>
            <Link href="/contributors">
              <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                Active Members
              </button>
            </Link>

            <Link href="/Faq">
              <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                FAQ
              </button>
            </Link>

            <Link href="/projects">
              <button className="px-4 py-2 font-bold text-black bg-white rounded hov-bg-theme">
                Projects
              </button>
            </Link>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=FrancescoXX&repo=4c-site&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="120"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
