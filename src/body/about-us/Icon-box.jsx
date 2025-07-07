const Icon_box = ({src,titr,lable}) => {
    return ( 
        <>
            <div className="flex gap-5 ">
                        <img src={src} className="w-14"/>
                        <div>
                            <span className="text-xl font-bold mb-3 text-[#444] inline-block">{titr}</span>
                            <p className="text-[#888] font-semibold">{lable}</p>
                        </div>
                    </div>
        </>
     );
}
 
export default Icon_box;