'use client'
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { AppProvider } from '@/context/AppContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export function ClientProviders({ children }) {
  return (
    <Provider store={store}>
      <AppProvider>
        <div className="min-h-screen flex flex-col bg-[#040406] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="min-h-[60vh] flex flex-col items-center justify-center font-sans">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm font-semibold tracking-wide uppercase text-amber-500">Retrieving Terminal Data...</p>
                </div>
              </div>
            }>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </AppProvider>
    </Provider>
  );
}
