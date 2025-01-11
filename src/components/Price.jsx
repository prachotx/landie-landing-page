import Wrapper from "./Wrapper"

const Price = () => {
    return (
        <div className="h-[930px] bg-[#E7ECFF] py-[200px]">
            <Wrapper>
                <div className="w-[600px] text-center mx-auto">
                    <div>
                        <h5 className="text-[36px] text-[#091133] mb-[20px]">A Price To Suit Everyone</h5>
                        <p className="text-[#5D6970] text-[16px] font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    </div>
                    <div className="my-[40px]">
                        <span className="text-[#222F65] text-[50px] h-[66px]">$40</span>
                        <p className="text-[#37447E] text-[16px]">UI Design Kit</p>
                    </div>
                    <div>
                        <p className="text-[#5D6970] text-[14px] mb-[10px]">See, One price. Simple.</p>
                        <button className="w-[189px] h-[32px] bg-[#111B47] text-white rounded">Purchase Now</button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Price