import { useEffect, useState } from "react"

const Collapsible = ({title, des, open}) => {
	const [hidden, setHidden] = useState(!open);

    return (
        <div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
            <div className="flex items-center justify-between text-sm sm:text-3xl" onClick={()=>setHidden(!hidden)}>
                <h2 className="px-2 text-primary">{title}</h2>
                <img className={`sm:h-auto h-[10px] origin-center ${hidden?'rotate-180':''}`} src="./imgs/arrow.svg" alt="" />
            </div>
            <div className={`sm:mt-[35px] mt-[14px] sm:text-2xl text-[12px] ${hidden? 'hidden' : ''}`}>
                <p className="">{des}</p>
            </div>
        </div>
    )
}

export default Collapsible;