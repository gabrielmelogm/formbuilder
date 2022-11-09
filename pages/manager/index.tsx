import { signOut, useSession } from "next-auth/react";
import Head from "next/head";

export default function Manager() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Manager</title>
      </Head>
      <h1>{`Seja bem vindo, ${session?.user.name}`}</h1>
      <button 
        onClick={() => signOut()}
        className="py-2 px-4 bg-purple-500 text-white rounded">
        Sair
      </button>
    </>
  )
}
