export type Data = {
  category: string;
  options: string[];
};

export const data: Data[] = [
  {
    category: 'Model',
    options: ['Pool', 'Cinema', 'Kitchen', 'Library', 'Garden'],
  },
  {
    category: 'Location',
    options: ['Mountain', 'River', 'Sea', 'Rural', 'Valley'],
  },
  {
    category: 'User',
    options: ['Single', 'Couple', 'Family', 'Pet'],
  },
  {
    category: 'Mood',
    options: ['Active', 'Silent'],
  },
  {
    category: 'Opening',
    options: ['Windowless', 'Scenic', 'Skylight', 'Folding'],
  },
];
export default data;
