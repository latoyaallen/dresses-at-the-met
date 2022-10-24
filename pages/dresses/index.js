import Link from 'next/link';
import { Fragment } from 'react';

function DressListPage() {
  return (
    <Fragment>
    <h1>The Dress List Page</h1>
    <ul>
      <li>
        <Link href='/dresses/github'>
          GitHub Example
        </Link>
       </li>
       <li>
        <Link href='/dresses/metmuseum'>
          Met Museum Example
        </Link>
      </li>
    </ul>
    </Fragment>
  )
}

export default DressListPage;
