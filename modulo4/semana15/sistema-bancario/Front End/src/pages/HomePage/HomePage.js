import React from 'react'
import Header from '../../components/Header/Header'
import {DivBackground, DivContarMain, DivCarousel} from './style'
import yellowCard from './../../assets/images/LabankYellow.png'
import blackCard from './../../assets/images/LabankBlack.png'
import grayCard from './../../assets/images/LabankGray.png'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Thumbs} from 'swiper'
import 'swiper/css/bundle';
import SwiperCore from 'swiper'


function HomePage() {




  return (
    <div>
    <Header/>
    <DivBackground>
        <h1>O futuro está em suas mãos.</h1>
        <div><p>Invista com o nosso time especializado na tendência do mercadi financeiro. </p>
        <p><b>Labank</b> aqui seu dinheiro rende.</p></div>
    </DivBackground>
    <DivContarMain>

        <DivCarousel>
            <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={'white'}
        >
        <SwiperSlide>
            <img src={yellowCard}></img>
            <h1>Cartão de crédito</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={blackCard}></img>
            <h1>preto</h1>
        </SwiperSlide>

        <SwiperSlide>
            <img src={grayCard}></img>
            <h1>roxo</h1>
        </SwiperSlide>

        </Swiper>
        </DivCarousel>
    </DivContarMain>
    
    </div>
  )
}

export default HomePage