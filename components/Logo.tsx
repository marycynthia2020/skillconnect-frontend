import { Raleway, Comfortaa } from 'next/font/google';
import Link from 'next/link'

  const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: ["500", "700", "600"],
  });

const Logo = ({color}: {color:string}) => {
  
  return (
    <Link href= "/" className={`flex flex-col items-center ${comfortaa.className}`} style={{ color }}>
        <span className='font-bold text-4xl md:text-5xl'>SC</span>
        <h3 className=' text-xl -mt-3 font-medium'>SkillConnect</h3>
    </Link>
  )
}

export default Logo