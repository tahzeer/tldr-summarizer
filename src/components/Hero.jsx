import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className='w-28 object-contain' />
        <button type='button' onClick={() => window.open('https://github.com/tahzeer')} className='black_btn'>Github</button>
      </nav>

      <h1 className="head_text">
        Summarize Articles and Websites with <br className='max-md:hidden' />
        <span className='orange_gradient'>TLDR;GPT</span>
      </h1>
      <h2 className='desc'>
        Save your time by summarizing your readings with tldr;GPT, a free open-source article summarizer.
      </h2>
    </header>
  )
}

export default Hero