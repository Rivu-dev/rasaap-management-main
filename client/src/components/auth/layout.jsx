import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-gradient-to-br from-pink-50 to-pink-50">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex items-center justify-center bg-white w-full lg:w-1/2 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-pink-100 opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-52 h-52 md:w-80 md:h-80 rounded-full bg-pink-200 opacity-20"></div>
        <div className="relative max-w-md space-y-8 text-center z-10">
          <div className="flex justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-pink-500 flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-12 md:w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Welcome to <span className="text-pink-600">Rasaap</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Your trusted partner for innovative IT solutions and services
          </p>
          <div className="pt-6 md:pt-8">
            <div className="h-1 w-12 md:w-20 bg-pink-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
      {/* Right Panel - Auth Content */}
      <div className="flex flex-1 items-center justify-center px-2 sm:px-4 py-8 sm:py-12 relative">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-pink-50 p-4 sm:p-8 rounded-xl z-10 border border-pink-50">
           <div className="flex justify-center">
            <div className="w-16 h-16 rounded-lg bg-pink-500 flex items-center justify-center shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;