import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>POMONG DORONG</title>
      </Head>
      <div className="min-h-screen bg-[url('/img/bg.jpg')] bg-cover bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#0000003f] backdrop-blur"></div>

        <div className="relative container xl:px-0 px-4 mx-auto flex flex-col justify-between min-h-screen">
          <div className="flex items-center justify-end">
            <div className="sm:w-[380px] pt-5">
              <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/10M75TUt3X1qbBhpuEw6el?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
          <div className="font-pupi flex flex-col justify-center items-center">
            <div className="flex items-center bg-[#6966DD] w-max rounded-full text-xs sm:text-sm font-medium text-white">
              <p className="py-4 px-6 sm:px-12 bg-white rounded-full text-[#6966DD] tracking-[0.2em]">WORK</p>
              <p className="py-4 px-3 sm:px-6 tracking-[0.2em]">SHORT BREAK</p>
              <p className="py-4 px-3 sm:px-6 tracking-[0.2em]">LONG BREAK</p>
            </div>
            <p className="sm:text-9xl text-7xl font-semibold text-white py-14 text-center">20 : 00</p>
            <div className="flex items-center text-white">
              <button className="py-3 sm:px-14 px-8 tracking-[0.2em] sm:tracking-[0.4em] font-medium sm:text-lg rounded-full bg-[#6966DD]">START</button>
              <img src="/img/pres.png" className="w-[30px] ml-8" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between pb-5">
            <p className="font-space-gretong text-white sm:text-3xl text-xl font-medium sm:font-semibold sm:w-[190px] w-[120px]">Powered By Arie</p>
            <div>
              <img src="/img/ger.png" className="sm:w-[60px] w-[50px]" alt="" />
            </div>
          </div>
        </div>
            
      </div>
    </div>
  )
}