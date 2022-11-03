import Image from "next/image"
import nlwPreview from "../assets/app-nlw-copa-preview.png"
import nlwLogo from "../assets/logo.svg"
import iconCheck from "../assets/icon-check.svg"
import usersAvatar from "../assets/users-avatar-example.png"


export default function Home() {

  return (
    <div className="h-screen max-w-[1124px] mx-auto grid grid-cols-2 items-center gap-28 ">
      <main>
        <Image src={nlwLogo} alt="NLW Copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatar} alt="NLW Copa" />

          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span>
            pessoas já estão usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2 ">

          <input
            className="flex-1 py-4 px-6 rounded bg-gray-800 border border-gray-600 outline-none text-sm focus:outline-ignite-500"
            type="text"
            placeholder="Qual nome do seu bolão?" />

          <button type="submit"
            className="bg-yellow-500 py-4 px-6 rounded font-bold uppercase text-gray-900 hover:bg-yellow-700 "
          >CRIAR MEU BOLÃO</button>
        </form>

        <p className="text-gray-300 text-sm mt-4 leading-relaxed">Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>


        <div className="mt-10 pt-10 border-t border-gray-600 flex">
          
          <div className="">
            <Image src={iconCheck} alt="check" />
            <div>
              <span>+2.034</span>
              <span>Bolões criados </span>
            </div>
          </div>
          <div>
            <Image src={iconCheck} alt="check" />
            <div>
              <span>+192.847</span>
              <span>Palpites enviados </span>
            </div>
          </div>
        </div>
      </main>

      <Image src={nlwPreview} alt="dois celulares exibindo uma previa da aplicação do nlw copa na versão mobile"
        quality={100} />
    </div>


  )
}