'use client'
import React from 'react'
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Filtering() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Get current difficulty from URL params
  const currentDifficulty = searchParams.get('difficulty') || '';

  const handleClick = (filter) => {
    try {
      const params = new URLSearchParams(searchParams);
      params.set('difficulty', filter)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    } catch (error) {
      console.error('Error updating filters:', error);
    }
  };

  const getButtonClass = (difficulty) => {
    const baseClass = "px-4 py-2 text-white rounded transition-colors";
    return `${baseClass} ${
      currentDifficulty === difficulty 
        ? "bg-blue-700 hover:bg-blue-800" 
        : "bg-blue-500 hover:bg-blue-600"
    }`;
  };

  return (
    <>
      <div className="mb-4">Filter</div>
      <div className="flex gap-2">
        <button 
          onClick={() => handleClick('easy')}
          className={getButtonClass('easy')}
          aria-label="Filter by easy difficulty"
          aria-pressed={currentDifficulty === 'easy'}
        >
          easy
        </button>
        <button 
          onClick={() => handleClick('medium')}
          className={getButtonClass('medium')}
          aria-label="Filter by medium difficulty"
          aria-pressed={currentDifficulty === 'medium'}
        >
          medium
        </button>
        <button 
          onClick={() => handleClick('hard')}
          className={getButtonClass('hard')}
          aria-label="Filter by hard difficulty"
          aria-pressed={currentDifficulty === 'hard'}
        >
          hard
        </button>
      </div>
    </>
  )
}