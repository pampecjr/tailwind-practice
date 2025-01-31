import React from "react";
function App() {
    return (
        <div>
            <div class="bg-[#65558F] text-white w-[1440px] py-[57px] pl-[76px] box-border">
                <h1 class="font-bold">HEADER</h1>
            </div>
            <div class="bg-white w-[1440px] py-[106px] px-[106px] box-border">
                <div class="bg-[#65558f] w-[1228px] py-[83px] flex flex-row justify-between items-center rounded-lg pl-[119px] pr-[87px] box-border">
                    <div class="bg-[#302159] rounded-lg py-[14px] px-[70px] w-[396px] h-[365px] box-border space-y-10">
                        <p class="font-bold text-white text-center">TÍTULO DO CARD 1</p>
                        <p class="text-white text-center text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec suscipit turpis, at ultrices justo. Praesent eget nisi ex. In vulputate, magna ut laoreet gravida, ex nulla iaculis diam, a pellentesque nisl lacus pretium sapien. Nulla tortor sapien, tristique id ultrices eu, ullamcorper eget nibh. Integer porttitor lacinia odio vel blandit. Nulla ac lorem purus. Morbi sagittis condimentum nunc nec malesuada. Praesent quis tempor magna, et sollicitudin leo. Etiam in.</p>
                    </div>
                    <div class="bg-[#AA95DF] rounded-lg py-[14px] px-[70px] w-[396px] h-[365px] box-border space-y-10">
                        <p class="font-bold text-black text-center">TÍTULO DO CARD 2</p>
                        <p class="text-white text-right text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec suscipit turpis, at ultrices justo. Praesent eget nisi ex. In vulputate, magna ut laoreet gravida, ex nulla iaculis diam, a pellentesque nisl lacus pretium sapien. Nulla tortor sapien, tristique id ultrices eu, ullamcorper eget nibh. Integer porttitor lacinia odio vel blandit. Nulla ac lorem purus. Morbi sagittis condimentum nunc nec malesuada. Praesent quis tempor magna, et sollicitudin leo. Etiam in.</p>
                    </div>
                </div>
            </div>
            <div class="bg-[#65558F] text-white w-[1440px] h-[61px] flex items-center justify-center">
                <h1 class="font-bold">FOOTER</h1>
            </div>
        </div>
    );
}

export default App;
