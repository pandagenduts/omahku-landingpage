import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const hasTitle = searchParams.get('title')
    const hasImage = searchParams.get('image')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'A pixel-perfect Next JS Site from Figma'

    const imageUrl = hasImage
      ? new URL(hasImage, import.meta.url)
      : new URL('../../../public/hero-img.png', import.meta.url)
    const image = await fetch(imageUrl).then((res) => res.arrayBuffer())

    const fontRegular = await fetch(
      new URL(
        '../../../assets/fonts/PlusJakartaSans-Regular.ttf',
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer())

    const fontBold = await fetch(
      new URL(
        '../../../assets/fonts/PlusJakartaSans-Bold.ttf',
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        <div
          tw='flex h-full w-full'
          style={{ fontFamily: 'Plus Jakarta Sans' }}
        >
          <div tw='flex-1 flex flex-col justify-center max-w-[500px] p-10 relative'>
            {logo}
            <h1
              tw='font-bold text-5xl leading-tight'
              style={{ fontFamily: 'Plus Jakarta Sans Bold' }}
            >
              {title}
            </h1>
            <p tw='text-xl'>Sliced by: Donny Rendi</p>
          </div>
          <div tw='flex-1 flex'>
            <img
              src={image as unknown as string}
              style={{ objectFit: 'cover' }}
              tw='w-full h-full'
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Plus Jakarta Sans',
            data: fontRegular,
            style: 'normal',
          },
          {
            name: 'Plus Jakarta Sans Bold',
            data: fontBold,
            style: 'normal',
          },
        ],
      },
    )
  } catch (error) {
    return new Response('Failed to generate OG image', { status: 500 })
  }
}

const logo = (
  <svg
    width='151'
    height='29'
    viewBox='0 0 151 29'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ position: 'absolute', top: '40px', left: '40px' }}
  >
    <path
      d='M13.543 0.297108C13.964 -0.0990359 14.6179 -0.0990359 15.039 0.297108L28.2323 12.7099C28.9584 13.3931 28.4781 14.6183 27.4843 14.6183H26.1584V28.081C26.1584 28.5886 25.7497 29 25.2456 29H18.1251V16.686C18.1251 16.3814 17.8798 16.1346 17.5773 16.1346H11.3697C11.0672 16.1346 10.822 16.3814 10.822 16.686V29H3.70153C3.19736 29 2.78865 28.5886 2.78865 28.081V14.6183H1.09767C0.103769 14.6183 -0.376463 13.3931 0.349663 12.7099L13.543 0.297108Z'
      fill='#2276C5'
    />
    <path
      d='M59.2504 14.8196C59.2504 17.0498 58.8338 18.9472 58.0005 20.5117C57.1737 22.0762 56.0451 23.2712 54.6147 24.0968C53.1909 24.9156 51.5899 25.3251 49.8117 25.3251C48.0204 25.3251 46.4128 24.9123 44.989 24.0868C43.5651 23.2612 42.4398 22.0662 41.6131 20.5017C40.7863 18.9372 40.373 17.0432 40.373 14.8196C40.373 12.5893 40.7863 10.6919 41.6131 9.12741C42.4398 7.5629 43.5651 6.37121 44.989 5.55234C46.4128 4.72681 48.0204 4.31405 49.8117 4.31405C51.5899 4.31405 53.1909 4.72681 54.6147 5.55234C56.0451 6.37121 57.1737 7.5629 58.0005 9.12741C58.8338 10.6919 59.2504 12.5893 59.2504 14.8196ZM54.9297 14.8196C54.9297 13.3749 54.7164 12.1566 54.2899 11.1646C53.87 10.1726 53.2762 9.42034 52.5085 8.90771C51.7408 8.39509 50.8419 8.13877 49.8117 8.13877C48.7815 8.13877 47.8826 8.39509 47.1149 8.90771C46.3472 9.42034 45.7501 10.1726 45.3236 11.1646C44.9037 12.1566 44.6937 13.3749 44.6937 14.8196C44.6937 16.2642 44.9037 17.4826 45.3236 18.4745C45.7501 19.4665 46.3472 20.2188 47.1149 20.7314C47.8826 21.244 48.7815 21.5003 49.8117 21.5003C50.8419 21.5003 51.7408 21.244 52.5085 20.7314C53.2762 20.2188 53.87 19.4665 54.2899 18.4745C54.7164 17.4826 54.9297 16.2642 54.9297 14.8196Z'
      fill='#2D2D2D'
    />
    <path
      d='M62.3286 25.0455V9.70661H66.3246V12.4129H66.5017C66.8167 11.5141 67.3416 10.8051 68.0765 10.2858C68.8114 9.76653 69.6906 9.50689 70.7142 9.50689C71.7509 9.50689 72.6334 9.76986 73.3618 10.2958C74.0901 10.8151 74.5756 11.5208 74.8184 12.4129H74.9759C75.2843 11.5341 75.842 10.8317 76.6491 10.3058C77.4627 9.77319 78.424 9.50689 79.5329 9.50689C80.9436 9.50689 82.0886 9.96292 82.9678 10.875C83.8536 11.7804 84.2965 13.0653 84.2965 14.7297V25.0455H80.1136V15.5685C80.1136 14.7164 79.8905 14.0772 79.4443 13.6512C78.9981 13.2251 78.4404 13.0121 77.7711 13.0121C77.01 13.0121 76.4162 13.2584 75.9897 13.751C75.5632 14.237 75.3499 14.8795 75.3499 15.6784V25.0455H71.285V15.4787C71.285 14.7264 71.0718 14.1272 70.6453 13.6811C70.2254 13.2351 69.6709 13.0121 68.982 13.0121C68.5161 13.0121 68.0962 13.1319 67.7222 13.3716C67.3547 13.6046 67.0627 13.9341 66.8462 14.3602C66.6297 14.7796 66.5214 15.2723 66.5214 15.8382V25.0455H62.3286Z'
      fill='#2D2D2D'
    />
    <path
      d='M91.9193 25.3351C90.9548 25.3351 90.0953 25.1653 89.3407 24.8258C88.5861 24.4796 87.989 23.9703 87.5494 23.2979C87.1163 22.6188 86.8998 21.7733 86.8998 20.7614C86.8998 19.9092 87.054 19.1935 87.3624 18.6143C87.6708 18.0351 88.0907 17.5691 88.6222 17.2163C89.1537 16.8634 89.7573 16.5971 90.4332 16.4174C91.1156 16.2376 91.8308 16.1111 92.5788 16.0379C93.458 15.9447 94.1667 15.8581 94.7047 15.7782C95.2428 15.6917 95.6332 15.5652 95.8759 15.3988C96.1187 15.2323 96.2401 14.986 96.2401 14.6598V14.5999C96.2401 13.9674 96.0433 13.4781 95.6496 13.1319C95.2624 12.7857 94.7113 12.6126 93.9961 12.6126C93.2415 12.6126 92.6411 12.7824 92.1949 13.1219C91.7488 13.4548 91.4535 13.8742 91.3091 14.3802L87.4313 14.0606C87.6281 13.1286 88.0153 12.323 88.5927 11.6439C89.1701 10.9582 89.9148 10.4323 90.8269 10.0661C91.7455 9.6933 92.8084 9.50689 94.0158 9.50689C94.8556 9.50689 95.6594 9.60675 96.4271 9.80647C97.2014 10.0062 97.887 10.3158 98.4841 10.7352C99.0878 11.1546 99.5635 11.6939 99.9113 12.353C100.259 13.0054 100.433 13.7876 100.433 14.6997V25.0455H96.4566V22.9184H96.3385C96.0958 23.3977 95.771 23.8205 95.3641 24.1866C94.9573 24.5461 94.4685 24.8291 93.8977 25.0355C93.3268 25.2352 92.6674 25.3351 91.9193 25.3351ZM93.1201 22.3991C93.7369 22.3991 94.2815 22.2759 94.7539 22.0296C95.2264 21.7766 95.5971 21.4371 95.8661 21.011C96.1351 20.5849 96.2696 20.1023 96.2696 19.563V17.9353C96.1384 18.0218 95.958 18.1017 95.7283 18.1749C95.5052 18.2415 95.2526 18.3048 94.9705 18.3647C94.6883 18.4179 94.4062 18.4679 94.124 18.5145C93.8419 18.5544 93.586 18.591 93.3563 18.6243C92.8642 18.6975 92.4344 18.814 92.067 18.9738C91.6995 19.1336 91.4141 19.35 91.2107 19.6229C91.0073 19.8892 90.9056 20.2221 90.9056 20.6216C90.9056 21.2008 91.1123 21.6435 91.5257 21.9497C91.9456 22.2493 92.4771 22.3991 93.1201 22.3991Z'
      fill='#2D2D2D'
    />
    <path
      d='M107.879 16.1777V25.0455H103.686V4.59366H107.76V12.4129H107.938C108.279 11.5075 108.83 10.7984 109.591 10.2858C110.352 9.76653 111.307 9.50689 112.455 9.50689C113.505 9.50689 114.42 9.7399 115.201 10.2059C115.989 10.6653 116.599 11.3277 117.032 12.1932C117.472 13.052 117.688 14.0806 117.681 15.2789V25.0455H113.489V16.0379C113.495 15.0925 113.259 14.3569 112.78 13.8309C112.308 13.305 111.645 13.042 110.792 13.042C110.221 13.042 109.716 13.1652 109.276 13.4115C108.843 13.6578 108.502 14.0173 108.253 14.49C108.01 14.956 107.885 15.5186 107.879 16.1777Z'
      fill='#2D2D2D'
    />
    <path
      d='M124.78 20.6315L124.79 15.5286H125.4L130.243 9.70661H135.056L128.55 17.416H127.556L124.78 20.6315ZM120.981 25.0455V4.59366H125.174V25.0455H120.981ZM130.43 25.0455L125.981 18.3647L128.776 15.3588L135.341 25.0455H130.43Z'
      fill='#2D2D2D'
    />
    <path
      d='M146.807 18.5145V9.70661H151V25.0455H146.975V22.2593H146.817C146.476 23.1581 145.908 23.8804 145.114 24.4263C144.327 24.9722 143.366 25.2452 142.231 25.2452C141.22 25.2452 140.331 25.0122 139.563 24.5461C138.796 24.0801 138.195 23.4177 137.762 22.5589C137.336 21.7001 137.119 20.6715 137.113 19.4731V9.70661H141.305V18.7142C141.312 19.6196 141.551 20.3353 142.024 20.8612C142.496 21.3872 143.129 21.6501 143.923 21.6501C144.429 21.6501 144.901 21.5336 145.341 21.3006C145.78 21.0609 146.135 20.7081 146.404 20.2421C146.679 19.7761 146.814 19.2002 146.807 18.5145Z'
      fill='#2D2D2D'
    />
  </svg>
)
