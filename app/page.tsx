import { AlignJustify, ArrowLeft, ArrowRight, ArrowUpRight, MoveUpRight } from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <main className='w-full max-w-8xl h-full min-h-screen flex flex-col p-2 lg:p-10 bg-[#262626] lg:mx-auto'>
      <nav className='h16 w-full flex items-center justify-between'>
        <div className='h-16 w-16 rounded-full bg-zinc-900 overflow-hidden flex items-center justify-center hover:scale-95 transition duration-300'>
          <img src="/beneto/Mark.svg" alt="Menu image" className='h-10 w-10 object-contain' />

        </div>

        <div className="flex-1 h-16 px-2 lg:px-[66px] py-5 bg-zinc-900 rounded-[48px] border-2 border-neutral-800 justify-center items-center gap-[100px] lg:gap-[330px] inline-flex">
          <div className="text-center text-red-500 text-xl font-bold font-['Inter'] uppercase leading-normal">About</div>
          <div className="hidden lg:flex text-center text-white text-xl font-normal font-['Inter'] uppercase hover:scale-5 hover:text-red-500 transition-all duration-300">Portfolio</div>
          <div className="hidden lg:flex text-center text-white text-xl font-normal font-['Inter'] uppercase hover:scale-5 hover:text-red-500 transition-all duration-300 ">Contact</div>
          <div className='flex lg:hidden'><AlignJustify /></div>
        </div>
      </nav>
      <section className='w-full max-w-8xl border border-gray-700 rounded-xl mt-3 lg:h-[400px] h-auto lg:py-[60px] lg:px-[40px]'>
        <div className='flex flex-col lg:flex-row w-full items-center lg:justify-between mb-[70px] gap-5 p-5'>
          <h3 className='text-gray-300'>UX/UI DESIGNER</h3>
          <div className='text-sm text-gray-200 flex items-center gap-2 bg-zinc-900 rounded-full py-1 px-4 uppercase'>
            <div className='h-2 w-2 rounded-full bg-red-500 '></div>
            Avaliable for job</div>
        </div>
        <div className='w-full lg:h-[190px] h-auto flex flex-col items-center lg:flex-row lg:justify-between gap-5 '>
          <div className=''>
            <div className="w-72 lg:w-96 text-white text-4xl font-semibold font-['Inter']">I’m Zasmin Winslate</div>
            <div className="w-72 text-stone-300 text-xl font-normal font-['Inter'] leading-[30px]">I design digital products with <br />great experience.</div>
            <div className='w-72 flex items-baseline justify-between pt-5'>
              <div className="w-[115px] h-[42px] relative flex gap-[1px]">
                <div className='w-[80px] h-full bg-red-500 hover:bg-red-600 rounded-l-md flex items-center justify-center  text-white'>
                  Hire Me
                </div>
                <div className='h-full w-[35px] rounded-r-md bg-red-500 flex items-center justify-center hover:bg-red-600'>
                  <img src="/beneto/ic_round-plus.svg" alt="" className='h-[20px] w-[20px]' />
                </div>
              </div>
              <div className="w-[143px] h-[42px] relative bg-neutral-900 hover:bg-neutral-950 rounded-[7px] border border-neutral-800 flex" >
                <div className='w-[100px] h-full rounded-l-md flex items-center justify-center  text-gray-200 border border-gray-700'>
                  Copy Email
                </div>
                <div className='h-full w-[43px] rounded-r-md  flex items-center justify-center border border-gray-700'>
                  <img src="/beneto/ph_copy.svg" alt="" className='h-[20px] w-[20px]' />
                </div>
              </div>
            </div>
          </div>
          <div className='h-[185px] w-[185px] rounded-full p-2 bg-zinc-700'>
            <img src="/beneto/Ellipse 61.svg" alt="" className='h-full w-full object-contain' />
          </div>

        </div>
      </section>
      <section className='w-full py-3 grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <div className='w-full h-auto'>
          <div className='w-full h-auto border border-gray-700 rounded-xl lg:py-[60px] lg:px-[40px] px-2 flex flex-col gap-4'>
            <div className='mb-[70px] flex items-center justify-start h-fit w-full gap-2'>
              <div className='h-2 w-2 bg-gray-400 rounded-full' />
              <h2 className="text-stone-300 text-2xl font-medium font-['Inter']">Recent Work</h2>
            </div>
            <RecentWork designation="Product designer" time="2023 - Present" company="Easi UI" color="text-red-500" />
            <RecentWork designation="Frontend Developer" time="2023 - july 2023" company="Figma" color="text-gray-50" />
            <RecentWork designation="Jr Frontend Developer" time="2021 - 2022" company="Tailwind" color="text-gray-50" />
            <RecentWork designation="Software developer" time="2020 - 2021" company="Easi UI" color="text-gray-50" />
          </div>
          <div className='mt-3 w-full h-auto border border-gray-700 rounded-xl pt-[50px] lg:px-[54px] flex flex-col gap-4'>
            <CardHeader heading="AI Map redesign" subheading="UX Case study" />
            <div className='px-30 mt-30 h-auto w-full  overflow-hidden rounded-t-3xl'>
              <img src="/beneto/iPhone Space gray.png" alt="" className='h-full w-full object-contain' />
            </div>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col gap-2'>
          {/* product design component */}
          <div className='border-t-2 border-red-600 rounded-tr-xl border-r-2 relative hover:border-red-500 '>
            <div className="relative group w-full h-auto border text-center  border-gray-700  rounded-xl py-[60px] lg:px-[40px]
                            text-stone-300 text-2xl font-medium font-['Inter'] overflow-hidden  ">
              Product Design
              <div className="absolute  top-0 right-0 h-full w-[20%] bg-gradient-to-tr from-transparent rounded-full to-red-500  blur-3xl group-hover:blur-2xl m-auto   ">

              </div>
            </div>
            <div className='absolute -top-0.5 left-0 h-[2px] w-full bg-gradient-to-l from-transparent via-[#262626] to-[#262626] from-[10%] via-[30%]' />
            <div className='absolute top-0 -right-0.5 w-[2px] h-full bg-gradient-to-b from-transparent via-[#262626] to-[#262626] from-[30%] via-[60%]' />
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='border-t-2 border-red-600 rounded-tr-xl border-r-2 relative hover:border-red-500 '>
              <div className="relative group w-full h-auto border text-center  border-gray-700  rounded-xl py-[60px] lg:px-[40px]
                            text-stone-300 text-2xl font-medium font-['Inter'] overflow-hidden  ">
                Mobile App Design
                <div className="absolute  top-0 right-0 h-[60%] w-[20%] bg-gradient-to-tr from-transparent rounded-full to-red-500  blur-2xl group-hover:blur-xl m-auto "></div>
              </div>
              <div className='absolute -top-0.5 left-0 h-[2px] w-full bg-gradient-to-l from-transparent via-[#262626] to-[#262626] from-[10%] via-[30%]' />
              <div className='absolute top-0 -right-0.5 w-[2px] h-full bg-gradient-to-b from-transparent via-[#262626] to-[#262626] from-[30%] via-[60%]' />
            </div>
            <div className='border-b-2 border-red-600 rounded-bl-xl border-l-2 relative hover:border-red-500 '>
              <div className="relative group w-full h-auto border text-center  border-gray-700  rounded-xl py-[60px] lg:px-[40px]
                            text-stone-300 text-2xl font-medium font-['Inter'] overflow-hidden  ">
                Website Design
                <div className="absolute  bottom-0 left-0 h-[60%] w-[20%] bg-gradient-to-bl from-transparent rounded-full to-red-500  blur-2xl group-hover:blur-xl m-auto   "></div>
              </div>
              <div className='absolute -bottom-0.5 right-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#262626] to-[#262626] from-[10%] via-[30%]' />
              <div className='absolute top-0 -left-0.5 w-[2px] h-full bg-gradient-to-t from-transparent via-[#262626] to-[#262626] from-[30%] via-[60%]' />
            </div>

          </div>
          <div className='w-full h-[520px] lg:px-[54px] py-[40px] border border-gray-700 rounded-xl'>
            <CardHeader heading="AI Music Product" subheading="UX Case study" />
            <div className='px-5 lg:px-[30px] mt-[30px] h-auto w-full  '>
              <img src="/beneto/project1.png" alt="" className='h-full w-full object-contain' />
            </div>
          </div>
          <div className='w-full h-[506px] lg:px-[54px] py-[40px] border border-gray-700 rounded-xl'>
            <CardHeader heading="AI Map Design" subheading="UX Case study" />
            <div className='px-5 lg:px-[30px] mt-[30px] h-auto w-full  '>
              <img src="/beneto/project2.png" alt="" className='h-full w-full object-contain' />
            </div>
          </div>

        </div>

      </section>
      <footer className='w-full border-b-2 border-l-2 border-red-600 hover:border-red-500 relative rounded-bl-xl group'>
        <div className="w-full lg:h-[119px] lg:px-[46px] lg:py-[45px] relative rounded-xl border border-gray-700 flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center w-full">

            <div className="text-stone-300 text-2xl font-medium font-['Inter']">Portfolio 2024</div>

            <div className="justify-center items-center gap-3 flex">
              <div className="text-red-500 text-xl font-medium font-['Inter']">Twitter</div>
              <div className="text-white text-xl font-normal font-['Inter']">Instagram </div>
              <div className="text-white text-xl font-normal font-['Inter']">LinkdIn</div>
            </div>
            <div className="w-48 px-2 py-1 bg-neutral-900 rounded-[14px] border border-neutral-800 flex-shrink-0 justify-center items-center gap-2.5 flex">
              <div className="w-[9px] h-[9px] bg-red-600 rounded-full" />
              <div className="text-stone-300 text-[13px] font-medium font-['Inter']">AVAILABLE FOR JOB</div>
            </div>
            <div className="absolute  bottom-0 left-0 h-[30%] w-[20%] bg-gradient-to-bl from-transparent rounded-full to-red-500  blur-2xl group-hover:blur-2xl m-auto   ">

            </div>
          </div>
        </div>
        <div className='absolute -bottom-0.5 right-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#262626] to-[#262626] from-[10%] via-[30%]' />
        <div className='absolute top-0 -left-0.5 w-[2px] h-full bg-gradient-to-t from-transparent via-[#262626] to-[#262626] from-[30%] via-[60%]' />
      </footer>
    </main>
  )
}

function CardHeader({ heading, subheading }: any) {
  return (
    <div className="w-full h-[68px]  justify-between items-center   inline-flex">
      <div className="flex-col justify-start items-start gap-[5px] flex">
        <div className="text-white text-2xl font-semibold font-['Inter']">{heading}</div>
        <div className="text-stone-300 text-xl font-normal font-['Inter']">{subheading}</div>
      </div>
      <div className="w-10 h-10 relative  bg-red-600 rounded-full shadow  border border-black text-white flex items-center justify-center
      hover:scale-95 transition duration-300" >
        <ArrowUpRight />
      </div>
    </div>
  )
}
function RecentWork({ designation, time, company, color }: { designation: string, time: string, company: string, color?: string }) {
  return (
    <div className="w-full h-[65px] justify-between items-center  inline-flex">
      <div className="flex-col justify-start items-start gap-1 inline-flex">
        <div className={`${color} text-2xl font-medium font-['Inter']`}>{designation}</div>
        <div className="text-stone-300 text-base font-normal font-['Inter']">{time}</div>
      </div>
      <div className="text-stone-300 text-xl font-normal font-['Inter']">{company}</div>
    </div>
  )
}