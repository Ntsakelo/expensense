

interface Hero{
    main_text: string,
    secondary_text: string,
    cta_text: string,
    cta_link:string,
    learn_more_cta?: boolean,
    learn_more_link?: string,
}

const HeroBannerWhite = (data:Hero) => {
    return (
        <div className="relative isolate px-6 pb-14 pt-14 lg:px-8 bg-red-500">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
          >
            <div
              
            />
          </div>
          <div className="mx-auto max-w-2xl">
            
            <div className="text-center">
              <h1 className="text-3xl tracking-tight text-balance text-white sm:text-5xl">
                {data.main_text}
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                {data.secondary_text}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={data.cta_link}
                  className="rounded-full bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {data.cta_text}
                </a>
                {data.learn_more_cta && <a href={data.learn_more_link} className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>}
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div />
          </div>
        </div>
    )
}

export default HeroBannerWhite;