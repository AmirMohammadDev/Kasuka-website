import Icon_box from "./Icon-box";


const Section_features = () => {
  const iconData = [
    {
      id: 1,
      imageSrc: "src/assets/images/icons/book.svg",
      titrText:"تبلیغ سختی است",
      lableText: "نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند.",
    },
    {
      id: 2,
      imageSrc: "src/assets/images/icons/cube.svg",
      titrText:"کدام یک از اینهاست",
      lableText: "کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند.",
    },
    {
      id: 3,
      imageSrc: "src/assets/images/icons/images.svg",
      titrText:"یا کور شده است",
      lableText: "یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند.",
    },
    {
      id: 4,
      imageSrc: "src/assets/images/icons/shield.svg",
      titrText:"حقیقت مبارک",
      lableText: "آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند.",
    },
  ];
  return (
    <>
      <div className="max-w-7xl m-auto mt-20 flex gap-5">
        <div className="max-w-[50%]">
          <img src="features.jpg" className="h-auto w-full" />
        </div>
        <div className="max-w-[50%] flex flex-col justify-between">
            {iconData.map(item=>(
                <Icon_box key={item.id} src={item.imageSrc} titr={item.titrText} lable={item.lableText}/>
            ))}
          {/* <div className="flex gap-5 ">
                        <img src="src/assets/images/icons/shield.svg" className="w-14"/>
                        <div>
                            <span className="text-xl font-bold mb-3 text-[#444] inline-block">تبلیغ سختی است</span>
                            <p className="text-[#888] font-semibold">نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند</p>
                        </div>
                    </div>
                    <div className="flex gap-5 ">
                        <img src="src/assets/images/icons/shield.svg" className="w-14"/>
                        <div>
                            <span className="text-xl font-bold mb-3 text-[#444] inline-block">تبلیغ سختی است</span>
                            <p className="text-[#888] font-semibold">نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند</p>
                        </div>
                    </div>
                    <div className="flex gap-5 ">
                        <img src="src/assets/images/icons/shield.svg" className="w-14"/>
                        <div>
                            <span className="text-xl font-bold mb-3 text-[#444] inline-block">تبلیغ سختی است</span>
                            <p className="text-[#888] font-semibold">نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند</p>
                        </div>
                    </div>
                    <div className="flex gap-5 ">
                        <img src="src/assets/images/icons/shield.svg" className="w-14"/>
                        <div>
                            <span className="text-xl font-bold mb-3 text-[#444] inline-block">تبلیغ سختی است</span>
                            <p className="text-[#888] font-semibold">نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند</p>
                        </div>
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Section_features;
