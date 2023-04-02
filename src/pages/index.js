import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>POMONG DORONG</title>
      </Head>
      <div className="min-h-screen bg-[url('/img/bg.jpg')] bg-cover bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#0000003f] backdrop-blur"></div>

        <div className="relative container mx-auto flex flex-col justify-between min-h-screen">
          <div className="flex items-center justify-end">
            <div className="w-[380px] pt-5">
              <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/10M75TUt3X1qbBhpuEw6el?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
          <div className="font-pupi flex flex-col justify-center items-center">
            <div className="flex items-center bg-[#6966DD] w-max rounded-full text-sm font-medium text-white">
              <p className="py-4 px-12 bg-white rounded-full text-[#6966DD] tracking-[0.2em]">WORK</p>
              <p className="py-4 px-6 tracking-[0.2em]">SHORT BREAK</p>
              <p className="py-4 px-6 tracking-[0.2em]">LONG BREAK</p>
            </div>
            <p className="text-9xl font-semibold text-white py-14 text-center">20 : 00</p>
            <div className="flex items-center text-white">
              <button className="py-3 px-14 tracking-[0.4em] font-medium text-lg rounded-full bg-[#6966DD]">START</button>
              <img src="/img/pres.png" className="w-[30px] ml-8" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between pb-5">
            <p className="font-space-gretong text-white text-3xl font-semibold w-[190px]">Powered By Arie</p>
            <div>
              <img src="/img/ger.png" className="w-[60px]" alt="" />
            </div>
          </div>
        </div>
            
      </div>
    </div>
  )
}