import React from "react"

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="w-full bg-[#65558F] py-[45px] pl-[88px]">
        <h3 className="text-[#FFFFFF] font-bold text-4xl">HEADER</h3>
      </div>
      <div className="flex flex-col justify-center items-center py-[45px]">
        <div className="bg-[#65558F] flex flex-row gap-8 rounded-[30px] px-[100px] py-[50px]">
          <div className="bg-[#302159] w-[365px] h-[396px] rounded-[30px] px-[40px] py-[30px]">
            <h4 className="text-2xl font-bold text-white text-center mb-4">
              TITULO CARD 1
            </h4>
            <p className="text-xs text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              suscipit turpis, at ultrices justo. Praesent eget nisi ex. In
              vulputate, magna ut laoreet gravida, ex nulla iaculis diam, a
              pellentesque nisl lacus pretium sapien. Nulla tortor sapien,
              tristique id ultrices eu, ullamcorper eget nibh. Integer porttitor
              lacinia odio vel blandit. Nulla ac lorem purus. Morbi sagittis
              condimentum nunc nec malesuada. Praesent quis tempor magna, et
              sollicitudin leo. Etiam in.
            </p>
          </div>
          <div className="bg-[#AA95DF] w-[365px] h-[396px] rounded-[30px] px-[40px] py-[30px]">
            <h4 className="text-2xl font-bold text-white text-center mb-4">
              TITULO CARD 2
            </h4>
            <p className="text-xs text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              suscipit turpis, at ultrices justo. Praesent eget nisi ex. In
              vulputate, magna ut laoreet gravida, ex nulla iaculis diam, a
              pellentesque nisl lacus pretium sapien. Nulla tortor sapien,
              tristique id ultrices eu, ullamcorper eget nibh. Integer porttitor
              lacinia odio vel blandit. Nulla ac lorem purus. Morbi sagittis
              condimentum nunc nec malesuada. Praesent quis tempor magna, et
              sollicitudin leo. Etiam in.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#65558F] flex items-center justify-center h-[61px] py-[45px]">
        <h3 className="text-[#FFFFFF] font-bold text-2xl">FOOTER</h3>
      </div>
    </div>
  )
}

export default App
