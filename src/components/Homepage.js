import Signup from "./signup"
export default function Homepage(){
    return(
        <div className="bg-white flex flex-col max-w-[1800px] py-12 mx-auto">
            <img src="/landing.png" alt="this is my homepage" 
            className=" ml-20 font-bold w-30 h-38"/>
            <div className="mx-auto ">
                <h1 className="text-4xl font-semibold ml-40 text-slate-800 mb-3">Invest in everything</h1>
                <p className="text-xl text-slate-600">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <div className="ml-20 py-3">
                <button className="bg-blue-500 border-r-blue-4 text-white font-bold py-2 px-8  hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 ml-28">Sign up now</button>
                </div>
               
            </div>
            <div>
                <div className="py-20 px-50 mr-70 ml-80 mt-28 gap-x-20 mb-100 relative ">
<img src="/largest-broker.svg" alt="2nd"className="-px-5" />
<h1 className="font-semibold text-3xl text-slate-800 absolute right-20 top-5 px-14 py-3">Largest stock broker in India</h1>
<p className="font-bold text-1xl text-slate-700 absolute right-7 top-14 py-6 px-8">
    1+ Crore Zerodha clients contribute to over 15% of all retail order <br></br> volumes in India daily by trading and investing in:
    </p>
    <div className="flex gap-2 mt-10 absolute right-12 top-20 py-10 px-8">
    <ol className="list-disc px-7 ">
        <li>Futures and Options</li>
        <li>Commodity derivatives</li>
        <li>Currency derivatives</li>
    </ol>
    <ol className="list-disc  ">
        <li>Stocks & IPOs</li>
        <li>Direct mutual funds</li>
        <li>Bonds and Govt. Securities</li>
    </ol>
    
    </div>
    <img src='/press-logos.png' className="px-4 py-36 absolute right-4 top-24" />
</div>

            </div>
            <div className="py-7">
                <div className="text-center ">
                    <h1 className="text-4xl font-semibold">The Zerodha Universe</h1>
                    
                    <p className="8xl py-4 text-slate-700">A whole ecosystem of modern investment apps <br></br>
tailored to specific needs, built from the ground up</p>
                </div>
                <img src="/ecosystem.png" alt="hey"/>
                <div className=" gap-6 mx-auto text-[#245898] text-center">
                <button className='hover:text-slate-800'>Explore out products <span></span></button>
                    <button className='hover:text-slate-800 px-4'>Try kite demo <span></span></button>
                </div>
            </div>
            <div className="py-16 px-20 flex mt-20">
               
                <div className="px-20 py-3">
               
                    <h1 className="text-4xl font-semibold text-slate-800 px-8">Unbeatable pricing</h1>
                    <p className="font-bold text-slate-500 text-1xl py-3 px-7">We pioneered the concept of discount broking and price 
                        <br></br>transparency in India. Flat fees and no hidden charges.

</p>
<button className="text-[#245898] hover:text-slate-800 px-7">See Pricing</button>
                </div>
                <div className="px-20 ml-8 flex text-right ">
                <div className="px-10 border w-[70%]">
                    <p className="font-bold text-5xl text-slate-600 px-5 ">₹0</p>
                    <p className="font-bold text-1xl text-slate-500" >Free equity delivery and <br></br>direct mutual funds</p>
                    
                </div>
                 <div className=" border w-[70%] pl-3 ">
                    <p className="font-bold text-5xl  text-slate-600 px-7 py-3 ">₹20</p>
                    <p className="text-center py-7 font-bold text-1xl text-slate-500">Intraday and F&O</p>
                </div> 
                </div>
            </div>
            <div className="py-12 flex ">
            <img src="/index-education.svg" alt="bye" className="mr-8 px-4"/>
                <div className="text-right px-32">
               
                    <h1 className="px-32 font-semibold text-slate-700 text-3xl mb-2">Free and open market education</h1>
                    <p1 className="px-28 text-xl text-slate-800 mb-4 py-3">Varsity, the largest online stock marketeducation book in the world <br></br> covering everything from the basics to advanced trading.</p1>
                    <br></br>
                    <button className="text-[#245898] hover:text-slate-800 px-80 py-4">Varsity</button>
                    <br></br>
<p2 className="px-28 text-xl text-slate-800 mb-4 py-2">TradingQ&A, the most active trading and investment community in <br></br> India for all your market related queries.</p2>
<br></br>
<button className="text-[#245898] hover:text-slate-800 px-80 py-3 ">TradingQ&A</button>
                </div>
                
               
                
            </div>
           
            <Signup/>
           
             </div> 
    )}