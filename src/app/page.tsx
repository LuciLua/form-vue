import Categorization from "../components/Categorization";

export default function homepage() {
    return (
        <>
            <Categorization />
            <div className="w-full flex bg-slate-900 min-h-[600px] h-fit justify-center items-center">
                <div className="max-w-[1300px] w-full flex items-center">
                    <div className="max-w-[500px] text-white">
                        <h1 className="text-[50px] leading-[50px] mb-5 font-[700]">Get the new product now</h1>
                        <h2 className="text-[15px] font-[300]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, laborum cumque eveniet, excepturi officiis animi, debitis omnis eius laboriosam amet aperiam. Culpa voluptatem officia vero, dolor aperiam sit atque eligendi.</h2>
                        <div className="gap-[10px] flex mt-[15px]">
                            <button className="bg-orange-400 px-[15px] py-[10px] rounded-md">Buy now</button>
                            <button className="px-[15px] py-[10px] rounded-sm bg-[#fff2]">Read more</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full h-fit flex justify-center flex-col items-center mt-[20px]">
                <h1 className="font-[800] text-[30px]">for you</h1>
                <h1>here aher ahere</h1>
            </div>
        </>
    )
}