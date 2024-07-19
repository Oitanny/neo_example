import Image from 'next/image';

export default function SplashScreen() {
  return (
    <div className="flex justify-center items-center bg-white min-h-screen">
      <div className="flex flex-col items-center m-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={270}
          height={270}
          className="mb-2"
        />
        <h1 className="text-2xl font-bold text-black text-center">n<span className="bg-gradient-to-r from-[#7E39E1] to-[#DA4CC4] text-transparent bg-clip-text">eo</span>donya</h1>
        <span className="font-thin mt-4 text-base text-center">AI-Powered Recruitment: Connecting Skilled Hands with Opportunities</span>

        <div className="animate-spin rounded-full h-8 w-8 border-4 border-solid border-[#7E39E1] border-t-transparent mt-6"></div>
      </div>
    </div>
  );
}