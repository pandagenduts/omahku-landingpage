// Home

// Value Section
export type ValueStatistics = {
  number: number;
  text: string;
}

// Featured Section
export type FeaturedHouse = {
  picture: string
  price: number
  description: {
    size: string
    bedroom: number
    bathroom: number
  }
  model: string
  location: string
  createdAt: string
}

export type FeaturedSectionProps = {
  featuredHouses: FeaturedHouse[]
}

export type HouseCardProps = {
  data: FeaturedHouse
}

// Testimonial Section
export type Testimonials = {
  name: string
  picture: string
  role: string
  testimonial: string
}

export type TestiCardProps = {
  data: Testimonials
}