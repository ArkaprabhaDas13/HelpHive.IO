import React from 'react'
import { Link } from 'react-router-dom'
import { arr } from '../utils/detailsData';
import { useParams } from 'react-router-dom';
import Search from './Search';
import { getDatabase, ref, set } from "firebase/database";
 
 const Home = () => {

  const services = [
    { name: "nanny", icon: "👩‍🦰" },
    { name: "driver", icon: "👨" },
    { name: "nurse", icon: "❄️" },
  ];

   return (

    <>
  <div className="bg-[#FFE1FF]">
    <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-gray-900">
          Data to enrich your online business
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl font-medium text-gray-500">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/map" state={{data: arr}}               // redirecting to MAP component with the full data array
            className="w-full sm:w-auto rounded-md bg-[#433878] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#7E60BF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Find nearest Helping Bees
          </Link>

        </div>
        <Search/>
      </div>
    </div>
  </div>

  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
    {/* Header */}
    <header className="text-center mb-8">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
        Home services at your doorstep
      </h1>
    </header>
  </div>

  {/* Services Grid */}
  <section className="mb-12 px-4 sm:px-6 lg:px-8">
    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6">
      What are you looking for?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service, index) => (
        <Link to={`/services/${service.name}`} key={index}>
          <div className="p-4 sm:p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition-shadow duration-200">
            <div className="text-3xl sm:text-4xl mb-3">{service.icon}</div>
            <p className="text-gray-700 font-medium">{service.name}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
</>






  // <>
  //   <div className="bg-[#FFE1FF]">
  //       <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-36">
      
  //         <div className="text-center">
  //           <h1 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
  //             Data to enrich your online business
  //           </h1>
  //           <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
  //             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
  //             fugiat veniam occaecat.
  //           </p>
  //           <div className="mt-10 flex items-center justify-center gap-x-6">
  //             <a
  //               href="./Login.jsx"
  //               className="rounded-md bg-[#433878] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7E60BF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  //             >
  //               Get started
  //             </a>
  //             <a href="./Login.jsx" className="text-sm/6 font-semibold text-gray-900">
  //               Learn more <span aria-hidden="true">→</span>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //       <div
  //         aria-hidden="true"
  //         className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  //       >
  //         <div
  //           style={{
  //             clipPath:
  //               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  //           }}
  //           className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
  //         />
  //       </div>
  //     </div> 


  //   <div className="max-w-screen-xl mx-auto p-6">
  //     {/* Header */}
  //     <header className="text-center mb-10">
  //       <h1 className="text-3xl font-bold text-gray-800">
  //         Home services at your doorstep
  //       </h1>
  //     </header>
  //   </div>

  //   {/* Services Grid */}
  //   <section className="mb-12">
  //       <h2 className="text-xl font-semibold text-gray-700 mb-6">
  //         What are you looking for?
  //       </h2>
  //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
  //         {services.map((service, index) => (
  //           <Link to={`/services/${service.name}`}>
  //           {/* <Link to={"/services?service=" + service.name}> */}
  //           <div
  //             key={index}
  //             className="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
  //           >
  //             <div className="text-4xl mb-4">{service.icon}</div>
  //             <p className="text-gray-700 font-medium">{service.name}</p>
  //           </div>
  //           </Link>
  //         ))}
  //       </div>
  //     </section>
  //   </>

   )
 }
 
 export default Home