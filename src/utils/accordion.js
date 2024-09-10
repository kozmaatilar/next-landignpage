import { developProductsOne, developProductsTwo, developProductsThree, developProductsFour } from "./image";

export const accordionData = [
    {
        id: 'first_accordion',
        title: 'Interrogate the data',
        content: 'Whether you\'re looking for needles or haystacks, our Search API lets you (and your customers) slice through mountains of data to find properties that fit the most strict criteria.',
        imgSrc: developProductsOne,
    },
    {
        id: 'second_accordion',
        title: 'Build killer map apps',
        content: 'Get parcel boundaries in GEO JSON format. Implement quickly to design apps that render detailed info about clusters of properties dynamically. With zero latency!',
        imgSrc: developProductsTwo,
    },
    {
        id: 'third_accordion',
        title: 'Move beyond information to insight',
        content: 'With access to current and historical MLS, mortgage and lien data, you\'ll have your finger on the pulse of every property in the country. Use it to train A.I. models that forecast what happens next.',
        imgSrc: developProductsThree,
    },
    {
        id: 'fourth_accordion',
        title: 'Layer in property owner data',
        content: 'Our demographic datasets connect the home to the homeowner. Our contact database provides current phone, email and social media coordinates so you can reach a decision maker.',
        imgSrc: developProductsFour,
    },
];
