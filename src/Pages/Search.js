import '../index.css'
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

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

function Headline() {
    return (

        <div className="desk-main flex w-full flex-col mt-9 px-16 max-md:max-w-full max-md:px-5">
            <div className="dictionary-header text-black text-2xl leading-6 tracking-tight ml-11 max-md:ml-2.5">
                Browse the Dictionary
            </div>
            <div className="dictionary-divider bg-neutral-500 w-[931px] shrink-0 h-[5px] ml-10 mt-1.5 self-start max-md:max-w-full" />       
            
            <div className="flex max-w-[697px] flex-col items-stretch">

                
                
                
                
                <div class= 'alphabet' style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/A.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>
                    
                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/B.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/C.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/D.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>
                    
                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/E.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/F.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/G.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/H.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/I.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/J.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/dictionary/K.svg'}
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    
                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>
                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>
                    

                </div>




                <div className="alphabet-2 flex w-[228px] max-w-full items-stretch gap-1.5 mt-2.5 px-5 self-start">
                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>

                    {/* Rest of the images */}
                    <div style={{ height: '3px', width: '30px' }}>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>
                </div>




                <div type="text" class="search-bar border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full" placeholder="Search">
                    <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                        
                        <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25a1 1 0 0 0 1.41-1.41L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </svg>
                    </button>
                </div>


            </div>
        </div>
        
        
    );
}



function Letters() {
    return (

        

        <span className="mobile-dict flex w-full flex-col mt-3.5 px-7">
            
            <div className="text-black text-base leading-6 tracking-tight self-stretch whitespace-nowrap mt-12">
                Browse the Dictionary
            </div>
            <div className="bg-black w-[290px] shrink-0 max-w-full h-[3px] ml-3.5 mt-4 self-start" />
            <div className="items-stretch content-start flex-wrap flex max-w-[250px] flex-col pr-6">

                
                <div className="mobile-letters flex items-stretch justify-between gap-1.5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/07aede53841986336cb2cce152d511258c4b488a7542f1172622032306bdcbf6?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eeaa2752cedf9e39d4993a59d286077b3fb2e2cc3b5a54a5629ce862dfce76c?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab924909972e4eca8b38db56372e93158b6a4959db0c17f542014bf24959b387?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c07f6472d6a542b2cb946a6da533d99ba8e569d5bc17d86334037ff5b23dbef?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/612db4246984bc4ce71be0118f673baadb26837e70498066faf302d892859803?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/344d95783c1cfb8337b47e8f3e218e5e222b366801fb7b5672fe193802d0ef71?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                </div>
                <div className="flex items-stretch justify-between gap-1.5 mt-2.5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/172c4b3f8f866920048afc4c12721bbeac3de8a856672293a8be06ec569a3e79?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf382d5769eae521f9751a76746105cca64ee668387dd22f829b219035a1739a?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3024b23ac36a33f1c544fdce84ad0b66dde45f7f72a5ebdad51345ea40371c26?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1750158bc010cb3cdba51cc5e256cbd25e910aabd1cb0775318b47dd482fa?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e243c781577ed9f593f6244af3a9402298b987f4dfafb3d88ebb251cc62d1b0?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/441f290419d720081405570807a810082e8384ca046b49bfbb3b7ea67b9de206?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                </div>
                <div className="flex items-stretch justify-between gap-1.5 mt-2.5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2997cd1694557b5cdbafa55273072d145d3b5ea2ace61cf908d4d203d6a72596?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a842a834420e0e774aa6811b87fc65ab51a36e0f0738ca8c5cba69a5bcc3f358?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8de2f7a0d2fadd65eb651bcfebc5572ac9f2ecf8d63884ce73c009322f3ad?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28632b16447b119386807973d5ea025c976011b4014148868f44a64f65ef74d9?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e26b175aece832aed9ce0e4c4de9dd511ad2dfe8b9aa86041cfb680c197d0731?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dfb16591cf296c9361ed1a1b28f8a4ac096b4aebf8c4c916e3b5a3292ea0b2a?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                </div>
                <div className="flex items-stretch justify-between gap-1.5 mt-2.5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cda7b7cf27354029aeaca5d2f00d43ada633e1cd8040061507adeacaac0f599?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d4afad65c5ce87f25d66dfdef2c036054e6b51cdbf023ac5fd464e369a8287d?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce427fc046cc5da66f084dc1cf2925096eb8a6156f13574de893ed936d1e5138?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f59ec9fccbce0e4000489a281d8a52e960357b74c52936e70bdd4a33fcda76a7?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2d405a06e885a89418ffde1b3294591682944d79bc537350e6233044bacb87?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4603b7867862b0e0fd09c52a85b6f60361abdd5feef6ef0267e30a493017e5f5?"
                        className="aspect-square object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full"
                    />
                </div>
            </div>
            <div className="border bg-white bg-opacity-90 self-stretch flex shrink-0 h-[43px] flex-col mt-8 rounded-[30px] border-solid border-black border-opacity-50" />
            <span className="bg-blue-900 self-stretch flex flex-col mt-5 pl-4 pr-20 py-11 rounded-2xl items-start">
                
                <div className='dictionary-title'>
                    Dictionary
                </div>
                <div className='defination-title'>
                    Definition
                </div>
                <div className='dictionary-noun'>
                    Noun
                </div>
                <div className='dictionary-verb'>
                    Verb
                </div>
                <div className='dictionary-sentence'>
                    Example of sentence
                </div>
                

            </span>

            <span className="mobile-word text-black text-sm leading-[60.06px] border bg-white bg-opacity-90 self-stretch w-full justify-center ml-2.5 mt-7 pl-10 pr-16 pt-12 pb-44 rounded-3xl border-solid border-black items-start">
                word
            </span>
        </span>
        
        
        



        
    );
}



// main 

function Maincontent() {
    return (
        <div className="self-stretch mt-5 max-md:max-w-full max-md:mr-1.5">
            <div className="dictionary">
                <div className='dictionary-title'>
                    Dictionary
                </div>
                <div className='defination-title'>
                    Definition
                </div>
                
                <svg className='dictionary-line' width="1" height="131" viewBox="0 0 1 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 -0.0012207L0.499998 130.5" stroke="white" stroke-opacity="0.87"/>
                </svg>

                <div className='dictionary-noun'>
                    Noun
                </div>
                <div className='dictionary-verb'>
                    Verb
                </div>
                <div className='dictionary-sentence'>
                    Example of sentence
                </div>

                
            </div>
            
            
            <div className='dictionary-display'>
                <div className='dictionary-display-def'>
                    Word
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
function Dictionary() {
    return (
        <div className="bg-neutral-100 flex flex-col">
            <Header />
            <Headline />
            <Letters/>
            <Maincontent/>
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
