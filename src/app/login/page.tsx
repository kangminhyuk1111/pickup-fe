'use client';

import React from 'react';

const LoginPage = () => {
  const handleGoogleLogin = async () => {
    try {
      // 백엔드 서버로 직접 리다이렉트 (일반적으로 localhost:8080 또는 배포된 백엔드 URL)
      window.location.href = 'http://localhost:8080/api/auth/login/google';
    } catch (error) {
      console.error('Google 로그인 오류:', error);
    }
  };

  const handleKakaoLogin = async () => {
    try {
      window.location.href = 'http://localhost:8080/api/auth/login/kakao';
    } catch (error) {
      console.error('카카오 로그인 오류:', error);
    }
  };

  const handleGithubLogin = async () => {
    try {
      window.location.href = 'http://localhost:8080/api/auth/login/github';
    } catch (error) {
      console.error('GitHub 로그인 오류:', error);
    }
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center p-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-60 right-32 w-28 h-28 bg-white/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-40 left-40 w-36 h-36 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/15 rounded-full blur-lg"></div>

          {/* Floating circles */}
          <div className="absolute top-32 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-16 w-4 h-4 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/30">
            {/* Header */}
            <div className="text-center mb-8">
              {/* Basketball Icon */}
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg relative">
                {/* Basketball lines */}
                <svg className="w-16 h-16 absolute" viewBox="0 0 100 100">
                  {/* Horizontal line */}
                  <path d="M 15,50 Q 50,35 85,50" stroke="#D97706" strokeWidth="2" fill="none"/>
                  <path d="M 15,50 Q 50,65 85,50" stroke="#D97706" strokeWidth="2" fill="none"/>
                  {/* Vertical lines */}
                  <path d="M 50,15 Q 35,50 50,85" stroke="#D97706" strokeWidth="2" fill="none"/>
                  <path d="M 50,15 Q 65,50 50,85" stroke="#D97706" strokeWidth="2" fill="none"/>
                </svg>
              </div>

              <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-3">
                PickUp
              </h1>
              <p className="text-gray-600 text-base">
                함께 농구할 친구들을 찾아보세요
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-4">
              {/* Google Login */}
              <button
                  onClick={handleGoogleLogin}
                  className="w-full flex items-center justify-center gap-4 px-6 py-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700 font-semibold text-lg group-hover:text-gray-900">
                Google로 시작하기
              </span>
              </button>

              {/* Kakao Login */}
              <button
                  onClick={handleKakaoLogin}
                  className="w-full flex items-center justify-center gap-4 px-6 py-4 bg-yellow-400 hover:bg-yellow-500 rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              >
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3C7.03 3 3 6.24 3 10.18c0 2.52 1.64 4.74 4.1 6.08-.17-.63-.31-1.61.07-2.32l2.52-5.36s-.64-.05-.64-1.08c0-1.01.59-1.76 1.32-1.76.62 0 .92.47.92 1.03 0 .63-.4 1.57-.61 2.44-.17.73.37 1.33 1.1 1.33 1.32 0 2.34-1.39 2.34-3.4 0-1.78-1.28-3.02-3.11-3.02-2.12 0-3.37 1.59-3.37 3.23 0 .64.25 1.33.56 1.7.06.07.07.13.05.2l-.21.87c-.03.13-.11.16-.25.1C5.94 9.48 5.5 8.4 5.5 7.18 5.5 4.77 7.34 2.5 10.65 2.5c3.26 0 5.79 2.32 5.79 5.42 0 3.23-2.04 5.83-4.86 5.83-.95 0-1.84-.49-2.14-1.08l-.58 2.21c-.21.81-.78 1.82-1.16 2.44.87.27 1.8.42 2.76.42 4.97 0 9-3.24 9-7.18C21 6.24 16.97 3 12 3z"/>
                </svg>
                <span className="text-black font-semibold text-lg">
                카카오로 시작하기
              </span>
              </button>

              {/* Github Login */}
              <button
                  onClick={handleGithubLogin}
                  className="w-full flex items-center justify-center gap-4 px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-semibold text-lg">
                GitHub으로 시작하기
              </span>
              </button>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-center text-xs text-gray-500 leading-relaxed">
                로그인하면{' '}
                <a href="#" className="text-sky-600 hover:text-sky-700 font-medium hover:underline">
                  서비스 약관
                </a>
                {' '}및{' '}
                <a href="#" className="text-sky-600 hover:text-sky-700 font-medium hover:underline">
                  개인정보 처리방침
                </a>
                에 동의하는 것으로 간주됩니다.
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-8">
            <p className="text-white/90 text-lg font-medium">
              🏀 새로운 농구 친구들과 함께하세요!
            </p>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;