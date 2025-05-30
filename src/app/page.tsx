'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 토큰 확인해서 로그인 상태 체크
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    } else {
      // 토큰이 없으면 로그인 페이지로 리다이렉트
      router.push('/login');
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    router.push('/login');
  };

  const handleCreateMatch = () => {
    // 매치 생성 페이지로 이동
    router.push('/match/create');
  };

  const handleJoinMatch = () => {
    // 매치 참가 페이지로 이동
    router.push('/match/join');
  };

  if (isLoading) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
    );
  }

  if (!isLoggedIn) {
    return null; // 리다이렉트 중
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
        {/* Header */}
        <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg relative">
                  <svg className="w-8 h-8 absolute" viewBox="0 0 100 100">
                    <path d="M 15,50 Q 50,35 85,50" stroke="#D97706" strokeWidth="2" fill="none"/>
                    <path d="M 15,50 Q 50,65 85,50" stroke="#D97706" strokeWidth="2" fill="none"/>
                    <path d="M 50,15 Q 35,50 50,85" stroke="#D97706" strokeWidth="2" fill="none"/>
                    <path d="M 50,15 Q 65,50 50,85" stroke="#D97706" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-white">PickUp</h1>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-white/80 hover:text-white transition-colors">홈</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">매치 찾기</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">내 매치</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">프로필</a>
              </nav>

              {/* Logout Button */}
              <button
                  onClick={handleLogout}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors"
              >
                로그아웃
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              농구 매치에 참여하세요! 🏀
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              동네 농구장에서 새로운 친구들과 함께 플레이하고, 실력을 키워보세요.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Create Match Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">매치 만들기</h3>
                <p className="text-gray-600 mb-6">
                  원하는 시간과 장소에서 농구 매치를 직접 만들어보세요.
                </p>
                <button
                    onClick={handleCreateMatch}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  매치 만들기
                </button>
              </div>
            </div>

            {/* Join Match Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">매치 참가하기</h3>
                <p className="text-gray-600 mb-6">
                  진행 중인 농구 매치를 찾아서 바로 참가해보세요.
                </p>
                <button
                    onClick={handleJoinMatch}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  매치 찾기
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">실시간 현황</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24</div>
                <div className="text-white/80">활성 매치</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">156</div>
                <div className="text-white/80">온라인 사용자</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">89</div>
                <div className="text-white/80">오늘 완료된 매치</div>
              </div>
            </div>
          </div>
        </main>

        {/* Floating Action Button (Mobile) */}
        <div className="fixed bottom-6 right-6 md:hidden">
          <button
              onClick={handleCreateMatch}
              className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
  );
};

export default MainPage;