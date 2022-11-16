import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export function Sidebar() {
  const { data: session } = useSession() as any;

  const router = useRouter()

  return (
    <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
      <div className="flex h-screen flex-col justify-between pt-2 pb-6">
        <div>
          <div className="inline-flex items-center gap-3 w-max p-1.5 rounded-full text-gray-600">
            <img
              src={
                session?.user.image
                  ? session?.user.image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              className="w-10"
              alt=""
            />
            <span>{session?.user.name}</span>
          </div>
          <ul className="mt-6 space-y-2 tracking-wide">
            <li className="min-w-max">
              <span
                onClick={() => router.push("/manager")}
                className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white hover:cursor-pointer"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-cyan-400 dark:fill-slate-600"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span className="-mr-1 font-medium">Criar form</span>
              </span>
            </li>
            <li className="min-w-max">
              <span
                onClick={() => router.push('/manager/users')}
                className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600 hover:cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clip-rule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Usuários</span>
              </span>
            </li>
            {/* <li className="min-w-max">
              <a
                href="#"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Reports</span>
              </a>
            </li>
            <li className="min-w-max">
              <a
                href="#"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Other data</span>
              </a>
            </li>
            <li className="min-w-max">
              <a
                href="#"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    fill-rule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Finance</span>
              </a>
            </li> */}
          </ul>
        </div>
        <div className="w-max -mb-3">
          <button
            onClick={() => signOut()}
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:fill-cyan-600"
              fill="currentColor"
              x="0px"
              y="0px"
              viewBox="0 0 489.9 489.9"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M468.3,255.8c0.1-0.1,0.1-0.1,0.2-0.2c0.3-0.4,0.6-0.7,0.8-1.1c0.1-0.1,0.1-0.2,0.2-0.3c0.2-0.4,0.5-0.8,0.7-1.2
				c0-0.1,0.1-0.2,0.1-0.2c0.2-0.4,0.4-0.8,0.6-1.3c0-0.1,0-0.1,0.1-0.2c0.2-0.4,0.3-0.9,0.5-1.4c0-0.1,0-0.2,0.1-0.2
				c0.1-0.5,0.3-0.9,0.3-1.4c0-0.2,0-0.3,0.1-0.5c0.1-0.4,0.1-0.8,0.2-1.2c0.1-0.6,0.1-1.1,0.1-1.7c0-0.6,0-1.1-0.1-1.7
				c0-0.4-0.1-0.8-0.2-1.2c0-0.2,0-0.3-0.1-0.5c-0.1-0.5-0.2-0.9-0.3-1.4c0-0.1,0-0.2-0.1-0.2c-0.1-0.5-0.3-0.9-0.5-1.4
				c0-0.1,0-0.1-0.1-0.2c-0.2-0.4-0.4-0.9-0.6-1.3c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.4-0.4-0.8-0.7-1.2c-0.1-0.1-0.1-0.2-0.2-0.3
				c-0.3-0.4-0.5-0.8-0.8-1.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.4-0.4-0.7-0.9-1.2-1.3l-98.9-98.8c-6.7-6.7-17.6-6.7-24.3,0
				c-6.7,6.7-6.7,17.6,0,24.3l69.6,69.6H136.8c-9.5,0-17.2,7.7-17.2,17.1c0,9.5,7.7,17.2,17.2,17.2h276.8l-69.1,69.1
				c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5l98.3-98.3C467.5,256.6,467.9,256.2,468.3,255.8z"
                    />
                    <path
                      d="M110.7,34.3h128c9.5,0,17.2-7.7,17.2-17.1c0-9.5-7.7-17.2-17.2-17.2h-128C59.4,0,17.6,41.8,17.6,93.1v303.7
				c0,51.3,41.8,93.1,93.1,93.1h125.9c9.5,0,17.2-7.7,17.2-17.1c0-9.5-7.7-17.2-17.2-17.2H110.7c-32.4,0-58.8-26.4-58.8-58.8V93.1
				C52,60.6,78.3,34.3,110.7,34.3z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
