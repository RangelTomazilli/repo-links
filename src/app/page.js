import ButtonLinkWithIcon from '@/components/ButtonLinkWithIcon'
import Image from 'next/image'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'
import { RichText } from '@graphcms/rich-text-react-renderer'

const getData = async () => {
  const query = `
  query getData {
    home(where: {slug: "home"}) {
      introduction {
        raw
      }
      links {
        iconSvg
        name
        url
        iconColor
      }
      logoImage {
        url
      }
    }
  }  
  `
  return fetchHygraphQuery(query)
}

export default async function Home() {
  const response = await getData();
  return (
    <main className="min-h-screen flex flex-col items-center pt-7 px-6 gap-5">
      <div>
        <Image
          src="/debora-tomazilli-logo.svg"
          alt="Logo Debora Tomazilli"
          width={200}
          height={400}
        />
      </div>
      <div>
        <div className='font-semibold text-gray-700 text-center'> <RichText content={response.home.introduction.raw} /></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 w-full lg:w-1/2">
        {
          response.home.links.map(content => (
            <ButtonLinkWithIcon key={content.name} text={content.name} icon={content.iconSvg} link={content.url} />
          ))
        }
      </div>
    </main>
  )
}
