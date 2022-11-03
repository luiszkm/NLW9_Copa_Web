import Image from "next/image"
import nlwPreview from "../assets/app-nlw-copa-preview.png"
import nlwLogo from "../assets/logo.svg"
import iconCheck from "../assets/icon-check.svg"
import usersAvatar from "../assets/users-avatar-example.png"
import { ApiError } from "next/dist/server/api-utils"
import { api } from "../lib/axios"
import { log } from "console"
import { appendFile } from "fs/promises"
import { FormEvent, useState } from "react"


interface HomeProps {
  poolCount?: number;
  guessCount?: number;
  userCount?: number;
}


export default function Home(props: HomeProps) {
  const [poolTitle, setPoolTitle] = useState('')



  async function handleCreatePool(e: FormEvent) {
    e.preventDefault()

    try {
      const response = await api.post('pools', {
        title: poolTitle
      })

      const { code } = response.data

      await navigator.clipboard.writeText(code)
      setPoolTitle('')
      alert(`Bolão ${code} criado com sucesso!O código foi copiado para area de transferência!`)

    } catch (error) {
      alert('Falha ao criar, tente novamente')
      console.error(error)
    }

  }




  return (
    <div className="h-screen max-w-[1124px] mx-auto grid grid-cols-2 items-center gap-28 ">
      <main >
        <Image src={nlwLogo} alt="NLW Copa" />

        <h1 className="mt-10 text-white text-5xl font-bold leading-tight">Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatar} alt="NLW Copa" />

          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+{props.userCount}</span>
            pessoas já estão usando
          </strong>
        </div>

        <form onSubmit={handleCreatePool}
          className="mt-10 flex gap-2 ">

          <input
            className="flex-1 py-4 px-6 rounded bg-gray-800 border border-gray-600 outline-none text-sm text-gray-200 focus:outline-ignite-500"
            type="text"
            placeholder="Qual nome do seu bolão?"
            value={poolTitle}
            onChange={e => setPoolTitle(e.target.value)} />

          <button type="submit"
            className="bg-yellow-500 py-4 px-6 rounded font-bold uppercase text-gray-900 hover:bg-yellow-700 "
          >CRIAR MEU BOLÃO</button>
        </form>

        <p className="text-gray-300 text-sm mt-4 leading-relaxed">Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>


        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100 ">

          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="check" />
            <div className="flex flex-col">
              <span className="font-bold ext-2xl">+{props.poolCount}</span>
              <span>Bolões criados </span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="check" />
            <div className="flex flex-col">
              <span className="font-bold ext-2xl">+{props.guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>

        </div>
      </main>

      <Image src={nlwPreview} alt="dois celulares exibindo uma previa da aplicação do nlw copa na versão mobile"
        quality={100} />
    </div>


  )
}

/*

export const getServerSideProps = async () => {

  const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count'),
  ])

  return {
    props: {
      poolCount: poolCountResponse.data.count || 0,
      guessCount: guessCountResponse.data.count || 0,
      userCount: userCountResponse.data.count || 0,
    }
  }
}

*/