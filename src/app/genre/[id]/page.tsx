type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = ({ params: { id }, searchParams: { genre } }: Props) => {
  return (
    <div>
      <h1>
        Genre {id} {genre}{" "}
      </h1>
    </div>
  );
};

export default GenrePage;
