import Wrapper from "./Wrapper"

const Header = () => {
    return (
        <header className="h-[1161px] bg-no-repeat bg-[url('/assets/Group.svg')] bg-[top_0px_right_-325px]">
            <Wrapper>
                <div className="w-[540px] mt-[250px]">
                    <div>
                        <h2 className="text-[50px] text-[#091133] mb-[25px]">Introduce Your Product Quickly & Effectively</h2>
                    </div>
                    <div>
                        <p className="text-[#505F98] text-[18px] mb-[60px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            <br />
                            <br />
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                    <div>
                        <button className="w-[189px] h-[36px] text-white text-[16px] rounded bg-[#111B47] mr-[27px]">Purchase UI Kit</button>
                        <button className="w-[189px] h-[36px] text-[#091133] text-[16px] rounded border-[#091133] border-2 font-medium">Learn More</button>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header