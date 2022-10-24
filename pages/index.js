import DressList from '../components/dresses/DressList'

const MOCK_DRESSES = [
  {
    id: 'd1',
    year: '1951',
    title: 'Evening Dress',
    designer: 'Cristobal Balenciaga',
    designHouse: 'Balenciaga',
    pageLink: 'https://www.metmuseum.org/art/collection/search/80840?high=on&ft=dress&offset=0&rpp=40&pos=27'
  },
  {
    id: 'd2',
    year: '1970s',
    title: 'Dress',
    designer: 'Stephen Burrows',
    designHouse: 'Stephen Burrows',
    pageLink: 'https://www.metmuseum.org/art/collection/search/846448?sortBy=Relevance&ft=Stephen+Burrows&offset=0&rpp=40&pos=3'
  },
  {
    id: 'd3',
    year: 'fall/winter 2002 - 3',
    title: 'Dress',
    designer: 'Alexander McQueen',
    designHouse: 'Alexander McQueen',
    pageLink: 'https://www.metmuseum.org/art/collection/search/137826?sortBy=Relevance&amp;ft=Alexander+McQueen&amp;offset=0&amp;rpp=40&amp;pos=16'
  },

]



function HomePage() {
  return <DressList dresses={} />
}
