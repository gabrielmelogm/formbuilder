import { useSession } from "next-auth/react";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { AiOutlinePlusCircle, AiFillDelete } from "react-icons/ai";
import { Sidebar } from "../../components/manager/Sidebar";
import serialize from "form-serialize"

export default function Manager() {
  const { data: session } = useSession() as any;

  const [fieldNumber, setFieldNumber] = useState([1]);

  function addField() {
    return setFieldNumber(fieldNumber => [...fieldNumber, 1]);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const form = document.querySelector("#newform")
    const fieldsSerialize = serialize(form, { hash: true })
    let fields = {
      title: fieldsSerialize?.title,
      description: fieldsSerialize?.description,
      owner: session?.user.id,
    }
    fields["config"] = []
    // console.log(fields)
  }

  return (
    <>
      <Head>
        <title>Manager</title>
      </Head>
      <div className="inline-flex w-full">
        <Sidebar />
        <div className="content inline-flex flex-col items-start gap-2 my-0 mx-auto mt-10">
          <h1 className="text-2xl font-bold">Novo formulário</h1>
          <form id="newform" onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Título
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                  id="grid-first-name"
                  type="text"
                  name="title"
                  placeholder={`Formulário de ${session?.user.name}`}
                  required
                />
                {/* <p className="text-red text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Descrição
                </label>
                <input
                  className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-last-name"
                  name="description"
                  type="text"
                  placeholder="Meu formulário"
                />
              </div>
            </div>
            <h2 className="text-2xl font-medium">Campos</h2>
            {fieldNumber.map((field, index) => (
              <div
                key={index}
                className="fields -mx-3 md:flex mb-2 my-4
              "
              >
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    Nome
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-city"
                    type="text"
                    name="name"
                    placeholder="Ex: Nome usuário"
                    required
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    Tipo
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                      name="type"
                      id="grid-state"
                      required
                    >
                      <option value="">Selecione</option>
                      <option value="text">Texto</option>
                      <option value="number">Número</option>
                      <option value="email">Email</option>
                      <option value="password">Senha</option>
                    </select>
                    <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker top-4 right-1">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    Nº de caracteres
                  </label>
                  <input
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-zip"
                    type="number"
                    placeholder="Ex: 10"
                    name="maxLenght"
                  />
                </div>
                <button
                  className="text-xl inline-flex items-center"
                >
                  <div className="
                    mt-5 text-cyan-600 transition-all
                    hover:text-red-600
                  ">
                    <AiFillDelete />
                  </div>
                </button>
              </div>
            ))}
            <button
              onClick={addField}
              className="
                mt-2 w-full inline-flex items-center justify-center gap-2 bg-cyan-600 text-white font-medium text-base rounded p-2 transition-all
                hover:bg-cyan-700
              "
            >
              <span>Adicionar</span>
              <span>
                <AiOutlinePlusCircle />
              </span>
            </button>
            <div
                className="actions -mx-3 md:flex mb-2 my-4 px-3 inline-flex gap-2"
            >
              <button
                onClick={() => location.reload()}
                type="button"
                className="
                  md:w-1/2 px-3 bg-gray-200 rounded p-2 transition-all font-bold
                  hover:bg-gray-300
                ">
                Cancelar
              </button>
              <button 
                type="submit"
                className="
                  md:w-1/2 px-3 bg-green-600 rounded p-2 transition-all text-white font-bold
                  hover:bg-green-700
                ">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
