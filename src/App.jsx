import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="w-full h-[164px] bg-[#65558F] flex items-center px-6">
        <h1 className="text-white text-xl font-bold">HEADER</h1>
      </header>

      {/*Background*/}
      <main className="flex-1 flex justify-center items-start" style={{ marginBottom: "274px" }}>
        <div className="w-[1228px] h-[563px] bg-[#65558F] rounded-[30px] shadow-md relative mt-[270px]">
          {/* Card 1 */}
          <div
            className="absolute w-[365px] h-[396px] bg-[#302159] rounded-[30px] p-6"
            style={{
              top: "84px",
              left: "119px",
              bottom: "83px",
              right: "744px",
            }}
          >
            <h2 className="text-white text-lg font-bold mb-4 text-center">TÍTULO DO CARD 1</h2>
            <p className="text-white text-sm leading-6 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec suscipit turpis, at ultrices justo. 
              Praesent eget nisi ex. In vulputate, magna ut laoreet gravida, ex nulla iaculis diam, a pellentesque nisl 
              lacus pretium sapien. Nulla tortor sapien, tristique id ultrices eu, ullamcorper eget nibh. Integer porttitor 
              lacinia odio vel blandit. Nulla ac lorem purus. Morbi sagittis condimentum nunc nec malesuada. Praesent quis 
              tempor magna, et sollicitudin leo. Etiam in.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="absolute w-[365px] h-[396px] bg-[#AA95DF] rounded-[30px] p-6"
            style={{
              top: "84px",
              left: "744px",
              bottom: "83px",
              right: "87px",
            }}
          >
            <h2 className="text-white text-lg font-bold mb-4 text-center">TÍTULO DO CARD 2</h2>
            <p className="text-white text-sm leading-6 text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec suscipit turpis, at ultrices justo. 
              Praesent eget nisi ex. In vulputate, magna ut laoreet gravida, ex nulla iaculis diam, a pellentesque nisl 
              lacus pretium sapien. Nulla tortor sapien, tristique id ultrices eu, ullamcorper eget nibh. Integer porttitor 
              lacinia odio vel blandit. Nulla ac lorem purus. Morbi sagittis condimentum nunc nec malesuada. Praesent quis 
              tempor magna, et sollicitudin leo. Etiam in.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full h-[80px] bg-[#65558F] flex items-center justify-center">
        <p className="text-white text-sm">FOOTER</p>
      </footer>
    </div>
  );
}

export default App;

