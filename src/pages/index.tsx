import { url } from "node:inspector";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="text-center px-3 lg:px-0">
        <div>
          <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
            <span className="block text-indigo-600 xl:inline">Sim8085</span> <span className="block xl:inline">News &amp; Announcements</span>
          </h1>
          <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">Read all about what's going on with Sim8085.</p>
          <p className="leading-normal text-gray-500 text-base md:text-md lg:text-md mb-8">Sim8085 is a Simulator, Assembler and Debugger for Intel 8085 microprocessor.</p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <a href="/posts/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Read Posts
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="https://www.sim8085.com" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Go to app
                </a>
              </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full mx-auto justify-center">
        <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl" style={{ maxWidth: "1283px" }}>
          <img src="/images/sim8085-screenshot.png"/>
        </div>
      </div>
    </Layout>
  );
}
