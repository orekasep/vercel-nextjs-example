import axios from 'axios'
import { map } from 'lodash'

export const getServerSideProps = async () => {
  const res = await axios.get('https://www.prism.horse/api/public/news?stableId=4&pageSize=6&pageIndex=0')
  return {
    props: {
      data: res.data.responseData,
    },
  } 
}

export default function News({data}) {
  console.log(data.stableNews)
  return (
    <div className="container">
      {data && map(data.stableNews, item => (
        <p>
          <a href="">
            {item.title}
          </a>
        </p>
        ))
      }
    </div>
  )
}

