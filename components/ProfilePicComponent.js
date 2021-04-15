import Image from 'next/image'

export default function ProfilePicComponent() {
  return (
    <Image
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt="Your Name" 
    />
  )
}