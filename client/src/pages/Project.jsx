import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "queries/projectQueries";
import { useParams } from "react-router-dom";
import Spinner from "components/Spinner";

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong!</p>;

  console.log(data);
  return <div>Project</div>;
}
