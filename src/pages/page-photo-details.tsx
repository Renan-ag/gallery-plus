import { useParams } from "react-router";
import Text from "../components/text";

export default function PagePhotoDetails() {
  const { id } = useParams();

  return (
    <>
      <Text>Details photo</Text>
      <hr />
      <Text>Photo ID: {id}</Text>
    </>
  );
}
