import { signOut, useSession } from "next-auth/react";
import Head from "next/head";

export default function Manager() {
  const { data: session } = useSession() as any

  return (
    <>
      <Head>
        <title>Manager</title>
      </Head>
      <h1>{`Seja bem vindo, ${session?.user.name}`}</h1>
      <h2>{`Adm: ${session?.user?.isAdm}`}</h2>
      <button 
        onClick={() => signOut()}
        className="py-2 px-4 bg-purple-500 text-white rounded">
        Sair
      </button>
    </>
  )
}
