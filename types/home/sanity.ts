export interface HomepageCarousel {
  title: string;
  "sub-title": string;
  image: {
    url: string;
    alt: string;
  };
}

export interface HomepageAbout {
  pros: {
    pros_quantity: string;
    pros_title: string;
  }[];
  desc: string;
}

export interface HomepageCakeCategory {
  name: string;
  image: {
    url: string;
    alt: string;
  };
  desc: string;
}

export interface HomepageFAQ {
    question: string,
    answer: string
}