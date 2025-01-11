import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import MessageBubble from "~/components/message-bubble";
import GoodButton from "~/components/ui/good-button";
import { ArrowRight, Calculator, NotepadText, Ratio, SeparatorHorizontal } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Phordan – Mograph, AE, Music and more" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const jsonCode = `const data = {
  [
    {
      "key": "value",
      "name": "Phil",
      "age": 30,
    },
    ...,
  ]
}`

const people = [
  {
    name: "Phillip Jordan",
    role: "Motion Designer, Developer, Musician",
    imageUrl: "assets/images/phordan-bw-sm.jpg",
    linkedinUrl: "https://www.linkedin.com/in/phordan/",
    xUrl: "https://x.com/_phordan",
    scUrl: "https://soundcloud.com/phordan",
  },
];

export default function Index() {
  return (
    <div className="flex flex-col h-screen items-center justify-start bg-linear-180 to-30% dark:from-sky-200/5 to-gray-200 dark:to-gray-800/7">
        <div>

        <div className="py-4 ">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="grid grid-cols-1 grid-rows-1 justify-items-center w-full select-none">
                <img className="relative col-start-1 col-span-1 row-start-1 row-span-1 invisible dark:visible  size-12 mb-5 starting:opacity-0 starting:-translate-y-1.5 translate-y-0 opacity-66 transition ease-out duration-444 hover:opacity-100"  src="assets/images/phordanIconDark.svg"></img>
                <img className="relative col-start-1 col-span-1 row-start-1 row-span-1 visible dark:invisible size-12 mb-5 starting:opacity-0 starting:-translate-y-1.5 translate-y-0 opacity-66 transition ease-out duration-444 hover:opacity-100" src="assets/images/phordanIconLight.svg"></img>
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-balance dark:text-slate-300 text-gray-600 sm:text-2xl">
                phordan - <span className="font-normal">Mograph, AE, Music and more</span>
              </h2>
              <p className="mt-6 text-sm/6 ms:text-base text-balance dark:text-gray-300 tracking-wide text-gray-600">
                This is my site where I share my thoughts, ideas, and resources about design, animation, development, music production, and more.
              </p>
            </div>
            <ul
              role="list" 
              className="mx-4 sm:mt-6 mt-8 grid lg:max-w-2xl sm:max-w-none grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-1 lg:mx-0 lg:grid-cols-1"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <img alt="" src={person.imageUrl} className="mx-auto my-0 size-23 rounded-full mix-blend-luminosity" />
                  <h3 className="mt-1 text-base/7 font-semibold tracking-tight dark:text-gray-200 text-slate-500">{person.name}</h3>
                  <p className="text-sm/6 text-gray-400">{person.role}</p>
                  <ul role="list" className="mt-3 flex justify-center gap-x-4">
                    <li>
                      <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">X</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                          <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={person.scUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">SoundCloud</span>
                        <SoundCloudIcon  />
                      </a>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        </div>
        
        <div className="dark:bg-gray-800 bg-gray-200 pb-3 sm:pb-4 w-full mt-4">
        <div className="bg-linear-0 from-white/32 via-white/27 text-gray-600 dark:from-slate-100/2 dark:via-slate-50/1 via-12% to-transparent to-85% py-3" />
        <div className="bg-linear-180 from-slate-600/6 via-slate-700/2 text-gray-600 dark:from-slate-950/17 dark:via-slate-950/11 via-14% to-transparent to-40% border-t border-white/13 dark:border-sky-50/0.5  dark:text-slate-200 font-light tracking-wider text-center text-2xl pt-14 pb-2.5">
          <h3>Treats, Tools, and Utilities</h3>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] auto-rows-auto grid-wrap-auto w-full items-center gap-6 py-4">
          <div className="col-span-1 col-start-2 flex flex-wrap grid-flow-col gap-6 justify-center">
            <div className="relative h-full col-span-1 max-w-[450px] border-t py-2 dark:border-slate-400/20 border-slate-600/28">
              <h3 className="pb-2 text-xl text-gray-700 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-300 transition">After Effects</h3>
              <Link to="/ios-ae" className="group **:transition **:duration-300 **:ease-in-out saturate-34 hover:saturate-100 transition duration-300 ease-in-out **:select-none hover:**:data-bubble:text-gray-950">
                <div className="flex flex-col items-center gap-4 p-8 rounded  bg-gray-50/48 dark:bg-gray-50/77 dark:hover:bg-white/98 not-dark:group-hover:bg-gray-50/71 border border-gray-100 group-hover:border-white dark:shadow-lg hover:shadow-lg hover:not-dark:shadow-black/3 not-dark:shadow-black/0 starting:translate-y-0 hover:-translate-y-0.5 max-w-[450px]">
                  <MessageBubble><h2 className="text-center text-base/7 font-semibold">Phordan's</h2></MessageBubble>
                  <MessageBubble type="incoming">
                    <p data-bubble className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-slate-700 text-balance  sm:text-5xl">
                      iOS <span className="font-light">✕ AE</span>
                    </p>
                  </MessageBubble>
                  <h2 className="text-center text-base/7 text-gray-500 font-semibold leading-5 group-hover:text-gray-800">
                    After Effects Expression <br /> Template / Toolkit
                  </h2>
                </div>
              </Link>
              <Link to="/ios-ae/docs">
                <GoodButton className="font-mono grid grid-cols-[auto_1fr] items-center mt-4 gap-4 max-w-[450px] dark:border-slate-600/30 dark:from-slate-950/49 dark:to-slate-950/80">
                  <NotepadText className="inline-block col-start-1 col-span-1 w-11 h-11 pb-1 ml-1 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 transition" />
                  <p className="col-start-2 col-span-1 dark:text-slate-400 dark:group-hover:text-slate-900 duration-88">iOS UI After Effects Toolkit Documentation</p>
                </GoodButton>
              </Link>
            </div>
            <div className="relative h-full col-span-1 max-w-[450px] border-t py-2 dark:border-slate-400/20 border-slate-600/28">
              <h3 className="pb-2 text-xl text-gray-700 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-300 transition">Misc Utils</h3>
              
              <div className="grid grid-flow-row gap-3">
                <Link to="/json-creator" className="group **:transition **:ease-in-out saturate-66 hover:saturate-100 transition duration-300 ease-in-out **:select-none">
                  <div className="grid items-center gap-4 px-6 py-4 rounded bg-slate-100/76  dark:bg-gray-950/45 dark:group-hover:bg-gray-950/65 group-hover:bg-slate-200/24 border border-gray-500/15 not-dark:border-slate-200  group-hover:not-dark:border-gray-100 dark:shadow-lg hover:shadow-lg group hover:not-dark:shadow-black/3 not-dark:shadow-black/0 starting:translate-y-0 hover:-translate-y-0.5">
                    
                      <div className="grid grid-flow-col grid-cols-2 gap-8 place-items-center">
                    <div className="relative pr-2">
                      <h2 className="italic text-center text-base/7 font-semibold dark:text-slate-500 dark:group-hover:text-slate-300">Phordan's</h2>
                        <p className="mt-2 mb-1 pb-5 text-center text-2xl font-light tracking-tight text-balance dark:text-gray-300 group-hover:text-blue-950 dark:group-hover:text-blue-200 sm:text-2xl">
                            Quick .json Creator (wip)
                          </p>
                    </div>
                        <pre className="overflow-x-auto p-4 text-xs/3.5 text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-300  group-hover:text-slate-700 border-l border-gray-700">
                          {jsonCode}
                        </pre>
                      </div>
                    
                    <h2 className="text-center text-xs/4 dark:text-gray-300 dark:group-hover:text-blue-200 text-slate-500 group-hover:text-slate-700 text-balance w-auto">
                      Quickly format simple data, without worrying about brackets and indenting.
                    </h2>
                  </div>
                </Link>
                <Link to="/aspect-ratio-calculator" className="group **:transition **:duration-300 **:ease-in-out saturate-67 hover:saturate-100 transition duration-300 ease-in-out **:select-none">
                  <div className="grid items-center gap-4 px-8 py-4 rounded bg-slate-100/76  dark:bg-slate-950/35  dark:group-hover:bg-gray-950/65 group-hover:bg-purple-200/9 border border-gray-500/15 not-dark:border-slate-200 group-hover:not-dark:border-gray-100 dark:shadow-lg hover:shadow-lg hover:not-dark:shadow-black/3 not-dark:shadow-black/0 starting:translate-y-0 hover:-translate-y-0.5">
    
                    <div className="grid grid-flow-col grid-cols-2 gap-4 place-items-center">
                      <div className="col-span-1 relative">
                        <h2 className="italic text-center text-base/7 font-semibold dark:text-slate-500 dark:group-hover:text-slate-300">Phordan's</h2>
                        <p className="mt-2 mb-1 pb-5 max-w-lg text-center text-2xl font-light tracking-tight text-balance dark:text-gray-300 group-hover:text-purple-950/80 dark:group-hover:text-violet-300 sm:text-2xl">
                          Aspect Ratio Calculator
                        </p>
                      </div>
                      <div className="grid dark:text-slate-400 text-slate-700  "><SeparatorHorizontal className="-translate-x-7 size-7" /> <Ratio className="translate-x-14 size-11 " /> <Calculator className="size-8 "/></div>
                    </div>
    
                    <h2 className="text-center text-xs/7 dark:text-violet-200/85 group-hover:text-slate-900 group-hover:dark:text-violet-50 text-slate-500 leading-5 text-balance w-auto">
                      Convert and calulate aspect ratios and sizes from any direction.
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative h-full col-span-1 max-w-[450px] border-t py-2 dark:border-slate-400/20 border-slate-600/28">
              <h3 className="pb-2 text-xl text-gray-700 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-300 transition">Fun Stuff</h3>

              <div className="grid grid-flow-row gap-3">
                <Link to="/shine-cursor" className="group **:transition **:ease-in-out saturate-66 hover:saturate-100 transition duration-300 ease-in-out **:select-none">
                  <div className="grid items-center gap-4 px-6 py-4 rounded bg-slate-100/76  dark:bg-gray-950/45 dark:group-hover:bg-gray-950/65 group-hover:bg-slate-200/24 border border-gray-500/15 not-dark:border-slate-200  group-hover:not-dark:border-gray-100 dark:shadow-lg hover:shadow-lg group hover:not-dark:shadow-black/3 not-dark:shadow-black/0 starting:translate-y-0 hover:-translate-y-0.5 saturate-58 hover:saturate-100">

                    <div className="grid grid-flow-col grid-cols-2 gap-8 place-items-center">
                      <div className="relative pr-2">
                        <h2 className="italic text-center text-base/7 font-semibold dark:text-slate-500 dark:group-hover:text-slate-300">Phordan's</h2>
                        <p className="mt-2 mb-1 pb-5 text-center text-2xl font-light tracking-tight text-balance dark:text-gray-300 group-hover:text-sky-950 dark:group-hover:text-sky-200 sm:text-2xl">
                          "Shine" Cursors
                        </p>
                      </div>
                      <div className="grid grid-flow-col grid-rows-1 gap-2 items-center">
                        <img src="assets/images/aero_working.gif" className="h-8 invisible group-hover:visible col-span-1 col-start-1 row-span1 row-start-1 blur-[0.25px]"/>
                        <img src="assets/images/aero_working_static.gif" className="h-8 visible group-hover:invisible col-span-1 col-start-1 row-span1 row-start-1 blur-[0.7px]" />

                        <ArrowRight className=" w-5 h-5 pb-1 ml-1 text-gray-500 group-hover:text-gray-700 transition translate-y-1 -translate-x-1" />
                        <img src="assets/images/shine_wait_point.gif" className="h-8 invisible group-hover:visible col-span-1 col-start-3 row-span1 row-start-1 blur-[0.25px]"/>
                        <img src="assets/images/shine_wait_point_static.gif" className="h-8 visible group-hover:invisible col-span-1 col-start-3 row-span1 row-start-1 blur-[0.7px]" />

                      </div>
                    </div>

                    <h2 className="text-center text-xs/4 dark:text-gray-300 dark:group-hover:text-blue-200 text-slate-500 group-hover:text-slate-700 text-balance w-auto">
                      My replacement of Windows cursor's "wait" spinners with Fox's reflector from <i>Super Smash Bros. Melee for the Nintendo Gamecube</i>.
                    </h2>
                  </div>
                </Link>
                
              </div>
            </div>
            <div className="relative h-full col-span-1 max-w-[450px] w-full border-t py-2 border-slate-400/0"></div>
          </div>
        </div>
        <div className="bg-linear-0 from-white/38 via-white/31 text-gray-600 dark:from-slate-100/5 dark:via-slate-50/3 via-12% to-transparent to-85% py-3 border-b not:dark:border-slate-100/71" />
        <div className="px-3 md:px-3 sm:px-3 border-b border-gray-200/90 dark:border-gray-200/10 dark:bg-gray-900/43 bg-gray-50/26 py-3">
          <h2 className=" text-slate-900 dark:text-slate-300/79 text-xl font-light  md:px-3 sm:text-2xl pt-4 place-self-center">Connect</h2>
          <div className="p-4">
            <SocialLinkGroup links={socialLinks} />
          </div>
        </div>


        </div>

      </div>
  );
}

function SocialLinkGroup({ links = socialLinks }: { links: typeof socialLinks }) {
  return (
    <div className="py-1 prose justify-self-center lg:min-w-xl">
      <ul className="*:hover:bg-black/6 *:py-2 rounded-lg *:transition">

        {links.map((link) => (
          <li>
            <Link to={link.href} className="group **:transition **:ease-in-out saturate-66 hover:saturate-100 transition duration-300 ease-in-out **:select-none py-2 px-1">
              <span className="hover:text-sky-800 dark:hover:text-slate-100 dark:text-slate-300 underline underline-offset-3 decoration-slate-300/30">{link.platform}</span> 
              </Link>
          </li>
        ))}
      </ul>
    </div>
  )};

const SoundCloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="size-5"><path fill="currentColor" d="M10.464 8.596c.265 0 .48 2.106.48 4.704l-.001.351c-.019 2.434-.226 4.353-.479 4.353c-.256 0-.465-1.965-.48-4.44v-.352c.005-2.557.218-4.616.48-4.616m-1.664.96c.259 0 .47 1.8.48 4.054v.34c-.01 2.254-.221 4.054-.48 4.054c-.255 0-.464-1.755-.48-3.97v-.34l.002-.34c.025-2.133.23-3.798.478-3.798m-1.664 0c.255 0 .464 1.755.48 3.97v.34l-.002.34c-.025 2.133-.23 3.798-.478 3.798c-.259 0-.47-1.8-.48-4.054v-.34c.01-2.254.221-4.054.48-4.054m-1.664.576c.265 0 .48 1.762.48 3.936l-.002.335c-.02 2.017-.227 3.601-.478 3.601c-.262 0-.474-1.717-.48-3.852v-.168c.006-2.135.218-3.852.48-3.852M3.808 11.86c.265 0 .48 1.375.48 3.072v.158c-.013 1.623-.223 2.914-.48 2.914c-.265 0-.48-1.375-.48-3.072v-.158c.013-1.623.223-2.914.48-2.914m10.784-4.8c2.58 0 4.72 1.886 5.118 4.355q.444-.129.93-.13a3.36 3.36 0 0 1 .063 6.718l-.063.001h-8.16a.77.77 0 0 1-.768-.768V7.933a5.16 5.16 0 0 1 2.88-.873M2.144 11.668c.265 0 .48 1.333.48 2.976v.156c-.014 1.57-.223 2.82-.48 2.82c-.26 0-.473-1.29-.48-2.898v-.078c0-1.643.215-2.976.48-2.976m-1.664.96c.265 0 .48.946.48 2.112v.131c-.016 1.105-.225 1.981-.48 1.981c-.265 0-.48-.946-.48-2.112v-.131c.016-1.105.225-1.98.48-1.98" /></svg>
);

const socialLinks = [
  {
    href: "https://soundcloud.com/phordan",
    platform: "SoundCloud",
    icon: SoundCloudIcon
  },
  {
    href: "https://bandcamp.com/phordan",
    platform: "Bandcamp",
  },
  {
    href: "https://phordan.bsky.social",
    platform: "Bluesky",
  },
  {
    href: "https://x.com/_phordan",
    platform: "X (Formerly Known as Twitter)",
  },
  {
    href: "https://youtube.com/phordan",
    platform: "YouTube"
  },
  {
    href: "https://www.instagram.com/phordan",
    platform: "Instagram",
  },
  {
    href: "https://github.com/phordan",
    platform: "GitHub",
  },
  {
    href: "phil@phordan.com",
    platform: "Email",
  }
];

const resources = [
  {
    href: "https://remix.run/start/quickstart",
    text: "Quick Start (5 min)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://remix.run/start/tutorial",
    text: "Tutorial (30 min)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M4.561 12.749L3.15503 14.1549M3.00811 8.99944H1.01978M3.15503 3.84489L4.561 5.2508M8.3107 1.70923L8.3107 3.69749M13.4655 3.84489L12.0595 5.2508M18.1868 17.0974L16.635 18.6491C16.4636 18.8205 16.1858 18.8205 16.0144 18.6491L13.568 16.2028C13.383 16.0178 13.0784 16.0347 12.915 16.239L11.2697 18.2956C11.047 18.5739 10.6029 18.4847 10.505 18.142L7.85215 8.85711C7.75756 8.52603 8.06365 8.21994 8.39472 8.31453L17.6796 10.9673C18.0223 11.0653 18.1115 11.5094 17.8332 11.7321L15.7766 13.3773C15.5723 13.5408 15.5554 13.8454 15.7404 14.0304L18.1868 16.4767C18.3582 16.6481 18.3582 16.926 18.1868 17.0974Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://remix.run/docs",
    text: "Remix Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
