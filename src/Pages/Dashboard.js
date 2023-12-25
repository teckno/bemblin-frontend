import '../index.css'
import React from 'react';
import ReactDOM from 'react-dom';


function Header() {
  return (
    
    <div style={{position: 'sticky', top: 0, backgroundColor: '#235390', padding: '10px'}} className="self-stretch flex w-full flex-col px-5 py-3 max-md:max-w-full">
      <div className="self-center flex w-full max-w-[1315px] items-start justify-between gap-5 -mt-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="self-center flex items-start gap-4 my-auto">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/Images/logo.svg'}
          
            className="aspect-[1.03] object-cover object-center w-[65px] overflow-hidden max-w-full shrink-0"
          />

          <div className="text-neutral-100 text-5xl leading-[133.333%] mt-1">
            bemblin
          </div>
        </div>
        <div className="self-stretch flex items-start justify-between gap-3.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/Images/Home.svg'}
            className="aspect-square object-cover object-center w-[72px] justify-center items-center overflow-hidden max-w-full shrink-0"
           
          />

          <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/Images/People.svg'}
                className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
              />


          <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/Images/Trans.svg'}
                className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
              />  

        <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Game.svg'}
              className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
            />
<a href="/dictionary">
<img
  loading="lazy"
  src={process.env.PUBLIC_URL + '/Images/Comm.svg'}
  className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
/>
</a>
        </div>
    
        <div className="self-center flex items-start gap-0 my-auto">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/Images/Tabler_bulb.svg'}
            className="aspect-[1.05] object-cover object-center w-[46px] overflow-hidden max-w-full shrink-0"
          />

<div className="justify-center text-stone-900 text-center text-base leading-[51.04px] items-start bg-white w-[183px] max-w-full pl-2.5 pr-3 rounded-[30px] self-start">
    Get Started
  </div>
        </div>


        <img
          loading="lazy"
          src={process.env.PUBLIC_URL + '/Images/Basil_menu-solid.svg'}
          className="aspect-[1.28] object-cover object-center w-16 overflow-hidden self-center max-w-full shrink-0 my-auto"
          
        />
  
       
          </div>
          </div>
        
          
  );
}





function Table() {
  return (
  
    <div className="max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
          <div className="bg-blue-900 flex w-full grow flex-col items-stretch mx-auto pl-6 pr-20 py-12 max-md:mt-7 max-md:px-5">
            <div className="flex items-stretch justify-between gap-4 mt-9">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed70de6282a36d0827bd6481dbd63985bd6972db78db3424f13c128af755f1b4?"
                className="aspect-square object-contain object-center w-[25px] fill-white fill-opacity-90 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-xl leading-6 mt-1">
                Dictionary
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-9 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c73160ebb817769cbe50bebc67d03dceb4004d920d711a702a5263ccc47d127?"
                className="aspect-[1.92] object-contain object-center w-[25px] fill-white fill-opacity-90 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-xl leading-6">Games</div>
            </div>
            <div className="flex items-stretch justify-between gap-4 mt-9 mb-80 max-md:mb-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/084eb54bf209261819bfa0e013756406fc06e1a4177a2963f49c676381acc99e?"
                className="aspect-[1.32] object-contain object-center w-[25px] fill-white fill-opacity-90 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-xl leading-6 grow whitespace-nowrap self-start">
                Translation
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-start max-md:max-w-full max-md:mt-7">
            <div className="flex w-[238px] max-w-full justify-between gap-5 items-start">
              <div className="text-black text-3xl leading-6 mt-3.5">
                Dictionary
              </div>
              <div className="bg-black bg-opacity-0 flex w-[25px] shrink-0 h-[25px] flex-col" />
            </div>
            <div className="justify-center items-stretch bg-white self-stretch flex flex-col mt-4 rounded-xl border-b-[0.962px] border-b-gray-200 border-solid max-md:max-w-full">
              <div className="items-stretch flex justify-between gap-4 px-5 py-5 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                <div className="bg-white flex items-center justify-between gap-5 mr-24 pl-11 pr-8 py-2.5 rounded-[50px] border-4 border-solid border-violet-200 max-md:px-5">
                  <div className="text-neutral-600 text-xs tracking-wide grow whitespace-nowrap my-auto">
                    Search...
                  </div>
                  <div className="self-stretch flex items-stretch justify-between gap-3">
                    <div className="bg-slate-400 w-px shrink-0 h-[22px]" />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/58a8ac92db8653125c07c784f2292f815a92d20a4a4ef4c5de01b47e4006e2ec?"
                      className="aspect-[0.89] object-contain object-center w-4 fill-indigo-800 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
                <div className="justify-end items-stretch self-center flex gap-4 my-auto pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                  <div className="items-stretch flex justify-between gap-0">
                    <div className="justify-between bg-white flex gap-2 px-4 py-2.5 rounded-lg items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/947052ad68f9fbe43f7bd02ae881e1fe0a4de9c7e48f27498e16ed95723a6447?"
                        className="aspect-[1.05] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-slate-700 text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">
                        Delete{" "}
                      </div>
                    </div>
                    <div className="justify-between bg-white flex gap-2 px-4 py-2.5 rounded-lg items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e42564c8dc7fcb959065a406d0d2602ed80176c2ce759658225854b8f3501eb6?"
                        className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-slate-700 text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">
                        Filters
                      </div>
                    </div>
                  </div>
                  <div className="justify-between bg-white flex gap-2 px-4 py-2.5 rounded-lg border-[0.962px] border-solid border-gray-300 items-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/033a230c0ef367dc1275aad14bb8826234a4b7d75376d8df74545a5fe2e0fcee?"
                      className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">
                      Export
                    </div>
                  </div>
                  <div className="justify-between shadow-sm bg-blue-600 z-[1] flex gap-2 px-4 py-2.5 rounded-lg border-[0.962px] border-solid border-blue-600 items-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/57f56d5b5117a9f13ddb4c4dafbb9a9597f0b055177b97b37ee3ed4cacfb6509?"
                      className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-white text-sm font-medium leading-5 self-stretch grow whitespace-nowrap">
                      Add new CTA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-start bg-white self-stretch flex gap-0 mt-5 rounded-xl max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4967e37e06a82c6010497b3e6a8b02f8327da735131d497f940a674353d8da80?"
                className="aspect-[0.14] object-contain object-center w-[63px] items-start overflow-hidden shrink-0 max-w-full self-start"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="bg-gray-50 flex w-full flex-col justify-center pl-6 pr-16 py-3 border-b-[0.962px] border-b-gray-200 border-solid items-start max-md:px-5">
                  <div className="items-stretch flex w-[31px] max-w-full gap-1">
                    <div className="text-gray-500 text-xs font-medium leading-4 grow whitespace-nowrap">
                      ID
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad58c7bb52dd5a50da90f3364b3183cb4c9dedec278df920a3b7550dc66d2c64?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </div>
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
                <div className="text-gray-900 text-sm font-medium leading-5 whitespace-nowrap items-stretch justify-center pl-6 pr-1.5 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Bold text column
                </div>
              </div>
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="items-stretch bg-gray-50 flex w-full flex-col justify-center pl-6 pr-16 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:px-5">
                  <div className="items-stretch flex justify-between gap-1 max-md:mr-1">
                    <div className="text-gray-500 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Word
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6497e3ff3d7d03287a77597aa7392ed9597f9189afc07195c94988bcbc70be0d?"
                      className="aspect-[0.94] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full self-start"
                    />
                  </div>
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
              </div>
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="items-stretch bg-gray-50 flex w-full flex-col justify-center pl-6 pr-10 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:px-5">
                  <div className="items-stretch flex justify-between gap-1">
                    <div className="text-gray-500 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Language{" "}
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7113be85bb105facd520b8e914fbe8a76b2731675ea2363d5e14d379d6ea043?"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full self-start"
                    />
                  </div>
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
              </div>
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="items-stretch bg-gray-50 flex w-full flex-col justify-center pl-6 pr-8 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:px-5">
                  <div className="items-stretch flex justify-between gap-1">
                    <div className="text-gray-500 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Translation
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d224ce2b79d34a2e567aba58886b80c34b39fe16db85b2488690037d75f3fb6?"
                      className="aspect-[0.94] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full self-start"
                    />
                  </div>
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
              </div>
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="items-stretch bg-gray-50 flex w-full flex-col justify-center pl-6 pr-3 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  <div className="items-stretch flex justify-between gap-1">
                    <div className="text-gray-500 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Part of Speech
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c1c4783de8279cb6366aceb4229b34d27036130c3465fb2324a84fdcf43515c?"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full self-start"
                    />
                  </div>
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
              </div>
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="items-stretch bg-gray-50 flex w-full flex-col justify-center pl-6 pr-9 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:px-5">
                  <div className="items-stretch flex justify-between gap-1">
                    <div className="text-gray-500 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Defination
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/247ad0687ca4a2d0da52d8bc6ad2f05f05bed66939937eb718c61f00d1c8cabc?"
                      className="aspect-[0.94] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full self-start"
                    />
                  </div>
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
              </div>
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="items-stretch bg-gray-50 flex w-full flex-col justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  <div className="items-stretch flex justify-between gap-1 px-px">
                    <div className="text-gray-500 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Example Sentence
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ef0b3e55af06778b999f57467c010d5c50557c1cb4db187753e790a4b0ac372?"
                      className="aspect-[0.19] object-contain object-center w-[3px] overflow-hidden shrink-0 max-w-full self-start"
                    />
                  </div>
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
                <div className="text-gray-500 text-sm leading-5 whitespace-nowrap items-stretch justify-center pl-6 py-3 border-b-[0.962px] border-b-gray-200 border-solid max-md:pl-5">
                  Regular text column
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9730faa5dedee2e31dc834b28e24995baeb189639692cb86274faf5571458898?"
                className="aspect-[0.15] object-contain object-center w-[69px] items-start overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


  
   

// BottomIcons Component
function BottomIcons() {
  return (
   

    <div className="items-start self-center flex w-[340px] max-w-full justify-between gap-5 mt-9 px-5 max-md:justify-center">
          <div className="flex flex-col">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/History.svg'}
              className="aspect-square object-cover object-center w-full justify-center items-center overflow-hidden self-stretch"
              style={{
                display: 'flex',
                width: '4.5rem',
                height: '4.5rem',
                padding: '1.25rem',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '2.25rem',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                background: '#F6F6F6'
              }}
            />
            <div className="text-black text-opacity-50 text-center text-sm font-medium leading-[138.462%] self-center">
              History
            </div>
          </div>
          <div className="flex flex-col">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Saved.png'}
              className="aspect-square object-cover object-center w-full justify-center items-center overflow-hidden self-stretch"
              style={{
                borderRadius: '2.25rem',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                background: '#F6F6F6',
                display: 'flex',
                width: '4.5rem',
                height: '4.5rem',
                padding: '1.25rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
            <div className="text-black text-opacity-50 text-center text-sm font-medium leading-[138.462%] self-center">
              Saved
            </div>
          </div>
          <div className="flex flex-col">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Contribute.png'}
              className="aspect-square object-cover object-center w-full justify-center items-center overflow-hidden"
            />
            <div className="text-black text-opacity-50 text-center text-sm font-medium leading-[138.462%]">
              Contribute
            </div>
          </div>
          </div>
    
    // Bottom icons JSX code here
  );
}


 // Main Component
function Insert() {
  return (
    <div className="bg-neutral-100 flex flex-col">
      <Header />
     
      <Table/>
      <BottomIcons/>
     
      
     
      {/* Include other components here */}
    </div>
  );
}

// Render Main Component
ReactDOM.render(
  <React.StrictMode>
  
    <Insert />
  
  </React.StrictMode>,
  document.getElementById('root')
);   
    
    

export default Insert;
