import { useRouter } from 'next/router';

function DetailPage() {
  // we can extract dynamic paramater values
  // which gives us access to the concrete data
  // encoded in the url
  // console.log(router.query.dressID);
  // will long nothing at first,
  // but when the route loads it will log
  // whatever is in the url after /dress
  const router = useRouter();


  return <h1>The Detail Page</h1>
}

export default DetailPage;
