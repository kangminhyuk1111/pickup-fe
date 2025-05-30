'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const OAuthCallback = () => {
  const [status, setStatus] = useState('처리 중...');
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const token = searchParams.get('token');

        if (!token) {
          throw new Error('토큰이 없습니다.');
        }

        setStatus('로그인 처리 중...');

        // 토큰을 localStorage에 저장
        localStorage.setItem('accessToken', token);

        setStatus('로그인 성공! 메인페이지로 이동합니다...');

        // 잠시 후 메인페이지로 리다이렉트
        setTimeout(() => {
          router.push('/'); // 또는 메인페이지 경로
        }, 1500);

      } catch (error: any) {
        console.error('OAuth 콜백 처리 오류:', error);
        setError(error.message || '로그인 처리 중 오류가 발생했습니다.');
        setStatus('로그인 실패');

        // 3초 후 로그인 페이지로 돌아가기
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      }
    };

    handleCallback();
  }, [searchParams, router]);

  return (
      <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/30 max-w-md w-full text-center">
          {/* PickUp Logo */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-lg relative">
            <svg className="w-12 h-12 absolute" viewBox="0 0 100 100">
              <path d="M 15,50 Q 50,35 85,50" stroke="#D97706" strokeWidth="2" fill="none"/>
              <path d="M 15,50 Q 50,65 85,50" stroke="#D97706" strokeWidth="2" fill="none"/>
              <path d="M 50,15 Q 35,50 50,85" stroke="#D97706" strokeWidth="2" fill="none"/>
              <path d="M 50,15 Q 65,50 50,85" stroke="#D97706" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-6">
            PickUp
          </h1>

          {/* Status Display */}
          <div className="space-y-4">
            {!error ? (
                <div className="flex items-center justify-center space-x-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-sky-600"></div>
                  <p className="text-gray-700 font-medium">{status}</p>
                </div>
            ) : (
                <div className="space-y-3">
                  <div className="text-red-500 text-4xl">❌</div>
                  <p className="text-red-600 font-medium">{error}</p>
                  <p className="text-gray-500 text-sm">잠시 후 로그인 페이지로 돌아갑니다...</p>
                </div>
            )}

            {status.includes('성공') && (
                <div className="space-y-3">
                  <div className="text-green-500 text-4xl">✅</div>
                  <p className="text-green-600 font-medium">GitHub 로그인이 완료되었습니다!</p>
                </div>
            )}
          </div>

          {/* Progress Bar */}
          {!error && (
              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-600 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default OAuthCallback;