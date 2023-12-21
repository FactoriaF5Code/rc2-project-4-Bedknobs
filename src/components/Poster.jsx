// eslint-disable-next-line react/prop-types
export const Poster = ({ backdrop_path, title }) => {
  return (
    <li>
      <img src={backdrop_path} alt={title} />
    </li>
  );
};
