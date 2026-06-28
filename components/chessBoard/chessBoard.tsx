import React from 'react';
export const ChessBoard = () => {
    const rows = 8;
    const cols = 8;
    return (
        <div 
          className="grid grid-cols-8 w-[480px] h-[480px] mx-auto border-2 border-gray-800"
          style={{ aspectRatio: '1' }}
        >
          {Array.from({ length: rows }, (_, row) =>
            Array.from({ length: cols }, (_, col) => {
              const isBlack = (row + col) % 2 === 1;
              return (
                <div
                  key={`${row}-${col}`}
                  className={`
                    w-full h-full 
                    ${isBlack ? 'bg-[#b58863]' : 'bg-[#f0d9b5]'}
                    hover:brightness-90 transition-all
                    cursor-pointer
                  `}
                  data-row={row}
                  data-col={col}
                />
              );
            })
          )}
        </div>
      );
    
}
export default ChessBoard;