

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import '../index.css';
import React, { useState } from 'react';


// Header Component
function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    
    <div className="desktop-view">
    <div className="header-top flex-col overflow-hidden relative flex min-h-[55px] justify-center items-center px-16 py-2 max-md:px-5 sticky top-0 bg-[#235390] z-10" style={{
        backgroundColor: '#235390',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }} >
      <img
        loading="lazy"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative flex w-full max-w-[1118px] items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="logo flex items-stretch gap-1.5 my-auto">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/Images/logo.svg'}
            className="square object-contain object-center w-34 h-74 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-white text-2xl leading-[60px] self-center grow whitespace-nowrap my-auto">
            bemblin
          </div>
        </div>
        <div className="nav-main self-stretch flex justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/Images/people.svg'}

            alt="People"
            title="People"
            className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/Images/home.svg'}
            className="aspect-square object-contain object-center w-10 fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            alt="Translation"
            title="Translation"
            src={process.env.PUBLIC_URL + '/Images/trans.svg'}
            className="aspect-square object-contain object-center w-10 fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            alt="Games"
            title="Games"
            src={process.env.PUBLIC_URL + '/Images/Game.svg'}
            className="aspect-square object-contain object-center w-10 fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden shrink-0 max-w-full"
          />
          <a href="/dictionary">
            <img
              loading="lazy"
              alt="Dictionary"
              title="Dictionary"
              src={process.env.PUBLIC_URL + '/Images/Comm.svg'}
              className="aspect-square object-contain object-center w-10 fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden shrink-0 max-w-full"
            />
          </a>
        </div>
        <img
          loading="lazy"
          src={process.env.PUBLIC_URL + '/Images/Start.svg'}
          className="get-start aspect-[4.43] object-contain object-center w-[186px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
        
      </div>
    </div>




      <div className="mobile-view">
      <div className="bg-blue-900 flex items-center justify-between gap-5 pl-12 pr-10 max-md:flex-wrap max-md:px-5"
      style={{
        backgroundColor: '#235390',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      <div className="flex items-stretch gap-1.5 my-auto">
        <img
          loading="lazy"
          src={process.env.PUBLIC_URL + '/Images/logo.svg'}
          className="mini-logo square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
        />
        <div className="text-white text-2xl leading-[60px] self-center grow whitespace-nowrap my-auto">
          bemblin
        </div>
      </div>
      <div className="justify-center items-center border bg-white self-stretch flex aspect-[1.0232558139534884] flex-col w-11 h-11 mt-1 px-2.5 rounded-[36px] border-solid border-black border-opacity-10">
        <img
          loading="lazy"
          src={process.env.PUBLIC_URL + '/Images/Ham2.svg'}
          className="aspect-[0.96] object-contain object-center w-full overflow-hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          
        />
      </div>
      {isSidebarOpen && (
  <div className="bg-neutral-100 flex max-w-[480px] w-full flex-col mx-auto pt-6 pb-12 items-end">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ace21d6fea6f3990fcaefbd0b2f4a8783ab3c9917be2abca907d0d2942abec25?"
        className="aspect-[0.87] object-contain object-center w-5 fill-black overflow-hidden max-w-full mr-7"
      />
      <div className="self-stretch flex flex-col items-stretch mt-12 mb-[540px] px-8">
        <div className="justify-center text-black text-xl leading-[51px]">
          Translator
        </div>
        <div className="justify-center text-black text-xl leading-[51px] mt-9">
          Dictionary
        </div>
        <div className="justify-center text-black text-xl leading-[51px] mt-11">
          Resources
        </div>
        <div className="justify-center text-black text-xl leading-[51px] mt-12">
          Cultures
        </div>
      </div>
    </div>
)}


    </div>
  
</div>
    </div>
  );
}




// TranslationOptions Component
function TranslationOptions() {
  return (

    
    <div className="bg-neutral-100 flex flex-col">

   <div className="self-center flex w-full max-w-[1296px] flex-col mt-20 mb-7 max-md:max-w-full max-md:mt-10">
        <div className="holder flex w-[623px] max-w-full items-start gap-2.5 px-5 max-md:flex-wrap max-md:justify-center">
          <div className="trans-text bg-white bg-opacity-90 self-stretch flex w-[201px] max-w-full items-start justify-between gap-2.5 pl-6 pr-6 py-7 rounded-xl border-[0.5px] border-solid border-neutral-500">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Clarity_world-line.svg'}
              className="square object-cover object-center w-9 overflow-hidden max-w-full shrink-0 mt-1"
            />
            <div className="flex flex-col mt-px">
              <div className="trans-type justify-center text-black text-base">
                Translate Text
              </div>
              <div className="trans-lang justify-center text-zinc-700 text-sm mt-2.5">
                1 language
              </div>
            </div>
          </div>
          <div className="trans-files bg-white bg-opacity-90 self-stretch flex w-[201px] max-w-full items-start justify-between gap-3.5 pl-6 pr-5 py-7 rounded-xl border-[0.5px] border-solid border-neutral-500">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Teenyicons_documents-solid.svg'}
              className="aspect-[0.94] object-cover object-center w-[31px] overflow-hidden self-center max-w-full shrink-0 my-auto"
            />
            <div className="flex flex-col mt-px">
            <div className="trans-file justify-center text-black text-base" style={{ display: 'flex', width: '7.375rem', height: '1.25rem', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#000', fontFamily: 'Poppins', fontSize: '1rem', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                Translate Files
              </div>
              <div className="justify-center text-zinc-700 text-sm mt-3" style={{ display: 'flex', width: '7.375rem', height: '0.25rem', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#46484D', fontFamily: 'Poppins', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                .pdf, .docx, .pptx
              </div>
            </div>
          </div>
          <div className="ai-write bg-white bg-opacity-90 self-stretch flex w-[201px] max-w-full items-start justify-between gap-5 pl-6 pr-3 py-7 rounded-xl border-[0.5px] border-solid border-neutral-500">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/System-uicons_write.svg'}
              className="aspect-[0.93] object-cover object-center w-7 overflow-hidden self-center max-w-full shrink-0 my-auto"
            />
            <div className="self-stretch flex flex-col">
            <div className="justify-center text-black text-base" style={{ color: '#000', fontFamily: 'Poppins', fontSize: '1rem', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
 
                AI Write
              </div>
                <div className="justify-center text-zinc-700 text-sm mt-2.5" style={{ display: 'flex', width: '8.5rem', height: '0.25rem', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#46484D', fontFamily: 'Poppins', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                AI-powered edits
              </div>
            </div>
          </div>
        </div>


        <div className="trans-desktop-view">

        <div className="header bg-white bg-opacity-90 self-stretch flex flex-col mt-20 px-5 py-5 rounded-3xl border-[0.5px] border-solid border-neutral-500 max-md:max-w-full max-md:mt-10" style={{borderRadius: '1.25rem 1.25rem 0 0'}}>
          <div className="title-inner self-center flex w-full max-w-[1178px] items-start justify-between gap-5 -mt-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="self-stretch flex items-start justify-between gap-2">
                <div className="justify-center text-black text-center text-sm font-medium my-auto" style={{display: 'flex', width: '8.1875rem', height: '1.3125rem', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#000', textAlign: 'center', fontFamily: 'Poppins', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal'}}>
                Detect language
              </div>
              
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/Images/Down-arrow.svg'}
                className="justify-center text-center aspect-[0.76] object-cover object-center w-[22px] overflow-hidden max-w-full shrink-0"
              />
              
            </div>
            <div className="self-stretch flex items-start justify-between gap-1.5 max-md:justify-center">
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/Images/next1.svg'}
                className="aspect-[0.92] object-cover object-center w-6 overflow-hidden self-center max-w-full shrink-0 my-auto"
              />
              
                English
              
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/Images/Down-arrow.svg'}
                className="aspect-[0.76] object-cover object-center w-[22px] overflow-hidden max-w-full shrink-0"
              />
            </div>
            <div className="self-center flex w-[165px] max-w-full items-start justify-between gap-5 my-auto">
              <div className="justify-center text-black text-center text-sm font-medium">
                Automatic
              </div>
              <div className="justify-center text-black text-center text-sm font-medium mt-px">
                Glossary
              </div>
            </div>
          </div>
        </div>

        </div>

        <div className='trans-mobile-view'>  

        
        <span className="mobile-menu-view mobile-menu bg-white bg-opacity-90 self-stretch flex items-start justify-between gap-5 mt-7 px-6 py-3.5 rounded-3xl border-[0.5px] border-solid border-neutral-500">
      <div className="mobile-detect justify-center text-black text-center text-sm font-medium self-center grow whitespace-nowrap my-auto">
        Detect language
      </div>
      <img
        loading="lazy"
        src={process.env.PUBLIC_URL + '/Images/Down-arrow.svg'}
        className="aspect-[0.76] object-contain object-center w-[22px] overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
      <div className="mobile-eng justify-center text-black text-center text-sm font-medium self-center my-auto">
        English
      </div>
      <img
        loading="lazy"
        src={process.env.PUBLIC_URL + '/Images/Mobile/menu-mobile.svg'}
        className="aspect-[0.66] object-contain object-center w-[25px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
      />
    </span>
      


        



        <div className="flex flex-col items-stretch">
      <div className="border-mobile border bg-white flex min-h-[324px] w-full flex-col border-solid border-black max-md:max-w-full" />
      <div className="border-mobile border bg-white flex min-h-[313px] w-full flex-col border-solid border-black max-md:max-w-full" />
    </div>
    </div>

        <div className="self-stretch px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <textarea 
                className="text-box bg-white bg-opacity-90 flex w-[648px] h-[445px] flex-col mx-auto rounded-none border-[0.5px] border-solid border-neutral-500 max-md:max-w-full" 
                style={{
                  marginLeft: '-18px', 
                  fontSize: '20px', 
                  fontFamily: 'Poppins', 
                  textAlign: 'center', 
                  paddingTop: '200px', 
                  backgroundImage: `url(${process.env.PUBLIC_URL}/Images/background.png)`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center center'
                }}
                onFocus={(e) => e.target.value = ''}
              >
              Drag and drop to translate PDF, Word (.docx), and PowerPoint (.pptx) files with our document translator.
              Click the microphone to translate speech.
              </textarea>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="text-boxc bg-white bg-opacity-90 flex w-[648px] h-[445px] flex-col mx-auto rounded-none border-[0.5px] border-solid border-neutral-500 max-md:max-w-full" style={{marginLeft: '-40px'}}  />
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
              className="square object-cover object-center w-full justify-center items-center overflow-hidden self-stretch"
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
              className="square object-cover object-center w-full justify-center items-center overflow-hidden self-stretch"
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
              className="square object-cover object-center w-full justify-center items-center overflow-hidden"
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
function Home() {
  return (
    <div className="bg-neutral-100 flex flex-col">
      <Header />
      <TranslationOptions />
      <BottomIcons />
      
     
      {/* Include other components here */}
    </div>
  );
}

// Render Main Component
ReactDOM.render(
  <React.StrictMode>
  
    <Home />
  
  </React.StrictMode>,
  document.getElementById('root')
);

export default Home;
