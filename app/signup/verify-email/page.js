import Image from 'next/image';
import Link from 'next/link';

export default function VerificationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8 mb-5">
    <div>
      <Image
        className="mx-auto"
        src="/logo.png"
        alt="Your Company"
        width={75}
        height={75}
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Verify your email
      </h2>
      <div className="mt-2 text-center text-sm text-gray-600">
        <p>A verification email has been sent to your email address.</p>
        <p className="mt-2">Please check your inbox and click on the verification link to complete your registration.</p>
      </div>
    </div>
    <div className="mt-6">
      <p className="text-center text-sm text-gray-600">
        Didn&apos;t receive the email?{' '}
        <button className="font-medium text-[#EE6C4D] hover:text-[#D55C40]">
          Resend verification email
        </button>
      </p>
    </div>
    <div className="mt-6">
      <Link href="/login" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#EE6C4D] hover:bg-[#D55C40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EE6C4D]">
        Return to login
      </Link>
    </div>
  </div>
</div>

  );
}