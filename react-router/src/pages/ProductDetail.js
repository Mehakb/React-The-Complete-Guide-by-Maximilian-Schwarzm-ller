import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
      <Link to='..' relative='path'>
        Back
      </Link>
    </section>
  );
};

export default ProductDetail;
