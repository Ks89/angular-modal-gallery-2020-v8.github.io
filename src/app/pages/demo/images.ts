import { Image } from '@ks89/angular-modal-gallery';

import { environment } from '../../../environments/environment';

const PATH = environment.imgPath;

export const IMAGES_ARRAY: Image[] = [
  new Image(0, {
    img: `${PATH}/assets/images/gallery/img1.jpg`,
    extUrl: `http://www.google.com`
  }),
  new Image(1, {
    img: `${PATH}/assets/images/gallery/img2.jpg`,
    description: `Description 2`
  }),
  new Image(
    2,
    {
      img: `${PATH}/assets/images/gallery/img3.jpg`,
      description: `Description 3`,
      extUrl: `http://www.google.com`
    },
    {
      img: `${PATH}/assets/images/gallery/thumbs/img3.png`,
      title: `custom title 2`,
      alt: `custom alt 2`,
      ariaLabel: `arial label 2`
    }
  ),
  new Image(3, {
    img: `${PATH}/assets/images/gallery/img4.jpg`,
    description: `Description 4`,
    extUrl: `http://www.google.com`
  }),
  new Image(4, {
    img: `${PATH}/assets/images/gallery/img5.jpg`
  }, {
    img: `${PATH}/assets/images/gallery/thumbs/img5.jpg`
  })
];

export const IMAGES_RECT_ARRAY: Image[] = [
  new Image(
    0,
    {
      img: `${PATH}/assets/images/carousel/milan-pegasus-gallery-statue.jpg`,
      description: 'Description 1'
    },
    {img: `${PATH}/assets/images/carousel/thumbs/t-milan-pegasus-gallery-statue.jpg`}
  ),
  new Image(1, {img: `${PATH}/assets/images/carousel/pexels-photo-47223.jpeg`},
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-47223.jpg`}),
  new Image(
    2,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-52062.jpeg`,
      description: 'Description 3'
    },
    {
      img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-52062.jpg`,
      description: 'Description 3'
    }
  ),
  new Image(
    3,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-66943.jpeg`,
      description: 'Description 4'
    },
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-66943.jpg`}
  ),
  new Image(4, {img: `${PATH}/assets/images/carousel/pexels-photo-93750.jpeg`},
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-93750.jpg`}),
  new Image(
    5,
    {
      img: `${PATH}/assets/images/carousel/pexels-photo-94420.jpeg`,
      description: 'Description 6'
    },
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-94420.jpg`}
  ),
  new Image(6, {img: `${PATH}/assets/images/carousel/pexels-photo-96947.jpeg`},
    {img: `${PATH}/assets/images/carousel/thumbs/t-pexels-photo-96947.jpg`})
];

export const SAME_IMAGES: Image[] = [
  new Image(0, {
    img: `${PATH}/assets/images/gallery/img1.jpg?0`,
    extUrl: `http://www.google.com`
  }),
  new Image(1, {
    img: `${PATH}/assets/images/gallery/img1.jpg?1`,
    extUrl: `http://www.google.com`
  }),
  new Image(2, {
    img: `${PATH}/assets/images/gallery/img1.jpg?2`,
    extUrl: `http://www.google.com`
  })
];
