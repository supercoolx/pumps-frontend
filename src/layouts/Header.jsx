import { useState } from "react";
import { ReactSVG } from "react-svg";

const menus = [
    {
        title: "Home",
        target: "home"
    },
    {
        title: "About Us",
        target: "about_us"
    },
    {
        title: "Buy TBA",
        target: "governance"
    },
    {
        title: "Feel The Burn",
        target: "feel_the_burn"
    },
    {
        title: "Community",
        target: "community"
    },
    {
        title: "Roadmap",
        target: "roadmap"
    },
    {
        title: "Governance",
        target: "governance"
    },
    {
        title: "Tokenomics",
        target: "tokenomics"
    },
]

const Header = () => {
    const [menuOpened, setMenuOpend] = useState(false);
    const [menuIndex, setMenuIndex] = useState(0);
    const handleMenuClick = function (e, key) {
        e.preventDefault();
        let elem = window.document.getElementById(e.target.getAttribute('href'));
        let scrollY = elem.getBoundingClientRect().top + window.pageYOffset - 121;
        window.scrollTo({
            top: scrollY, // Adjust for navbar height
            behavior: 'smooth'
        });
        setMenuOpend(false);
        setMenuIndex(key);
    }

    return (
        <div className="fixed top-0 z-50 w-screen py-5 px-[30px] 3xl:px-[70px] bg-[rgb(22,22,20)] border-b border-b-primary font-outfit">
            <div className="flex flex-col items-start justify-between laptop:items-center laptop:flex-row">
                <div className="flex items-center justify-between w-full laptop:w-auto">
                    <div className='flex items-center gap-2' href="#home">
                        <img src="./imgs/logo.png" className='3xl:h-[142px] sm:h-[80px] h-[50px]'/>
                        <div className='3xl:text-[55px] sm:text-[35px] text-xl font-semibold text-primary'>$Pumps</div>
                    </div>
                    <div className="flex items-center gap-[24px] laptop:hidden">
                        <div className='flex gap-2 sm:gap-6 '>
                            <a href="https://t.me/pumps"><ReactSVG className='sm:h-[43px] sm:w-[43px] h-5 w-5' src="./imgs/telegram.svg"/></a>
                            <a href="https://x.com"><img className='sm:h-[35px] sm:w-[35px] h-5 w-5' src="./imgs/twitter.png"/></a>
                        </div>
                        <button onClick={() => setMenuOpend(!menuOpened)} className="" type="button">
                            <span className="sr-only">Open main menu</span>
                            <ReactSVG className="w-6 sm:w-10 text-primary" src="./imgs/menu.svg" />
                        </button>
                    </div>
                </div>
                <div className={`${menuOpened ? 'flex' : 'hidden'} laptop:flex w-full laptop:w-auto laptop:flex-row laptop:p-0 p-3 gap-[22px] items-center sm:text-[24px]`}>
                    <div className="flex w-full laptop:w-auto laptop:space-x-[22px] space-x-0 flex-col laptop:flex-row">
                    {
                        menus.map((menu, key) => <a key={key} onClick={(e) => handleMenuClick(e, key)} className={`px-6 py-3 transition-all duration-200 cursor-pointer md:px-10 laptop:px-0 laptop:py-0  ${ menuIndex === key ? 'laptop:text-primary laptop:bg-transparent bg-primary' : 'hover:laptop:text-primary laptop:hover:bg-transparent hover:bg-primary'} rounded-xl`} href={menu.target}>{menu.title}</a>)
                    }
                    </div>
                    <div className='hidden gap-[24px] laptop:flex'>
                        <a href="https://t.me/pumps"><ReactSVG className='h-[43px] w-[43px]' src="./imgs/telegram.svg"/></a>
                        <a href="https://x.com"><img className='h-[35px] w-[35px]' src="./imgs/twitter.png"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;