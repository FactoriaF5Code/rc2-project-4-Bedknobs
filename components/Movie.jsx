// eslint-disable-next-line react/prop-types
export const Movie = ({ posterPath, title }) => {
  return (
    
    <li>
      <img src={posterPath} alt={title} className="movies"/>
    </li>
  );
};
