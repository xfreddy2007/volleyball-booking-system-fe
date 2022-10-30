/* eslint-disable max-len */
import React, { useState, useCallback } from 'react';
import { pseudoGames } from '@/assets/data/gamePseudoData';
import SeasonalClubCard from '../SeasonalClubCard';

const AccountSeasonalClub: React.FC = () => {
  const [showMore, setShowMore] = useState(3);
  const onSetShowMore = useCallback(() => {
    if (showMore > pseudoGames.length) {
      setShowMore(pseudoGames.length);
    } else {
      setShowMore((prev) => prev + 3);
    }
  }, [showMore]);
  return (
    <div className="relative w-full">
      <h1 className="default-h4 font-arial font-extrabold text-navy">我的季打名單</h1>
      <div className="my-3 h-[2px] w-full bg-navy" />
      <div className="mt-4 flex flex-col gap-y-4 pb-16">
        {pseudoGames.slice(0, showMore).map((game) => (
          <SeasonalClubCard key={game.id} {...game} />
        ))}
      </div>
      {showMore < pseudoGames.length && (
        <button
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded border-[1px] border-solid border-navy py-2 px-4 font-bold text-navy transition-all duration-300 hover:bg-navy hover:text-white"
          onClick={onSetShowMore}
        >
          顯示更多場
        </button>
      )}
    </div>
  );
};

export default AccountSeasonalClub;
