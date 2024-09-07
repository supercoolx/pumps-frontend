import { useState } from "react"
import Header from "../layouts/Header"

function App() {

	return (
		<div>
			<Header />
			<div className="mb-10">
				<div className="bg-[url('/imgs/img1.png')] bg-top bg-cover bg-no-repeat text-center">
					<h1 className="font-semibold pt-[33%] mx-3 laptop:text-[74px] md:text-6xl mobile:text-4xl text-2xl  font-palanquin text-primary uppercase">$Pumps - on Bitcoin and Ethereum</h1>
					<h2 className="laptop:text-[45px] md:text-4xl text-2xl laptop:px-72 lg:px-500 px-10 mt-[47px] leading-snug">They promised to send you to the Moon. Pumps will send you to the gym!</h2>
					<h3 className="laptop:text-[37px] md:text-3xl sm:text-xl mt-[47px]">Powered By <span className="text-primary">Runesbridge</span></h3>
					<h3 className="laptop:text-[33px] md:text-2xl ">A V-Guy Production</h3>
					<button className="relative bottom-0 translate-y-[50%] text-[#161614] mt-[47px] lg:px-[47px] lg:py-[30px] md:px-8 md:py-5 px-5 py-3 rounded-md bg-primary font-outfit md:text-[25px] text-lg font-semibold">Contract Address</button>
					<div className="relative bottom-0">
						<img src="./imgs/coin1.png" alt="img" className="absolute md:h-auto h-10 left-0 -translate-y-[100%]" />
						<img src="./imgs/coin2.png" alt="img" className="absolute h-10 md:h-auto mobile:right-10 right-5" />
					</div>
				</div>
				<div className="mt-[95px]">
					<div className="flex flex-col items-center lg:flex-row">
						<div className="flex-1 laptop:px-[137px] px-5 laptop:pr-0">
							<p className="font-molengo text-[30px]">About Us</p>
							<h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold mt-[7px] sm:leading-[77px] text-primary font-palanquin">$Pumps is Launched on October 1st 2024</h1>
							<p className="sm:text-[37px] text-2xl mt-[33px] sm:leading-[44px] text-justify font-molengo">This historic event led to $Pumps being awesome and more and more people started going to the gym and getting Pumped. $Pumps is the number one meme coin for people who respect themselves</p>
							<p className="sm:text-[37px] text-2xl mt-[24px] sm:leading-[44px] text-justify font-molengo">$Pumps is powered by Runesbridge.xyz and produced by the Runesbridge Airdrop Guild.</p>
						</div>
						<div className="flex justify-center w-full lg:-ml-60 md:block md:w-auto">
							<img src="./imgs/img2.png" className="laptop:h-[857px] mobile:h-[500px] h-[350px]" alt="" />
						</div>
					</div>
					<div className="w-full -mt-20">
						<img src="./imgs/coin1.png" className="ml-[40%] md:h-[160px] h-[80px]" alt="" />
					</div>
				</div>
				<div className="flex flex-col-reverse lg:flex-row laptop:items-start items-end gap-[34px] mt-[109px]">
					<div className="flex justify-center flex-1 w-full">
						<img src="./imgs/img3.png" className="lg:w-full w-[50%]" alt="" />
					</div>
					<div className="flex-1 laptop:mx-[86px] mx-5 lg:ml-0">
						<h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold leading-[108px] text-primary font-palanquin">Feel the Burn</h1>
						<p className="sm:text-[37px] text-2xl mt-[10px] sm:leading-[44px] text-justify font-molengo">$Pumps Go To The Gym functions with a “Proof Of Burn” (POB) system. We will build toys which are fun inexpensive and cause people to burn tokens while having fun. Post a meme, burn some $Pumps, advertise your wellness or fitness product by burning some $pumps. Wanna buy a wacky gym meme that allows you the right to modify and commercialize as you see fit, burn some $pumps as well as pay the creator.</p>
					</div>
				</div>
				<div>
					<div className="absolute right-[44px] -translate-y-[30%] flex items-start">
						<img src="./imgs/coin2.png" className="translate-x-1 -translate-y-5" alt="" />
						<img src="./imgs/coin1.png" alt="" />
					</div>
					<div className="mt-[67px] bg-[url('/imgs/gym.png')] flex xl:justify-end justify-center bg-cover bg-center">
						<div className="pt-[200px] flex-1 max-w-[968px] xl:mr-[10%] sm:mx-10 mx-5">
							<h1 className="text-4xl font-semibold lg:text-6xl sm:text-5xl text-primary font-palanquin">Burn Factory</h1>
							<p className="pt-[13px] font-molengo sm:text-[30px] text-2xl sm:leading-[39px] text-justify">Did someone promise to bring you to the moon and they didn’t deliver? $Pumps will send you to the Gym. Going to the gym is healthy so telling everyone about Pumps might make people healthier</p>
							<p className="font-molengo pt-[36px] sm:text-[30px] text-2xl sm:leading-[39px] text-justify">We believe that anyone can understand and get onboard with $Pumps because we are <span className='text-primary'>“Powered by Runesbridge”</span> to be both <span className='text-primary'>ERC-20 and BTC Runes</span>.</p>
							<div className="mt-[57px] mb-[89px]">
								<div className="flex lg:flex-row flex-col gap-[10px]">
									<button className="bg-white rounded-2xl flex-[1] text-center sm:py-[24px] py-4 font-molengo text-primary md:text-[30px] text-2xl bg-opacity-[12%]">$Pumps on Telegram</button>
									<button className="bg-white rounded-2xl flex-[2] sm:py-[24px] py-4 font-molengo text-primary md:text-[30px] text-2xl bg-opacity-[12%]">Updates on Twitter</button>
								</div>
								<div className="flex lg:flex-row flex-col gap-[10px] lg:mt-[18px] mt-[10px]">
									<button className="bg-white rounded-2xl flex-[1] text-center sm:py-[24px] py-4 font-molengo text-primary md:text-[30px] text-2xl bg-opacity-[12%]">FunBot on Twitter</button>
									<button className="bg-white rounded-2xl flex-[2] sm:py-[24px] py-4 font-molengo text-primary md:text-[30px] text-2xl bg-opacity-[12%]">The Runesbridge AirDrop Guild (RAG)</button>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute -translate-y-[55%]">
						<img src="./imgs/coin3.png" className="laptop:h-[450px] lg:h-[300px] h-[150px]" alt="" />
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="lg:flex items-center lg:flex-row flex-wrap gap-[92px] mt-[186px] w-full px-10 justify-center">
						<div className="bg-white relative mx-auto lg:mx-0 flex items-center justify-center flex-1 max-w-[627px] h-[320px] bg-opacity-[8%] border-2 border-white border-opacity-[12%] rounded-[40px]">
							<p style={{ WebkitTextFillColor: 'transparent' }} className="text-[30px] bg-clip-text bg-gradient-to-l from-[#b72346] to-[#c5882d] font-inter text-center font-bold">Telegram bot to post a meme, in<br /> exchange for a small burn of<br /> $pumps.</p>
							<div className="absolute top-0 right-0 translate-x-[27px] -translate-y-[27px] w-[95px] h-[95px] flex items-center justify-center rounded-full bg-white bg-opacity-[10%] border-2 border-white border-opacity-[12%]"><img src="./imgs/fire.svg" className="h-[50px]" alt="" /></div>
						</div>
						<div className="bg-white relative mx-auto lg:mx-0 lg:mt-0 mt-[61px] flex items-center justify-center flex-1 max-w-[627px] h-[320px] bg-opacity-[8%] border-2 border-white border-opacity-[12%] rounded-[40px]">
							<p style={{ WebkitTextFillColor: 'transparent' }} className="text-[30px] bg-clip-text bg-gradient-to-l from-[#4431ba] to-[#979dd8] font-inter text-center font-bold">Telegram bot to post a meme, in<br /> exchange for a small burn of<br /> $pumps.</p>
							<div className="absolute top-0 right-0 translate-x-[27px] -translate-y-[27px] w-[95px] h-[95px] flex items-center justify-center rounded-full bg-white bg-opacity-[10%] border-2 border-white border-opacity-[12%]"><img src="./imgs/people.svg" className="h-[50px]" alt="" /></div>
						</div>
					</div>
					<div className="flex justify-center w-full px-10">
						<div className="bg-white relative flex items-center mt-[61px] justify-center flex-1 lg:max-w-[816px] max-w-[627px] h-[320px] bg-opacity-[8%] border-2 border-white border-opacity-[12%] rounded-[40px]">
							<p style={{ WebkitTextFillColor: 'transparent' }} className="text-[30px] bg-clip-text bg-gradient-to-l from-[#30ae35] to-[#236d49] font-inter text-center font-bold">Telegram bot to post a meme, in<br /> exchange for a small burn of<br /> $pumps.</p>
							<div className="absolute top-0 right-0 translate-x-[27px] -translate-y-[27px] w-[95px] h-[95px] flex items-center justify-center rounded-full bg-white bg-opacity-[10%] border-2 border-white border-opacity-[12%]"><img src="./imgs/weight.svg" className="h-[50px]" alt="" /></div>
						</div>
					</div>
				</div>
				<div className="flex lg:flex-row flex-col-reverse  lg:items-center items-end justify-between -mt-[15%]">
					<h1 className="lg:text-6xl sm:text-5xl text-4xl ml-[192px] font-semibold font-palanquin text-primary lg:w-auto w-full px-10">Roadmap</h1>
					<img src="./imgs/img4.png" className="2xl:h-[812px] laptop:h-[700px] xl:h-[600px] lg:h-[500px] md:h-[400px]" alt="" />
				</div>
				<div className="relative flex items-end justify-between xl:mt-[234px] md:pr-[5%] pr-5 pl-[81px]">
					<img src="./imgs/coin1.png" className="translate-y-[80%] xl:h-[150px] lg:h-[120px] md:h-[100px] h-[80px]" alt="" />
					<img src="./imgs/line.svg" className="w-[80%] flex-1 text-[#9d8d00]" alt="" />
				</div>
				<div className="text-center font-molengo">
					<p className="text-[30px] leading-[61px]">Governance</p>
					<h1 className="font-bold text-primary mt-[3px] lg:text-6xl sm:text-5xl text-4xl font-palanquin">Governance of the $Pumps Token</h1>
					<p className="sm:text-[37px] text-2xl sm:mt-[56px] mt-8 leading-[62px]">Phased Committee-Based Governance Model</p>
					<p className="sm:mt-[20px] mt-3 sm:text-[30px] text-xl laptop:mx-[261px] sm:mx-[100px] mx-5">The governance of the $Pumps token is designed to evolve with the growth and maturity of our community. Initially, committees will be formed with a focus on expediency and effectiveness, gradually transitioning to a more transparent and formal governance structure. This phased approach ensures both quick decision-making and long-term stability.</p>
					<div className="flex justify-end">
						<img src="./imgs/coin2.png" className="h-[95px] mt-[32px] mr-[114px]" alt="" />
					</div>
				</div>
				<div className="font-molengo">
					<div style={{ WebkitTextStroke: '2px #f7931a'}} className="relative -z-10 ml-[10%] font-bold opacity-[39%] font-league text-transparent 3xl:text-[188px] 2xl:text-[150px] xl:text-[120px] lg:text-[90px] md:text-[60px] text-[30px]">PHASE 1</div>
					<div className="bg-[#201f1c] z-10 pb-[118px] sm:text-[30px] text-2xl 3xl:mx-[180px] 2xl:mx-[150px] xl:mx-[120px] lg:mx-[90px] md:mx-[60px] mx-[30px] border-2 border-opacity-[12%] border-white rounded-[40px] lg:px-[82px] px-[30px] 3xl:-mt-[120px] 2xl:-mt-[95px] xl:-mt-[75px] lg:-mt-[55px] md:-mt-[33px]">
						<h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold text-center text-primary font-palanquin mt-[74px]">Initial Formation</h1>
						<p className="mt-[65px] text-primary sm:text-[30px] text-2xl">Mechanism:</p>
						<p className="mt-[15px]">In the initial phase, the governance committees will be composed of trusted and knowledgeable individuals from the Runesbridge Airdrop Guild and the $Pumps community. These committees will be formed opaquely to expedite critical early decisions and set up the foundational governance structures.</p>
						<p className="mt-[47px] text-primary">Committee Composition:</p>
						<div className="mt-[15px]">
							<li>Members from the Runesbridge Airdrop Guild</li>
							<li>Active members of the $Pumps community</li>
						</div>
						<p className="mt-[47px] text-primary">Purpose:</p>
						<div className="mt-[15px]">
							<li>Establish foundational governance structures</li>
							<li>Make swift decisions to ensure community stability and growth</li>
						</div>
						<p className="mt-[47px] text-primary">Authority:</p>
						<div className="mt-[15px]">
							<li>Committees will have broad authority to make necessary decisions during the initial phase.</li>
						</div>
					</div>
				</div>
				<div className="font-molengo mt-[135px]">
					<div style={{ WebkitTextStroke: '2px #f7931a'}} className="relative -z-10 ml-[20%] font-bold opacity-[39%] leading-[87px] font-league text-transparent 3xl:text-[188px] 2xl:text-[150px] xl:text-[120px] lg:text-[90px] md:text-[60px] text-[30px]">PHASE 2</div>
					<div className="bg-[#201f1c] z-10 pb-[118px] sm:text-[30px] text-2xl 3xl:mx-[180px] 2xl:mx-[150px] xl:mx-[120px] lg:mx-[90px] md:mx-[60px] mx-[30px] border-2 border-opacity-[12%] border-white rounded-[40px] lg:px-[82px] px-[30px] -mt-[30px]">
						<h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold text-center text-primary font-palanquin mt-[74px]">Transition to Transparency</h1>
						<p className="mt-[65px] text-primary sm:text-[30px] text-2xl">Mechanism:</p>
						<p className="mt-[15px]">As the community grows, we will introduce transparency and formalization in the committee selection and decision-making processes. Committee membership will be expanded to include broader community representation through a nomination and vetting process.</p>
						<p className="mt-[47px] text-primary">Steps:</p>
						<div className="mt-[15px]">
							<li>liImplement a nomination process where community members can suggest new committee members.</li>
							<li>Introduce periodic reporting from committees to the community.</li>
							<li>Begin documenting and publishing committee decisions and processes.</li>
						</div>
						<p className="mt-[47px] text-primary">Goals:</p>
						<div className="mt-[15px]">
							<li>Increase community trust and involvement in governance</li>
							<li>Establish formal processes and structures for long-term stability</li>
						</div>
					</div>
				</div>
				<div className="font-molengo mt-[135px]">
					<div style={{ WebkitTextStroke: '2px #f7931a'}} className="relative -z-10 ml-[30%] font-bold opacity-[39%] leading-[87px] font-league text-transparent 3xl:text-[188px] 2xl:text-[150px] xl:text-[120px] lg:text-[90px] md:text-[60px] text-[30px]">PHASE 3</div>
					<div className="bg-[#201f1c] z-10 pb-[118px] sm:text-[30px] text-2xl 3xl:mx-[180px] 2xl:mx-[150px] xl:mx-[120px] lg:mx-[90px] md:mx-[60px] mx-[30px] border-2 border-opacity-[12%] border-white rounded-[40px] lg:px-[82px] px-[30px] -mt-[30px]">
						<h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold text-center text-primary font-palanquin mt-[74px]">Full Transparency and Strict Governance</h1>
						<p className="mt-[65px] text-primary sm:text-[30px] text-2xl">Mechanism:</p>
						<p className="mt-[15px]">In the final phase, we will fully transition to a transparent and formal governance model with strict rules and processes. This includes clear criteria and procedures for committee membership, regular elections, and the establishment of sub-committees or working groups for specialized tasks.</p>
						<p className="mt-[47px] text-primary">Steps:</p>
						<div>
							<li>Develop and publish detailed governance documents (bylaws, charters, etc.).</li>
							<li>Set up a transparent election process for committee members with defined term limits.</li>
							<li>Conduct regular audits and performance reviews of committees and sub-committees.</li>
							<li>Encourage active participation through structured feedback mechanisms and community engagement activities.</li>
						</div>
						<p className="mt-[47px] text-primary">Goals:</p>
						<div className="mt-[15px]">
							<li>Ensure robust and accountable governance</li>
							<li>Provide clear roles and responsibilities, reducing the risk of mismanagement</li>
						</div>
					</div>
				</div>
				<div className="font-molengo mt-[135px]">
					<div style={{ WebkitTextStroke: '2px #f7931a'}} className="relative -z-10 ml-[40%] font-bold opacity-[39%] leading-[87px] font-league text-transparent 3xl:text-[188px] 2xl:text-[150px] xl:text-[120px] lg:text-[90px] md:text-[60px] text-[30px]">PHASE 4</div>
					<div className="bg-[#201f1c] z-10 pb-[118px] sm:text-[30px] text-2xl 3xl:mx-[180px] 2xl:mx-[150px] xl:mx-[120px] lg:mx-[90px] md:mx-[60px] mx-[30px] border-2 border-opacity-[12%] border-white rounded-[40px] lg:px-[82px] px-[30px] -mt-[30px]">
						<h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold text-center text-primary font-palanquin mt-[74px]">Staking and Reward System</h1>
						<p className="mt-[65px] text-primary sm:text-[30px] text-2xl">Mechanism:</p>
						<p className="mt-[15px]">To incentivize participation and reward those who serve on the governance committees, we will implement a staking and reward system.</p>
						<p className="mt-[47px] text-primary">Steps:</p>
						<div>
							<li>Members who serve on committees will be required to stake a certain amount of $Pumps tokens.</li>
							<li>In return for their service and commitment, these members will receive rewards in the form of additional $Pumps tokens.</li>
							<li> Rewards will be distributed based on the length of service and the contributions made to the governance process.</li>
						</div>
						<p className="mt-[47px] text-primary">Goals:</p>
						<div className="mt-[15px]">
							<li>Encourage active participation in governance</li>
							<li>Reward commitment and valuable contributions to the community</li>
						</div>
					</div>
				</div>
				<div className="mt-[128px] flex justify-center flex-wrap">
					<h1 className="w-10/12 text-4xl font-bold text-center sm:text-6xl text-primary font-palanquin">Safeguards and Mechanisms</h1>
					<div className="mt-[100px] flex justify-center flex-wrap gap-[70px] w-11/12">
						<div className="sm:w-[375px] w-[300px] sm:h-[375px] h-[300px] bg-gradient-to-tr from-primary from-10% to-80% to-transparent rounded-full">
							<div className="sm:w-[371px] w-[296px] sm:h-[371px] h-[296px] bg-black m-[2px] rounded-full font-molengo sm:text-2xl text-xl px-3 pt-[35%] text-center">Multi-Signature Wallets: Require multiple committee members to approve significant transactions, ensuring no single person has undue control.</div>
						</div>
						<div className="sm:w-[375px] w-[300px] sm:h-[375px] h-[300px] bg-gradient-to-tr from-primary from-10% to-80% to-transparent rounded-full">
							<div className="sm:w-[371px] w-[296px] sm:h-[371px] h-[296px] bg-black m-[2px] rounded-full font-molengo sm:text-2xl text-xl px-3 pt-[35%] text-center">Transparency Milestones: Set clear milestones for increasing transparency, such as public reporting of decisions and financial audits. </div>
						</div>
						<div className="sm:w-[375px] w-[300px] sm:h-[375px] h-[300px] bg-gradient-to-tr from-primary from-10% to-80% to-transparent rounded-full">
							<div className="sm:w-[371px] w-[296px] sm:h-[371px] h-[296px] bg-black m-[2px] rounded-full font-molengo sm:text-2xl text-xl px-3 pt-[35%] text-center">Feedback Mechanisms: Establish regular channels for community feedback and incorporate it into decision-making processes.</div>
						</div>
						<div className="sm:w-[375px] w-[300px] sm:h-[375px] h-[300px] bg-gradient-to-tr from-primary from-10% to-80% to-transparent rounded-full">
							<div className="sm:w-[371px] w-[296px] sm:h-[371px] h-[296px] bg-black m-[2px] rounded-full font-molengo sm:text-2xl text-xl px-3 pt-[35%] text-center">Proposal Thresholds: Define thresholds for proposal submission and approval, ensuring only well-supported initiatives move forward.</div>
						</div>
						<div className="sm:w-[375px] w-[300px] sm:h-[375px] h-[300px] bg-gradient-to-tr from-primary from-10% to-80% to-transparent rounded-full">
							<div className="sm:w-[371px] w-[296px] sm:h-[371px] h-[296px] bg-black m-[2px] rounded-full font-molengo sm:text-2xl text-xl px-3 pt-[35%] text-center">Accountability Measures: Implement penalties or corrective actions for committee members who fail to perform or act against the community’s interests.</div>
						</div>
					</div>
				</div>
				<div className="flex lg:flex-row flex-col-reverse justify-between 3xl:my-[155px] laptop:my-[100px] my-[48px] 3xl:ml-[176px] laptop:ml-[100px] sm:ml-[70px] ml-[48px]">
					<div className="flex-1 font-molengo">
						<h1 className="font-bold text-primary laptop:text-[82px] sm:text-[50px] text-[36px] font-palanquin">Tokenomics</h1>
						<div className="laptop:text-[32px] text-[22px] laptop:mt-[73px] mt-[36px] laptop:space-y-[17px] space-y-[12px]">
							<div className="flex flex-col sm:flex-row">
								<div className="flex-[2] text-primary">Name:</div>
								<div className="flex-[3]">Pumps Go To The Gym</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="flex-[2] text-primary">ERC-20 Ticker:</div>
								<div className="flex-[3]">$Pumps</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="flex-[2] text-primary">BTC Runes Ticker:</div>
								<div className="flex-[3]">$Pumps*Go*To*The*Gym</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="flex-[2] text-primary">Total Tokens:</div>
								<div className="flex-[3]">100,000,000</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="flex-[2] text-primary">ERC20 Launch Date:</div>
								<div className="flex-[3]">April 1, 2024</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="flex-[2] text-primary">BTC Runes Launch Date:</div>
								<div className="flex-[3]">February 1, 2025</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="flex-[2] text-primary">Listing Date:</div>
								<div className="flex-[3]">October 1, 2024</div>
							</div>
							<div className="flex flex-col sm:flex-row">
								<div className="flex-[2] text-primary">Powered By:</div>
								<div className="flex-[3]">RunesBridge Airdrop Guild</div>
							</div>
						</div>
					</div>
					<div>
						<img src="./imgs/img5.png" className="laptop:h-[655px] sm:h-[480px] h-655px 3xl:mr-[190px] laptop:mr-[50px] mr-[40px]" alt="" />
					</div>
				</div>
				<div className="flex flex-col items-center sm:flex-row">
					<div className="mt-[47px]">
						<img src="./imgs/img6.png" className="laptop:h-[622px] lg:h-[400px] sm:h-[250px] h-auto" alt="" />
					</div>
					<div className="flex-1 font-molengo">
						<div>
							<h1 className="laptop:text-[32px] lg:text-[24px] sm:text-[16px] text-[18px] text-primary">ERC20 Initial Airdrop Distribution:</h1>
							<div className="flex ml-[33px] mt-[11px]">
								<div className="2xl:flex-[2] flex-[1] laptop:text-[32px] lg:text-[22px] sm:text-[14px] text-[16px] text-primary">Percentage:</div>
								<div className="2xl:flex-[3] flex-[2] laptop:text-[29px] lg:text-[20px] sm:text-[12px] text-[14px]">24% (24,000,000 $Pumps)</div>
							</div>
							<div className="flex ml-[33px] mt-[5px]">
								<div className="2xl:flex-[2] flex-[1] laptop:text-[32px] lg:text-[22px] sm:text-[14px] text-[16px] text-primary">Recipients::</div>
								<div className="2xl:flex-[3] flex-[2] laptop:text-[29px] lg:text-[20px] sm:text-[12px] text-[14px]">3,300 RAG Wallets (Join RAG)</div>
							</div>
						</div>
						<div className="mt-[39px]">
							<h1 className="laptop:text-[32px] lg:text-[24px] sm:text-[16px] text-[18px] text-primary">ERC20 Initial Airdrop Distribution:</h1>
							<div className="flex ml-[33px] mt-[11px]">
								<div className="2xl:flex-[2] flex-[1] laptop:text-[32px] lg:text-[22px] sm:text-[14px] text-[16px] text-primary">Percentage:</div>
								<div className="2xl:flex-[3] flex-[2] laptop:text-[29px] lg:text-[20px] sm:text-[12px] text-[14px]">24% (24,000,000 $Pumps)</div>
							</div>
							<div className="flex ml-[33px] mt-[5px]">
								<div className="2xl:flex-[2] flex-[1] laptop:text-[32px] lg:text-[22px] sm:text-[14px] text-[16px] text-primary">Recipients::</div>
								<div className="2xl:flex-[3] flex-[2] laptop:text-[29px] lg:text-[20px] sm:text-[12px] text-[14px]">3,300 RAG Wallets (Join RAG)</div>
							</div>
						</div>
						<div className="mt-[39px]">
							<h1 className="laptop:text-[32px] lg:text-[24px] sm:text-[16px] text-[18px] text-primary">ERC20 Initial Airdrop Distribution:</h1>
							<div className="flex ml-[33px] mt-[11px]">
								<div className="2xl:flex-[2] flex-[1] laptop:text-[32px] lg:text-[22px] sm:text-[14px] text-[16px] text-primary">Percentage:</div>
								<div className="2xl:flex-[3] flex-[2] laptop:text-[29px] lg:text-[20px] sm:text-[12px] text-[14px]">24% (24,000,000 $Pumps)</div>
							</div>
							<div className="flex ml-[33px] mt-[5px]">
								<div className="2xl:flex-[2] flex-[1] laptop:text-[32px] lg:text-[22px] sm:text-[14px] text-[16px] text-primary">Recipients::</div>
								<div className="2xl:flex-[3] flex-[2] laptop:text-[29px] lg:text-[20px] sm:text-[12px] text-[14px]">3,300 RAG Wallets (Join RAG)</div>
							</div>
						</div>
					</div>
				</div>
				<div className="font-molengo mt-[57px] lg:pb-[170px] pb-[50px] bg-[#201f1c] text-[30px] mx-[39px] border-2 border-opacity-[12%] border-white rounded-[40px]">
					<h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-lg font-bold text-center text-primary font-palanquin lg:mt-[116px] sm:mt-[56px] mt-[30px]">Frequently Asked Questions</h1>
					<div className="lg:mt-[111px] sm:mt-[56px] mt-[30px] sm:space-y-[20px] space-y-[10px] text-[30px] font-molengo lg:px-[132px] sm:px-[60px] px-[12px]">
						<div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
							<div className="flex items-center justify-between text-sm sm:text-3xl">
								<h2 className="px-2 text-primary">Why is $Pumps so great?</h2>
								<img className="sm:h-auto h-[10px]" src="./imgs/arrow.svg" alt="" />
							</div>
							<div className="sm:mt-[35px] mt-[14px] sm:text-2xl text-[12px]">
								<p className="">Because $Pumps Go To The Gym</p>
							</div>
						</div>
						<div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
							<div className="flex items-center justify-between text-sm sm:text-3xl">
								<h2 className="px-2 text-primary">How can I improve my life?</h2>
								<img className="sm:h-auto h-[10px]" src="./imgs/arrow.svg" alt="" />
							</div>
						</div>
						<div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
							<div className="flex items-center justify-between text-sm sm:text-3xl">
								<h2 className="px-2 text-primary">If you are having lower back pain?</h2>
								<img className="sm:h-auto h-[10px]" src="./imgs/arrow.svg" alt="" />
							</div>
						</div>
						<div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
							<div className="flex items-center justify-between text-sm sm:text-3xl">
								<h2 className="px-2 text-primary">If you are experiencing awkwardness discussing crypto with your loved ones ?</h2>
								<img className="sm:h-auto h-[10px]" src="./imgs/arrow.svg" alt="" />
							</div>
						</div>
						<div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
							<div className="flex items-center justify-between text-sm sm:text-3xl">
								<h2 className="px-2 text-primary">If you are experiencing stress?</h2>
								<img className="sm:h-auto h-[10px]" src="./imgs/arrow.svg" alt="" />
							</div>
						</div>
						<div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
							<div className="flex items-center justify-between text-sm sm:text-3xl">
								<h2 className="px-2 text-primary">If you are tired ? Perhaps because your Neighbor’s tree is dropping leafs and causing you to spend your day cleaning up leafs, putting them in garbages bags and hauling them to the road. If this causes stress or tiredness.</h2>
								<img className="sm:h-auto h-[10px]" src="./imgs/arrow.svg" alt="" />
							</div>
						</div>
						<div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
							<div className="flex items-center justify-between text-sm sm:text-3xl">
								<h2 className="px-2 text-primary">Don’t feel comfortable speaking with “that side of the family” because of politics ?</h2>
								<img className="sm:h-auto h-[10px]" src="./imgs/arrow.svg" alt="" />
							</div>
						</div>
						<div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
							<div className="flex items-center justify-between text-sm sm:text-3xl">
								<h2 className="px-2 text-primary">Do you have to be in shape to like pumps go to the gym ?Do you have to be in shape to like pumps go to the gym ?</h2>
								<img className="sm:h-auto h-[10px]" src="./imgs/arrow.svg" alt="" />
							</div>
						</div>
						<div className="rounded-[15px] border-2 py-[37px] lg:px-[63px] sm:px-[30px] px-[12px] bg-white bg-opacity-[12%] border-white border-opacity-[12%]">
							<div className="flex items-center justify-between text-sm sm:text-3xl">
								<h2 className="px-2 text-primary">So there was this guy named Dave, right?</h2>
								<img className="sm:h-auto h-[10px]" src="./imgs/arrow.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex md:flex-row flex-col items-center justify-between mt-[36px] lg:ml-[12%] lg:mr-[7%] ml-[5%] mr-[5%] mb-[55px]">
				<div className="flex items-center gap-[26px]">
					<p className="sm:text-[20px] text-[12px] font-outfit">Follow us on:</p>
					<div className="flex laptop:gap-[20px] gap-[10px]">
						<img className="sm:h-[43px] h-[20px]" src="./imgs/telegram.svg" alt="" />
						<img className="sm:h-[43px] h-[20px]" src="./imgs/twitter.png" alt="" />
					</div>
				</div>
				<p className="sm:text-[20px] text-[12px] md:mt-0 mt-5 font-medium font-outfit">2024 © Copyright $Pumps. All Rights Reserved</p>
			</div>
		</div>
	)
}

export default App
