import HeroBanner from "../../components/HeroBanner";
import HeroBannerWhite from "../../components/HeroBannerWhite";
import HeroWithImage from "../../components/HeroWithImage";
import Navigation  from "../../components/Navigation";
import { Grid } from "@mui/material";
import { Navigation as Nav, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';


//import 'swiper/modules/a11y.css';

const Home = () => {
    return (
        <div>
            <Grid container>
                <Grid size={{ xs: 12 }}>
                    <Navigation />
                </Grid>
                <Grid size={{ xs: 12 }} >
                    <HeroBanner main_text="Spend smarter with data-driven insights." secondary_text="Study your spending patterns to make better desicions" cta_text="Get started" cta_link="/login" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <HeroWithImage />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <HeroBannerWhite main_text="Studies show that consumer spending has increased recently" secondary_text="
Total consumer spending increased by a modest 1% in August, accompanied by a 3% rise in transaction volumes" cta_text="Get started" cta_link="/login" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <p className="text-3xl mt-30 sm:text-5xl text-black-500 text-center">What Our clients are saying</p>
                </Grid>
                {/* <Grid size={{ xs: 12, sm: 6 }}>
                   <div className="h-100 w-9/10 mt-20  m-auto shadow-xl"></div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                <div className="h-100 w-9/10 mt-20  m-auto shadow-xl"></div>   
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                <div className="h-100 w-9/10 mt-20  m-auto shadow-xl"></div>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                <div className="h-100 w-9/10 mt-20  m-auto shadow-xl"></div>
                </Grid> */}
                <Grid size={{xs:12}}>
                <Swiper
      spaceBetween={50}
      breakpoints={{900:{slidesPerView:2}}}
      modules={[Nav, Pagination, Scrollbar, A11y]}
      navigation
    >
      <SwiperSlide>
      <div className="h-100 w-10/10 mt-20  m-auto shadow-xl"></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-100 w-10/10 mt-20  m-auto shadow-xl"></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-100 w-10/10 mt-20  m-auto shadow-xl"></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-100 w-10/10 mt-20  m-auto shadow-xl"></div>
      </SwiperSlide>
      ...
    </Swiper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;