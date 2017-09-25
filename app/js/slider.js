import React from 'react';
import {Text, View } from 'react-native';
//custom
import ImageSlider from 'react-native-image-slider';


export default class Slider  extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         sliderImageLink: require('../data/mainSliderImages.json')
    //     };
    // };
        render()
        {
            return <ImageSlider images={[
                'app/images/1955_59_Bentley_S_1_Continental_Sports_Saloon_Mulliner_luxury_retro___h_2048x1536 (1).jpg',
                'app/images/1955_59_Bentley_S_1_Continental_Sports_Saloon_Mulliner_luxury_retro___h_2048x1536 (1).jpg'
            ]}/>
        }



}