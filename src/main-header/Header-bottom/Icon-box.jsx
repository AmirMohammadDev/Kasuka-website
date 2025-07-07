const Icon_box = ({src,matn}) => {
  return (
    <>
      <div className="inline-flex items-center w-[15%] justify-center flex-col gap-6 border-2 border-[#999] hover:border-[#ffc451] hover:cursor-pointer duration-300 rounded  py-8">
       <img src={src} className="w-10"/>
        <span className="text-white text-xl leading-[26px] font-bold hover:cursor-pointer hover:text-[#ffc451] duration-300">{matn}</span>
      </div>
    </>
  );
};

export default Icon_box;