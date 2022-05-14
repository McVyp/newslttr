import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className='container mx-auto px-6 pt-6 flex-1 text-center'>
          <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase">
              Welcome to
          </h2> 
          <h1 className="text-3xl md:text-6xl font-black lg:text-6xl uppercase mb-8">
              the club
          </h1>
          <div className='text-lg md:text:2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-4 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full'>
            690,420 people
          </div>
          <form action="https://www.getrevue.co/profile/lye/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">

            <div className="flex flex-col md:flex-row justify-center mb-4">
                <input 
                  className=" text-lg md:text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12
                  bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none " 
                  placeholder="Enter your email address..." 
                  type="email" 
                  name="member[email]" 
                />
                <input 
                  type="submit" 
                  value="Join" 
                  name="member[subscribe]"
                  className='bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-80 duration-150' 
                />
            </div>

            <div className="opacity-75 italic">
                By subscribing, you agree with Revue’s <a target="_blank"  href="https://www.getrevue.co/terms"  className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" className=" hover:opacity-80 duration-150" href="https://www.getrevue.co/privacy">Privacy Policy</a>.
            </div>

          </form>
      </main>
      <footer className='container mz-auto p-6 flex flex-col md:flex-row items-center justify-between'>
          <p>Built by lye</p>
          <div className="flex -mx-6">
              <a href="#" className="mx-3 hover:opacity-80 duration-150">About Us</a>|
              <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a>|
              <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
          </div>
      </footer>
    </div>
  )
}
