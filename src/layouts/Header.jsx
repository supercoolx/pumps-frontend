import { useState } from "react";
import { ReactSVG } from "react-svg";

const Header = () => {
    const [menuOpened, setMenuOpend] = useState(false);

    return (
        <div className="py-5 px-[30px] 3xl:px-[70px] bg-[rgb(22,22,20)] border-b border-b-primary font-outfit">
            <div className="flex flex-col items-start justify-between laptop:items-center laptop:flex-row">
                <div className="flex items-center justify-between w-full laptop:w-auto">
                    <div className='flex items-center gap-2' href="#home">
                        <img src="./imgs/logo.png" className='3xl:h-[142px] sm:h-[80px] h-[50px]'/>
                        <div className='3xl:text-[55px] sm:text-[35px] text-xl font-semibold text-primary'>$Pumps</div>
                    </div>
                    <div className="flex items-center gap-[24px] laptop:hidden">
                        <div className='flex gap-2 sm:gap-6 '>
                            <button><ReactSVG className='sm:h-[43px] sm:w-[43px] h-5 w-5' src="./imgs/telegram.svg"/></button>
                            <button><img className='sm:h-[35px] sm:w-[35px] h-5 w-5' src="./imgs/twitter.png"/></button>
                        </div>
                        <button onClick={() => setMenuOpend(!menuOpened)} className="" type="button">
                            <span className="sr-only">Open main menu</span>
                            <ReactSVG className="w-6 sm:w-10 text-primary" src="./imgs/menu.svg" />
                        </button>
                    </div>
                </div>
                <div className={`${menuOpened ? 'flex' : 'hidden'} laptop:flex w-full laptop:w-auto laptop:flex-row laptop:p-0 p-3 gap-[22px] items-center sm:text-[24px]`}>
                    <div className="flex w-full laptop:w-auto laptop:space-x-[22px] space-x-0 flex-col laptop:flex-row">
                        <div className="px-6 py-3 transition-all duration-200 cursor-pointer md:px-10 laptop:px-0 laptop:py-0 bg-primary laptop:bg-transparent rounded-xl laptop:text-primary" href="#home">Home</div>
                        <div className="px-6 py-3 transition-all duration-200 cursor-pointer md:px-10 laptop:px-0 laptop:py-0 laptop:hover:bg-transparent hover:bg-slate-800 hover:text-primary laptop:bg-transparent rounded-xl"><a href="#about_us">About Us</a></div>
                        <div className="px-6 py-3 transition-all duration-200 cursor-pointer md:px-10 laptop:px-0 laptop:py-0 laptop:hover:bg-transparent hover:bg-slate-800 hover:text-primary laptop:bg-transparent rounded-xl"><a href="#link">Buy TBA</a></div>
                        <div className="px-6 py-3 transition-all duration-200 cursor-pointer md:px-10 laptop:px-0 laptop:py-0 laptop:hover:bg-transparent hover:bg-slate-800 hover:text-primary laptop:bg-transparent rounded-xl"><a href="#feel_the_burn">Feel The Burn</a></div>
                        <div className="px-6 py-3 transition-all duration-200 cursor-pointer md:px-10 laptop:px-0 laptop:py-0 laptop:hover:bg-transparent hover:bg-slate-800 hover:text-primary laptop:bg-transparent rounded-xl"><a href="#community">Community</a></div>
                        <div className="px-6 py-3 transition-all duration-200 cursor-pointer md:px-10 laptop:px-0 laptop:py-0 laptop:hover:bg-transparent hover:bg-slate-800 hover:text-primary laptop:bg-transparent rounded-xl"><a href="#roadmap">Roadmap</a></div>
                        <div className="px-6 py-3 transition-all duration-200 cursor-pointer md:px-10 laptop:px-0 laptop:py-0 laptop:hover:bg-transparent hover:bg-slate-800 hover:text-primary laptop:bg-transparent rounded-xl"><a href="#governance">Governance</a></div>
                        <div className="px-6 py-3 transition-all duration-200 cursor-pointer md:px-10 laptop:px-0 laptop:py-0 laptop:hover:bg-transparent hover:bg-slate-800 hover:text-primary laptop:bg-transparent rounded-xl"><a href="#tokenomics">Tokenomics</a></div>
                    </div>
                    <div className='hidden gap-[24px] laptop:flex'>
                        <button href="https://t.me/pumps"><ReactSVG className='h-[43px] w-[43px]' src="./imgs/telegram.svg"/></button>
                        <button href="https://twitter.com"><img className='h-[35px] w-[35px]' src="./imgs/twitter.png"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;