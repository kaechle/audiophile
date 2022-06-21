import HeroImage from "./assets/home/desktop/image-hero.jpg"

const Header = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='w-[1110px] mx-auto'>
        <div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <main className='mt-10 max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28'>
            <div className='sm:text-center lg:text-left'>
              <h2 className='text-xl text-light-100'>new product</h2>
              <h1 className='text-4xl tracking-tight font-extrabold text-light-100 sm:text-5xl md:text-6xl'>
                <span className='block xl:inline'>XX99 Mark II</span>{" "}
                <span className='block text-light-100 xl:inline'>Headphones</span>
              </h1>
              <p className='mt-3 text-base text-light-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                Experience natural, lifelike audio and exceptional build quality made for the
                passionate music enthusiast.
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <a
                    href='#'
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-100 hover:bg-accent-200 md:py-4 md:text-lg md:px-10'>
                    see product
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-full'>
        <img
          className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src={HeroImage}
          alt=''
        />
      </div>
    </div>
  )
}

export default Header
