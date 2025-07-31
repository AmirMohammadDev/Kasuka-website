import Icon_box from "./Icon-box";

const Header_bottom = () => {
  const iconData = [
    {
      id: 1,
      imageSrc: "src/assets/images/icons/database.svg",
      labelText: "اطلاعات ذخیره شده",
    },
    {
      id: 2,
      imageSrc: "src/assets/images/icons/calendar-todo.svg",
      labelText: "نمونه کارها",
    },
    {
      id: 3,
      imageSrc: "src/assets/images/icons/chart.svg",
      labelText: "نمودار کیفی",
    },
    {
      id: 4,
      imageSrc: "src/assets/images/icons/paint-brush.svg",
      labelText: "عملکرد های پایانی",
    },
    {
      id: 5,
      imageSrc: "src/assets/images/icons/store.svg",
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
