import Menu from "./Menu";
import Header_logo from "./Header-logo";

const Header_top = () => {
    return ( 
        <div className="flex justify-between items-center pt-5 max-w-7xl m-auto">
            <Header_logo></Header_logo>
            <Menu></Menu>
            <div className="flex items-center justify-center">
                <a href="#" className="pt-1.5 pb-2 px-6 text-white border-2 border-[#ffc451] rounded font-bold hover:bg-[#ffbb38] hover:text-[#333] text-l  duration-300" onClick={startClick}>شروع</a>
            </div>
        </div>
     );
}

const startClick=()=>{
    alert("دقیقا دنبال چی هستی!!!")
}

export default Header_top;