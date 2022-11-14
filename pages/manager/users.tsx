import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Datatable, Row } from "../../components/manager/Datatable";
import { User } from "../../src/app/User/GetUser/GetUserRepository";

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/user`);
  const users: User[] = res.data

  return {
    props: {
      users
    }
  }
}

export default function Users({users}) {

  return (
    <>
    <Head>
      <title>Usuários</title>
    </Head>
    <Datatable title="Usuários" columns={["imagem", "email", "admin"]}>
      {users.map((user: User) => (
        <tr key={user.id}>
          <Row>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10">
                <img
                  className="w-full h-full rounded-full"
                  src={
                    user.image
                      ? user.image
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  alt={user.name}
                />
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
              </div>
            </div>
          </Row>
          <Row>
            <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
          </Row>
          <Row>
            <span
              className={`relative inline-block px-3 py-1 font-semibold leading-tight
              ${user.isAdm ? "text-green-900" : "text-red-900"}
            `}
            >
              <span
                aria-hidden
                className={`absolute inset-0  opacity-50 rounded-full 
                ${user.isAdm ? "bg-green-200" : "bg-red-200"}
              `}
              ></span>
              <span className="relative">{user.isAdm ? "Sim" : "Não"}</span>
            </span>
          </Row>
        </tr>
      ))}
    </Datatable>
    </>
  );
}
