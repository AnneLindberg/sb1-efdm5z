import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Heart, Users2, HandHeart, MessageCircle } from 'lucide-react';
import TexturedBackground from './TexturedBackground';

const categories = [
  { 
    id: 'friends', 
    name: 'Friends', 
    icon: Users, 
    description: 'Celebrate your friendships' 
  },
  { 
    id: 'lovers', 
    name: 'Lovers', 
    icon: Heart, 
    description: 'Deepen your romantic bond' 
  },
  { 
    id: 'parents', 
    name: 'Parents', 
    icon: Users2, 
    description: 'Connect with family' 
  },
  { 
    id: 'partners', 
    name: 'Partners', 
    icon: HandHeart, 
    description: 'Strengthen your partnership' 
  }
];

function Categories() {
  const navigate = useNavigate();

  return (
    <TexturedBackground variant="parchment">
      <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-3rem)] py-8 md:py-12">
        <div className="text-center px-4 mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl heading-elegant mb-3 font-elegant">
            Meaningful Conversations
          </h1>
          <div className="flex items-center justify-center gap-2 text-sepia-600 mb-4">
            <MessageCircle size={20} className="animate-pulse" />
            <p className="text-lg italic font-medium">Start a deeper dialogue</p>
          </div>
          <p className="prose-elegant max-w-md mx-auto">
            Choose a category and explore thoughtful questions to strengthen your relationships through meaningful conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-2xl px-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => navigate(`/questions/${category.id}`)}
                className="group relative overflow-hidden card-elegant card-grain card-lift
                  active:scale-[0.98] touch-manipulation"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-transparent opacity-50" />
                <div className="relative z-10 p-6 md:p-8">
                  <Icon 
                    size={32} 
                    strokeWidth={1.5} 
                    className="mx-auto mb-4 text-sepia-700 
                      transition-transform duration-500 
                      group-hover:scale-110 group-hover:rotate-3" 
                  />
                  <div className="text-center">
                    <span className="text-xl md:text-2xl block heading-elegant mb-2 font-elegant letterpress">
                      {category.name}
                    </span>
                    <span className="text-base text-warmGray-600 italic block">
                      {category.description}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </TexturedBackground>
  );
}

export default Categories;