import React from 'react';

const Header = () => {
    return (
        <div style={{position: 'sticky', top: 0, backgroundColor: '#235390', padding: '10px'}} className="self-stretch flex w-full flex-col px-5 py-3 max-md:max-w-full">
            <div className="self-center flex w-full max-w-[1315px] items-start justify-between gap-5 -mt-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="self-center flex items-start gap-4 my-auto">
                    <img
                        loading="lazy"
                        src={process.env.PUBLIC_URL + '/Images/logo.svg'}
                        className="aspect-[1.03] object-cover object-center w-[65px] overflow-hidden max-w-full shrink-0"
                        alt="Logo"
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
                        alt="Home"
                    />

                    <img
                        loading="lazy"
                        src={process.env.PUBLIC_URL + '/Images/People.svg'}
                        className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
                        alt="People"
                    />

                    <img
                        loading="lazy"
                        src={process.env.PUBLIC_URL + '/Images/Trans.svg'}
                        className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
                        alt="Trans"
                    />  
                    <img
                        loading="lazy"
                        src={process.env.PUBLIC_URL + '/Images/Game.svg'}
                        className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
                        alt="Game"
                    />
                    <a href="/dictionary">
                        <img
                            loading="lazy"
                            src={process.env.PUBLIC_URL + '/Images/Comm.svg'}
                            className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
                            alt="Comm"
                        />
                    </a>
                </div>

                <div className="self-center flex items-start gap-0 my-auto">
                    <img
                        loading="lazy"
                        src={process.env.PUBLIC_URL + '/Images/Tabler_bulb.svg'}
                        className="aspect-[1.05] object-cover object-center w-[46px] overflow-hidden max-w-full shrink-0"
                        alt="Bulb"
                    />

                    <div className="justify-center text-stone-900 text-center text-base leading-[51.04px] items-start bg-white w-[183px] max-w-full pl-2.5 pr-3 rounded-[30px] self-start">
                        Get Started
                    </div>
                </div>

                <img
                    loading="lazy"
                    src={process.env.PUBLIC_URL + '/Images/Basil_menu-solid.svg'}
                    className="aspect-[1.28] object-cover object-center w-16 overflow-hidden self-center max-w-full shrink-0 my-auto"
                    alt="Menu"
                />
            </div>
        </div>
    );
};

export default Header;