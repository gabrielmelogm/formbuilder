import Head from "next/head";

import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai"

export default function Home() {
  const socialButtons = [
    {
      name: "Github",
      icon: <AiFillGithub />,
      action: () => alert("Github"),
      disabled: false
    },
    {
      name: "Google",
      icon: <AiOutlineGoogle />,
      action: () => alert("Google"),
      disabled: true
    },
  ]

  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
    <main className="w-full relative h-screen py-40 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <img
                  src={'/img/logo-maximize.png'}
                  loading="lazy"
                  className="w-10"
                  alt="tailus logo"
                />
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Faça seu login
                </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                {
                  socialButtons.map((button, index) => (
                    <button
                      key={index}
                      onClick={button.action}
                      className="
                        group h-12 px-6 border-2 border-gray-300 rounded-full
                        enabled: cursor-pointer transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100
                        disabled:opacity-50 cursor-not-allowed hover:border-gray-300
                      "
                      disabled={button.disabled}
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <span className="absolute left-0 w-5 text-2xl">
                          {button.icon}
                        </span>
                        <span 
                          className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base"
                        >
                          {`Continue with ${button.name}`}
                        </span>
                      </div>
                    </button>
                  ))
                }
              </div>

              <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                <p className="text-xs">
                  Form builder para o <strong>challenger meet</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
