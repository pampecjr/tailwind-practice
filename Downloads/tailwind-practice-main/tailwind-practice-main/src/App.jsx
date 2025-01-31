import React from "react";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="w-full bg-[#65558f] py-[43px] pl-[88px]">
      <h3 className="text-[#FFFFFF] font-bold text-4xl">HEADER</h3>
    </div>
    <div className="bg-[#65558f] flex flex-row rounded-[30px] justify-between items-center px-[100px] py-[83px] mt-[106px] gap-[292px]">
    <div className="bg-[#302159] w-[365px] h-[396px] rounded-[30px] px-[70px] py-[14px]">
      <h4 className="text-2xl font-bold text-white text-center">
      TÍTULO DO CARD 1
      </h4>
      <h4 className="text-xs text-white text-center font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
        suscipit turpis, at ultrices justo. Praesent eget nisi ex. In
        vulputate, magna ut laoreet gravida, ex nulla iaculis diam, a
        pellentesque nisl lacus pretium sapien. Nulla tortor sapien,
        tristique id ultrices eu, ullamcorper eget nibh. Integer porttitor
        lacinia odio vel blandit. Nulla ac lorem purus. Morbi sagittis
        condimentum nunc nec malesuada. Praesent quis tempor magna, et
        sollicitudin leo. Etiam in.
      </h4>
    </div>
    <div className="bg-[#AA95DF] w-[365px] h-[396px] rounded-[30px] px-[70px] py-[14px]">
        <h4 className="text-2xl font-bold text-center">TÍTULO DO CARD 2</h4>
        <h4 className="text-xs text-white text-right font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
        suscipit turpis, at ultrices justo. Praesent eget nisi ex. In
        vulputate, magna ut laoreet gravida, ex nulla iaculis diam, a
        pellentesque nisl lacus pretium sapien. Nulla tortor sapien,
        tristique id ultrices eu, ullamcorper eget nibh. Integer porttitor
        lacinia odio vel blandit. Nulla ac lorem purus. Morbi sagittis
        condimentum nunc nec malesuada. Praesent quis tempor magna, et
        sollicitudin leo. Etiam in.

        </h4>
        </div>
      </div>
      <div className="w-full bg-[#65558f] flex justify-center h-[61px] mt-[30px]">
        <h3 className="text-[#FFFFFF] font-bold text-2xl">FOOTER</h3>
      </div>
    </div>
  );
}

export default App;
