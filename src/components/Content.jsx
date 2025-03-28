import Wrapper from "./Wrapper"

const Content = () => {
    return (
        <div>
            <Wrapper>
                <div className="flex justify-between">
                    <div className="w-[540px] h-[400px]">
                        <div>
                            <h3 className="text-[#091133] text-[36px] font-medium mb-[16px]">Light, Fast & Powerful</h3>
                        </div>
                        <div>
                            <p className="text-[#6F7CB2] text-[16px]">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /> <br />
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </p>
                        </div>
                        <div className="flex justify-between mt-[78px]">
                            <div className="max-w-[255px]">
                                <img src="/assets/Combined Shape.svg" alt="icon" />
                                <h4 className="text-[#091133] text-[16px] mt-[15px] mb-[14px]">Title Goes Here</h4>
                                <p className="text-[#5D6970] text-[12px] font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                            </div>
                            <div className="max-w-[255px]">
                                <img src="/assets/Combined Shape.svg" alt="icon" />
                                <h4 className="text-[#091133] text-[16px] mt-[15px] mb-[14px]">Title Goes Here</h4>
                                <p className="text-[#5D6970] text-[12px] font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/undraw_mobile_login_ikmv.svg" alt="undraw mobile login" />
                    </div>
                </div>
                <div className="flex justify-between my-[160px] items-center h-[540px]">
                    <div>
                        <img src="/assets/undraw_happy_news_hxmt.svg" alt="" />
                    </div>
                    <div className="w-[445px]">
                        <h4 className="text-[36px] text-[#091133] mb-[18px]">Light, Fast & Powerful</h4>
                        <p className="text-[#5D6970] text-[12px] font-medium ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /> <br />
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
                <div className="flex justify-between my-[160px] items-center h-[540px]">
                    <div>
                        <img src="/assets/undraw_social_influencer_sgsv.svg" alt="" />
                    </div>
                    <div className="w-[445px]">
                        <h4 className="text-[36px] text-[#091133] mb-[18px]">Light, Fast & Powerful</h4>
                        <p className="text-[#5D6970] text-[12px] font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /> <br />
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    </div>
                </div>
                <div className="flex justify-between my-[160px] items-center h-[540px]">
                    <div>
                        <img src="/assets/undraw_mention_6k5d.svg" alt="" />
                    </div>
                    <div className="w-[445px]">
                        <h4 className="text-[36px] text-[#091133] mb-[18px]">Light, Fast & Powerful</h4>
                        <p className="text-[#5D6970] text-[12px] font-medium mb-[38px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /> <br />
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        <button className="w-[189px] h-[32px] bg-[#111B47] text-white rounded">Purchase Now</button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Content