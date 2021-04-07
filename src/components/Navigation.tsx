import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const activeLinkClasses = "inline-block py-2 px-4 text-gray-900 font-bold no-underline";
  const inactiveLinkClasses = "inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4";
  return (
    <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">

			<div className="pl-4">
				<a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="/">
					Sim8085 <span className="text-indigo-400">Blog</span>
				</a>
			</div>

			<div className="block lg:hidden pr-4">
				<button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
					</svg>
				</button>
			</div>

			<div className="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 md:bg-transparent z-20 bg-gray-100 hidden" id="nav-content">
				<ul className="list-reset lg:flex justify-end flex-1 items-center">
					<li className="mr-3">
						<a className={router.pathname.startsWith("/posts") ? activeLinkClasses : inactiveLinkClasses } href="/posts">Posts</a>
					</li>
				</ul>
			</div>
		</div>
    // <>
    //   <Burger active={active} onClick={() => setActive(!active)} />
    //   <div className={"container " + (active ? "active" : "")}>
    //     <ul>
    //       <li>
    //         <Link href="/">
    //           <a className={router.pathname === "/" ? "active" : null}>about</a>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/posts">
    //           <a
    //             className={
    //               router.pathname.startsWith("/posts") ? "active" : null
    //             }
    //           >
    //             blog
    //           </a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </>
  );
}
