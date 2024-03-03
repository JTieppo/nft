import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#0D192C] text-white">
            <div className="bg-[#15263F] flex flex-col items-center p-4 rounded-xl my-auto">
                <img src="/images/image-equilibrium.jpg" className="w-56 mt-2 mx-2 mb-4 rounded-lg" alt="" />

                <div className="max-w-56">
                    <div className="flex flex-row text-md">
                        <h1>Equilibrium</h1>
                        <h1 className="ml-2">#3429</h1>
                    </div>
                    <div className="mb-2">
                        <p className=" text-wrap text-[13px] mt-4 text-[#8BACD9] mb-4">Our equilibrium colection promotes balance and calm</p>
                        <div className="flex flex-row justify-between items-center text-[11px]">
                            <div className="flex flex-row items-center">
                                <img src="/images/icon-ethereum.svg" alt="" />
                                <p className="text-[#00FFF8] ml-1">0.041 ETH</p>
                            </div>
                            <div className="flex flex-row">
                                <img src="/images/icon-clock.svg" alt="" />
                                <p className="ml-1 text-[#8BACD9]">3 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-[#8bacd95d] border-t mt-4"></div>
                    <div className="flex flex-row mt-3 mb-3">
                        <img src="/images/image-avatar.png" className="w-6 h-6 border rounded-full" alt="" />
                        <div className="flex text-[11px] items-center ml-3">
                            <p>Creation of</p>
                            <p>Jules Wyvern</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
