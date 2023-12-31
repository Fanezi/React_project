import imageSrc from '../../images/svg-7.svg'; 
import imgSrc from '../../images/svg-8.svg'; 
import ImageSrc from '../../images/svg-5.svg'; 

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charges any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: imageSrc,
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    darkText: true,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: imgSrc,
    alt: 'AccLogin',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headline: 'Creating an account is very easy',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: ImageSrc,
    alt: 'Account',
    dark: false,
    primary: false,
    darkText: true,
};
