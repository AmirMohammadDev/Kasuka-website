const Menu = () => {
  return (
    <>
      <ul className="text-white text-[15px] font-bold flex ">
        <li>
          <a
            className="px-4 py-3 duration-300 hover:text-[#ffbb38] inline-block h-full"
            href="#"
          >
            خانه
          </a>
        </li>
        <li>
          <a
            className="px-4 py-3 duration-300 hover:text-[#ffbb38] inline-block h-full"
            href="#"
          >
            درباره ی ما
          </a>
        </li>
        <li>
          <a
            className="px-4 py-3 duration-300 hover:text-[#ffbb38] inline-block h-full"
            href="#"
          >
            خدمات
          </a>
        </li>
        <li>
          <a
            className="px-4 py-3 duration-300 hover:text-[#ffbb38] inline-block h-full"
            href="#"
          >
            نمونه کارها
          </a>
        </li>
        <li>
          <a
            className="px-4 py-3 duration-300 hover:text-[#ffbb38] inline-block h-full"
            href="#"
          >
            تیم
          </a>
        </li>
        <li className="group relative">
          <a
            href="#"
            className="group px-4 py-3 duration-300 hover:text-[#ffbb38] inline-block h-full"
          >
            لیست کشویی
            <span className="mr-2 inline-block transform transition-transform duration-500 group-hover:rotate-180">
              &#11167;
            </span>
          </a>

          <ul
            className="absolute right-0 w-40 bg-white shadow-lg rounded-md overflow-hidden text-black
               opacity-0 scale-y-0 origin-top transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100"
          >
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                لیست1
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                لیست2
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                لیست3
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                لیست4
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                لیست5
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            className="px-4 py-3 duration-300 hover:text-[#ffbb38] inline-block h-full"
            href="#"
          >
            تماس با ما
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
