import { useParams } from 'react-router';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <dive>
      <h1>{slug}</h1>
    </dive>
  );
}
export default ProductScreen;
