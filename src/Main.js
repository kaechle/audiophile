import ImageBestGear from "./assets/shared/desktop/image-best-gear.jpg"

const Main = () => {
  return (
    <div className='w-[1110px] mx-auto bg-light-100 pb-48'>
      <div>
        <div>BluetoothAdvertisingData</div>
        <div>BluetoothAdvertisingData</div>
        <div>BluetoothAdvertisingData</div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div className='flex place-content-between'>
        <div className='flex flex-col w-1/2 justify-center'>
          <h2 className='pb-12 uppercase text-5xl font-bold'>
            bringing you the <span className='text-accent-100'>best</span> audio gear
          </h2>
          <p className='pr-40 opacity-50'>
            Located at the heart of New York City, Audiophile is the premier store for high end
            headphones, earphones, speakers, and audio accessories. We have a large showroom and
            luxury demonstration rooms available for you to browse and experience a wide range of
            our products. Stop by our store to meet some of the fantastic people who make Audiophile
            the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <img className='rounded-lg' src={ImageBestGear} alt='The best image gear' />
        </div>
      </div>
    </div>
  )
}

export default Main
