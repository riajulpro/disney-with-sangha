import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term } }: Props) => {
  if (!term) {
    notFound();
  }

  const termToUse = decodeURI(term);

  return (
    <div>
      <h1>Search Param is {termToUse}</h1>
    </div>
  );
};

export default SearchPage;
