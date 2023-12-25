import '../index.css'
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    
    <div className="desktop-view">
    <div className="header-top flex-col overflow-hidden relative flex min-h-[55px] justify-center items-center px-16 py-2 max-md:px-5 sticky top-0 bg-[#235390] z-10" style={{ position: 'sticky', top: 0 }}>
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6017c28533c86beaa129394a71e0605393815a819a0a0b382583da235949f241?"
            alt="People"
            title="People"
            className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff7e5b461e0385c827d2c05818bac89d0155081f3cb6b2f773157c25e3ab3f6e?"
            className="aspect-square object-contain object-center w-10 fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            alt="Translation"
            title="Translation"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/feb75ea868216da605fe79df88b5a61b03498465bda4ebb0f2738b15d4586748?"
            className="aspect-square object-contain object-center w-10 fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden shrink-0 max-w-full"
          />
          <img
            loading="lazy"
            alt="Games"
            title="Games"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/02918fdffb87f7d7593fd1992c58eb15f09e5553e01f1437a8985141114da090?"
            className="aspect-square object-contain object-center w-10 fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden shrink-0 max-w-full"
          />
          <a href="/dictionary">
            <img
              loading="lazy"
              alt="Dictionary"
              title="Dictionary"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fded0b3c07fa59ee9445c305db55aa8a266332b5c815fc6e4dfd471dc208b36d?"
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

function Headline() {
  return (

    <div className="flex w-full flex-col mt-9 px-16 max-md:max-w-full max-md:px-5">
      <div className="dictionary-header text-black text-2xl leading-6 tracking-tight ml-11 max-md:ml-2.5">
        Browse the Dictionary
      </div>
      <div className="dictionary-divider bg-neutral-500 w-[931px] shrink-0 h-[5px] ml-10 mt-1.5 self-start max-md:max-w-full" />       
      
    </div>
  );
}



function Letters() {
  return (

      <div className="flex max-w-[697px] flex-col items-stretch">
      <div className="flex w-full items-stretch justify-between gap-1.5 px-5 max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07aede53841986336cb2cce152d511258c4b488a7542f1172622032306bdcbf6?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab924909972e4eca8b38db56372e93158b6a4959db0c17f542014bf24959b387?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c07f6472d6a542b2cb946a6da533d99ba8e569d5bc17d86334037ff5b23dbef?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/612db4246984bc4ce71be0118f673baadb26837e70498066faf302d892859803?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/344d95783c1cfb8337b47e8f3e218e5e222b366801fb7b5672fe193802d0ef71?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/172c4b3f8f866920048afc4c12721bbeac3de8a856672293a8be06ec569a3e79?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf382d5769eae521f9751a76746105cca64ee668387dd22f829b219035a1739a?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3024b23ac36a33f1c544fdce84ad0b66dde45f7f72a5ebdad51345ea40371c26?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1750158bc010cb3cdba51cc5e256cbd25e910aabd1cb0775318b47dd482fa?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e243c781577ed9f593f6244af3a9402298b987f4dfafb3d88ebb251cc62d1b0?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/441f290419d720081405570807a810082e8384ca046b49bfbb3b7ea67b9de206?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2997cd1694557b5cdbafa55273072d145d3b5ea2ace61cf908d4d203d6a72596?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a842a834420e0e774aa6811b87fc65ab51a36e0f0738ca8c5cba69a5bcc3f358?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8de2f7a0d2fadd65eb651bcfebc5572ac9f2ecf8d63884ce73c009322f3ad?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28632b16447b119386807973d5ea025c976011b4014148868f44a64f65ef74d9?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e26b175aece832aed9ce0e4c4de9dd511ad2dfe8b9aa86041cfb680c197d0731?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dfb16591cf296c9361ed1a1b28f8a4ac096b4aebf8c4c916e3b5a3292ea0b2a?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
      </div>
      <div className="flex w-[228px] max-w-full items-stretch gap-1.5 mt-2.5 px-5 self-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cda7b7cf27354029aeaca5d2f00d43ada633e1cd8040061507adeacaac0f599?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d4afad65c5ce87f25d66dfdef2c036054e6b51cdbf023ac5fd464e369a8287d?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce427fc046cc5da66f084dc1cf2925096eb8a6156f13574de893ed936d1e5138?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f59ec9fccbce0e4000489a281d8a52e960357b74c52936e70bdd4a33fcda76a7?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2d405a06e885a89418ffde1b3294591682944d79bc537350e6233044bacb87?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4603b7867862b0e0fd09c52a85b6f60361abdd5feef6ef0267e30a493017e5f5?"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
        />
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
function Dictionary() {
  return (
    <div className="bg-neutral-100 flex flex-col">
      <Header />
      <Headline />
      <Letters/>
      <BottomIcons/>
     
      {/* Include other components here */}
    </div>
  );
}

// Render Main Component
ReactDOM.render(
  <React.StrictMode>
  
    <Dictionary />
  
  </React.StrictMode>,
  document.getElementById('root')
);   
    
    

export default Dictionary;
