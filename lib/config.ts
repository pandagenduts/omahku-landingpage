// Config is made so if in the future the site want to be integrated with CMS, we can easily add them without hassle.

import { FeaturedHouse } from './types'

// Site Config
export const siteConfig = {
  siteTitle: 'Omahku - Next JS',
  description: 'Pixel-Perfect Next JS Site from Figma by: Donny Rendi',
  url: 'https://omahku-landingpage.vercel.app/',
  ogImage: 'https://omahku-landingpage.vercel.app/og-image.jpg',
}

// Header Menu
export const headerMenu = [
  {
    title: 'Buy House',
    href: '/',
  },
  {
    title: 'Rent Apartment',
    href: '/',
  },
  {
    title: 'Sell Properties',
    href: '/',
  },
  {
    title: 'News & Article',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/',
  },
]

// Footer Menus
export const footerMenuOurServices = [
  {
    title: 'Buy House',
    href: '/',
  },
  {
    title: 'Rent Apartment',
    href: '/',
  },
  {
    title: 'Sell Properties',
    href: '/',
  },
  {
    title: 'Property Investment',
    href: '/',
  },
]

export const footerMenuAboutUs = [
  {
    title: 'Our Profile',
    href: '/',
  },
  {
    title: 'Terms and Condition',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
]

export const footerMenuMore = [
  {
    title: 'News',
    href: '/',
  },
  {
    title: 'Article',
    href: '/',
  },
  {
    title: 'Testimonials',
    href: '/',
  },
]

// Site Identity: Social Medias
export const socialMedias = [
  {
    title: 'Facebook',
    href: 'https://facebook.com',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    title: 'Youtube',
    href: 'https://youtube.com',
  },
]

// Homepage
// Client Section: Company Logos
export const homeClientsCompanyLogo = [
  {
    company: 'company-1',
    src: '/company-1.png',
    width: 106,
    height: 36,
  },
  {
    company: 'company-2',
    src: '/company-2.png',
    width: 149,
    height: 25,
  },
  {
    company: 'company-3',
    src: '/company-3.png',
    width: 147,
    height: 28,
  },
  {
    company: 'company-4',
    src: '/company-4.png',
    width: 106,
    height: 31,
  },
  {
    company: 'company-5',
    src: '/company-5.png',
    width: 100,
    height: 31,
  },
  {
    company: 'company-6',
    src: '/company-6.png',
    width: 118,
    height: 37,
  },
]

//Value Section: Statistics Values
export const homeStatisticsValues = [
  {
    number: 6300,
    text: 'House Sold Out',
  },
  {
    number: 1500,
    text: 'Apartment Rented',
  },
  {
    number: 7800,
    text: 'Happy Customer',
  },
]

// Featured Section: Featured Houses
export const featuredHouses: FeaturedHouse[] = [
  {
    picture: '/house-1.jpg',
    price: 40,
    model: 'Modern',
    location: 'Tembalang, Semarang',
    description: {
      bathroom: 1,
      bedroom: 2,
      size: '6x6m',
    },
  },
  {
    picture: '/house-2.jpg',
    price: 60,
    model: 'Scandinavian',
    location: 'Pedurungan, Semarang',
    description: {
      bathroom: 2,
      bedroom: 3,
      size: '12x8m',
    },
  },
  {
    picture: '/house-3.jpg',
    price: 50,
    model: 'Classic',
    location: 'Ungaran, Semarang',
    description: {
      bathroom: 2,
      bedroom: 2,
      size: '10x7m',
    },
  },
]

// Testimonial Section: Testimonials
export const homeTestimonials = [
  {
    name: 'Fujiwara Sugiono',
    picture: '/testi-1.png',
    role: 'Buyer House at Ungaran',
    testimonial:
      '“Buying my first home was a dream come true. It was a great feeling to finally have a place that was truly my own, and I could make it into the perfect living space for me and my family."',
  },
  {
    name: 'Sakura Hanazono',
    picture: '/testi-2.png',
    role: 'Buyer House at Bandungan',
    testimonial:
      '“Buying property was one of the best decisions I ever made. Not only did it give me a sense of security and stability, but it also proved to be a valuable investment in the long run.”',
  },
  {
    name: 'Eren Novelza',
    picture: '/testi-3.png',
    role: 'Buyer House at Ungaran',
    testimonial:
      '“Owning property has allowed me to build equity and leverage it to finance other investments or pay off debt. It\'s a powerful financial tool that has helped me achieve my financial goals."',
  },
]
