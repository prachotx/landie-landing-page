import Wrapper from "./Wrapper"

const Nav = () => {
  return (
    <nav>
      <Wrapper>
        <div className='flex justify-between items-center '>
          <div>
            <ul className='flex w-60 h-6 justify-between'>
              <li className='text-[#505F98] text-sm'><a href="#">Home</a></li>
              <li className='text-[#505F98] text-sm'><a href="#">About</a></li>
              <li className='text-[#505F98] text-sm'><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h1 className='text-[#37447E] text-[26px] font-black'>Landing</h1>
          </div>
          <div>
            <button className='rounded text-white w-[160px] h-[26px] bg-[#111B47] font-medium text-[12px]'>Buy now</button>
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Nav