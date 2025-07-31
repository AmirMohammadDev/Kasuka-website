import Icon_box from "./Icon-box";

const Header_bottom = () => {
  const iconData = [
    {
      id: 1,
      imageSrc: "public/icons/database.svg",
      labelText: "اطلاعات ذخیره شده",
    },
    {
      id: 2,
      imageSrc: "public/icons/calendar-todo.svg",
      labelText: "نمونه کارها",
    },
    {
      id: 3,
      imageSrc: "public/icons/chart.svg",
      labelText: "نمودار کیفی",
    },
    {
      id: 4,
      imageSrc: "public/icons/paint-brush.svg",
      labelText: "عملکرد های پایانی",
    },
    {
      id: 5,
      imageSrc: "public/icons/store.svg",
      labelText: "متن نمایشی",
    },
  ];
  return (
    <>
      <div className="flex justify-between flex-wrap max-w-7xl gap-6 items-center m-auto mt-20">
        {iconData.map((item) => (
          <Icon_box key={item.id} src={item.imageSrc} matn={item.labelText} />
        ))}
      </div>
    </>
  );
};

export default Header_bottom;
