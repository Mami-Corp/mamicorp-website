import MamiCorpLogo from '@/images/mamicorplogo.png'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="relative">
      <div className="absolute bg-[#68ffff] inset-y-0 left-8 h-16 w-16 blur-xl rounded-full z-0" />
      <div className="absolute bg-[#e88de2] inset-y-0 right-8 h-16 w-16 blur-xl rounded-full z-0" />
      <Image className='relative' src={MamiCorpLogo} alt="mami corp logo" />
    </div>
  )
}
