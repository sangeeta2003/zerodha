// import {MenuIcon} from '@mui/icons-material';

export default function Navbar(){
    return(
      


    <nav className="bg-white-800 p-5   fixed w-full top-0 z-50 border-b-2 border-blue-50">
      <div className="container mx-auto px-10 ">
        <div className="flex items-center justify-between h-full  ">
          <div className="text-white font-bold">
            <img src='/logo.svg' alt='this is my logo'className="w-13 h-7 pl-14 "/>
          </div> 
          <div className="space-x-4 cursor-pointer">
            <a href="#" className="text-black px-4 ml-4 hover:text-[#387ed1]">Signup</a>
            <a href="#" className="text-black px-4 ml-4 hover:text-[#387ed1]">About</a>
            <a href="#" className="text-black px-4 ml-4 hover:text-[#387ed1]">Products</a>
            <a href="#" className="text-black px-4 ml-4 hover:text-[#387ed1]">Pricing</a>
            <a href="#" className="text-black px-4 ml-auto hover:text-[#387ed1]">Support</a>
            {/* <a><MenuIcon/></a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};



