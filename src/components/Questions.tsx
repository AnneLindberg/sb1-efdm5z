import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MoveRight, Heart } from 'lucide-react';
import questionsData from '../data/questions.json';
import TexturedBackground from './TexturedBackground';

function Questions() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const questions = questionsData[category as keyof typeof questionsData] || [];
  const categoryTitle = category?.charAt(0).toUpperCase() + category?.slice(1);

  const nextQuestion = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % questions.length);
      setIsFlipping(false);
    }, 400);
  };

  return (
    <TexturedBackground variant="parchment">
      <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-3rem)]">
        <div className="w-full max-w-2xl px-4">
          <button
            onClick={() => navigate('/')}
            className="group mb-8 md:mb-10 flex items-center gap-2 text-warmGray-600 
              hover:text-warmGray-800 transition-colors touch-manipulation 
              active:text-warmGray-900 px-2 py-1 -ml-2"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg italic">Return to Categories</span>
          </button>

          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sepia-50 to-warmGray-50/80" />
            <div className="relative border border-sepia-200/80 rounded-xl p-8 md:p-12 
              shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.05)]
              hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.15),0_4px_12px_-3px_rgba(0,0,0,0.08)]
              transition-shadow duration-500 card-grain">
              <div className="absolute inset-0 bg-white/40 opacity-50" />
              <div className="relative z-10">
                <div className="text-center mb-10 md:mb-12">
                  <h2 className="text-2xl md:text-3xl heading-elegant mb-4 font-elegant letterpress">
                    {categoryTitle}
                  </h2>
                  <p className="prose-elegant max-w-md mx-auto italic">
                    Take your time to reflect on each question. There's no rush—the best conversations unfold naturally.
                  </p>
                </div>

                <div
                  className={`min-h-[180px] md:min-h-[220px] flex items-center justify-center 
                    text-center transition-all duration-500 transform touch-manipulation
                    ${isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                >
                  <p className="text-2xl md:text-3xl text-warmGray-800 font-medium px-4 leading-relaxed letterpress font-elegant">
                    {questions[currentIndex]}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-5 mt-10 md:mt-12">
                  <button
                    onClick={nextQuestion}
                    className="group w-full card-elegant card-grain
                      text-warmGray-800 py-4 px-6 
                      flex items-center justify-center gap-3
                      touch-manipulation text-lg font-medium
                      active:shadow-inner active:translate-y-0.5"
                  >
                    <span className="relative z-10 letterpress group-hover:tracking-wide transition-all font-elegant">
                      Next Question
                    </span>
                    <MoveRight 
                      size={20} 
                      className="text-sepia-600 transition-transform duration-500
                        group-hover:translate-x-1" 
                    />
                  </button>
                  
                  <p className="text-base text-warmGray-600 flex items-center gap-2 italic">
                    <Heart size={14} className="text-sepia-500" />
                    Question {currentIndex + 1} of {questions.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TexturedBackground>
  );
}

export default Questions;