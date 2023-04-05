import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [conditions, setConditions] = useState([
    {
      title: 'WORK',
      timer: 1200,
      isActive: true
    },
    {
      title: 'SHORT BREAK',
      timer: 300,
      isActive: false
    },
    {
      title: 'LONG BREAK',
      timer: 600,
      isActive: false
    },
  ])
  
  const [timer, setTimer] = useState(conditions[0].timer)
  const [oldValueTimer, setOldValueTimer] = useState(conditions[0].timer)
  const [isStart, setIsStart] = useState(false)
  const [isReset, setIsReset] = useState(false)


  useEffect(() => {
    if (isReset) {
      setTimer(oldValueTimer)
      setIsReset(false)
      setIsStart(false)
    }
    
    let secondize
    if (isStart) {
      if (timer < 0) {
        setTimer(oldValueTimer)
        setIsStart(false)

        const audio = new Audio('/ringtone/ip14.mp3')
        audio.play()
      }
      secondize = setTimeout(() => {
        setTimer(timer - 1)
      }, 1000);
    }

    return () => {
      clearTimeout(secondize)
    }
  }, [timer, isStart, oldValueTimer, isReset])

  const onPickCondition = (timer, indexParam) => {
    setTimer(timer)
    setOldValueTimer(timer)
    setIsStart(false)

    setConditions(prevConditions => prevConditions.map((condition, index) => ({
      ...condition,
      isActive: index === indexParam
    })));
  }

  function toTimeString(totalSeconds) {
    const totalMs = totalSeconds * 1000;
    const result = new Date(totalMs).toISOString().slice(14, 19);
  
    return result;
  }
  
  return (
    <div>
      <Head>
        <title>{isStart ? toTimeString(timer) + ' |' : ''} POMONG DORONG</title>
      </Head>
      <div className="min-h-screen bg-[url('/img/bg.jpg')] bg-cover bg-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#0000003f] backdrop-blur"></div>

        <div className="relative container xl:px-0 px-4 mx-auto flex flex-col justify-between min-h-screen">
          <div className="flex items-center justify-end">
            <div className="sm:w-[380px] pt-5">
              <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/10M75TUt3X1qbBhpuEw6el?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
          <div className="font-pupi flex flex-col justify-center items-center">
            <div className="flex items-center bg-[#6966DD] w-max rounded-full text-xs sm:text-sm font-medium text-white">
              {
                conditions.map((condition, index) => 
                  <p key={index} className={`py-4 px-3 sm:px-6 tracking-[0.2em] duration-300 ${condition.isActive ? 'bg-white rounded-full text-[#6966DD]' : ''}`} onClick={() => onPickCondition(condition.timer, index)} >{condition.title}</p>
                )
              }
            </div>
            <p className="sm:text-9xl text-7xl font-semibold text-white py-14 text-center">{toTimeString(timer)}</p>
            <div className="flex items-center text-white">
              <button className="py-3 sm:px-14 px-8 tracking-[0.2em] sm:tracking-[0.4em] font-medium sm:text-lg rounded-full bg-[#6966DD]" onClick={() => setIsStart(!isStart)} >{isStart ? 'PAUSE' : 'START'}</button>
              <img src="/img/pres.png" className="w-[30px] ml-8" alt="" onClick={() => {
                setIsReset(true)
              }} />
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