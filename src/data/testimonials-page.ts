export interface TestimonialsPageTestimonial {
  quote: string;
  name: string;
  gender: "male" | "female";
  country: string;
  role?: string;
  company?: string;
  stars?: number;
}

// Testimonials pulled from the project Google Sheet (non-video).
// Deduped by `name` (case-insensitive). Gemini compliance: hide Pakistan as displayed country.
const sanitizeQuote = (q: string) => {
  // Gemini §2 forbidden vocabulary. These are client quotes; we still sanitize to keep the site compliant.
  return q.replace(/\bcheap\b/gi, "straightforward").trim();
};

const normalizeCountry = (country: string) => {
  const c = country.trim();
  return /^pakistan$/i.test(c) ? "" : c;
};

const rawTestimonials: TestimonialsPageTestimonial[] = [
  {
    name: "dimitar petro",
    country: "Bulgaria",
    gender: "male",
    stars: 5,
    quote:
      "Amazing and fast services! Trusted him for a 3rd time in a row and never disappoint, great job!",
  },
  {
    name: "oliver monty",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "I appreciate Salman's willingness to hop on a video meeting and get things perfect. Great communicator",
  },
  {
    name: "kjaapi",
    country: "Sweden",
    gender: "male",
    stars: 5,
    quote: "Salman really knows his stuff and delivers flawlessly.",
  },
  {
    name: "jestin toomer",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "Working with Salman A. on my first Fiverr experience has been a delight! His professionalism and stunning delivery exceeded my expectations.. Salman's proactive communication and deep understanding truly brought my ideas to life. I HIGHLY recommend Sal to anyone seeking top- and Exeptional service. Complete the order incredibly fast and accurate. True professionalism and good person, easy communication. 100% recommend)",
  },
  {
    name: "tobi vas",
    country: "Germany",
    gender: "male",
    stars: 5,
    quote:
      "I can only recommend him. Very understandable guy and he did a great job. Good knowledge with framer and more",
  },
  {
    name: "eustace ojie",
    country: "United Kingdom",
    gender: "male",
    stars: 5,
    quote:
      "Salman was exceptional very professional, understands the scope and brings it to life. Would recommend to all",
  },
  {
    name: "damien kake",
    country: "France",
    gender: "male",
    stars: 5,
    quote: "Awesome as always !!!",
  },
  {
    name: "dejan djokovic",
    country: "Canada",
    gender: "male",
    stars: 5,
    quote:
      "One of the best web designers and devs I have ever worked with. Would hihgly suggest to anyone looking for a next level website",
  },
  {
    name: "luca sartorello",
    country: "Italy",
    gender: "male",
    stars: 5,
    quote:
      "Sure! Here's the translation in English: Salman has been helpful right from the initial brief and evaluated all my possible requests together with me. Timelines and feedback moments were always respected and the final output was exactly as requested and even more! Highly recommended!",
  },
  {
    name: "ac rhodes",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "Salman was very attentive and helpful. He even hopped on a call with me to help me understand how to update my website myself in the future. Thanks, Salman!",
  },
  {
    name: "tazmania",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "LOVED IT! Everything was seamless and the website came out exactly as i envisioned it. He walked me through all the steps I needed to register my domain and all those bells and whistles. Highly recommend Salman if you need a project done!",
  },
  {
    name: "omar bran",
    country: "Australia",
    gender: "male",
    stars: 5,
    quote: "An amazing guy to work with very patient and committed",
  },
  {
    name: "grayson walla",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "Good experience. Responsive guy who will make sure you get what you need.",
  },
  {
    name: "jonathan kaiser",
    country: "Japan",
    gender: "male",
    stars: 5,
    quote: "Loved working together really happy with the outcome!!!!",
  },
  {
    name: "paul ulbrichh",
    country: "Germany",
    gender: "male",
    stars: 5,
    quote:
      "Salman A. was a great guy to work with, he has been very cooperative for us and had understanding in everyway. He is very good and fast at his work. We will work again with him in the future. The project came in time and just as i wished.",
  },
  {
    name: "bryan lyttle",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "Set up an API to communicate between our e-commerce store and our dealers. Cutting the amount of time we spend fetching orders and updating inventory to 0. Good work done in a timely manner and the product is very helpful",
  },
  {
    name: "Jouan",
    country: "North Macedonia",
    gender: "female",
    stars: 5,
    quote:
      "Great guy, helped me when I needed most and did it very quickly. Highly recommend!",
  },
  {
    name: "almudena TRUJILLANO",
    country: "Spain",
    gender: "female",
    stars: 5,
    quote:
      "The communication was perfect: very fast and with a good comprehension of my expectations, Also, very fast delivery and great attention to detail. I really recommend it",
  },
  {
    name: "mariyam el shrief",
    country: "United States",
    gender: "female",
    stars: 5,
    quote:
      "Salman A. is an outstanding website developer! His documentation and attention to detail are impeccable, and his code expertise is top-notch. Working with him was a pleasure due to his proactive communication, cooperation, and quick responsiveness. Despite not being based in the USA, he was always available. See more",
  },
  {
    name: "tekin_d",
    country: "Belgium",
    gender: "male",
    stars: 5,
    quote: "Great work! The only freelancer who understood what I wanted to accomplish.",
  },
  {
    name: "tayosiah",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "He was very professional, extremely flexible, quick and an overall pleasure to work with!",
  },
  {
    name: "Patrick Thompson",
    country: "Spain",
    gender: "male",
    stars: 5,
    quote: "Great professional work as always 100% recommend working with Salman",
  },
  {
    name: "shawna fuss",
    country: "United States",
    gender: "female",
    stars: 5,
    quote:
      "Salman was wonderfull He helped when I was in a pinch with my portfolio website. He made my website come allve just like I wanted it. Quick, responsive, honest and professional is what I would described Salman. I would highly recommend Salman to anyone!",
  },
  {
    name: "gabrielle proeh",
    country: "United States",
    gender: "female",
    stars: 5,
    quote:
      "Amoring recommend he wem soove and ma inalize my super happy the outcome.",
  },
  {
    name: "m hughes",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "Very Professional, Understanding and cooperative. I would recommend Salman as a top prospect.",
  },
  {
    name: "matheus",
    country: "Brazil",
    gender: "male",
    stars: 5,
    quote:
      "great professional, second project I've taken on with him and I'm going to take on a third!",
  },
  {
    name: "maria potupchik",
    country: "Switzerland",
    gender: "female",
    stars: 5,
    quote:
      "Very helpful and understanding in my project and also a lot of references and ideas how to improve, it was a great experience and I highly recommend for anyone making your project on Fiver, i also learnt a lot of features I didn't know about.",
  },
  {
    name: "peter carroll",
    country: "United Kingdom",
    gender: "male",
    stars: 5,
    quote:
      "Salman was fantastic in every sense, will certainly utilize his skills in the future. Very happy customer.",
  },
  {
    name: "joe flo",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "Salman was very responsive and worked extremely efficiently. He set up a beautiful website and gave me the tools and resources to run with It for many years to come. Would highly recommend to anyone looking to build a professional website!",
  },
  {
    name: "Jason tanmj",
    country: "United Kingdom",
    gender: "male",
    stars: 5,
    quote: "great guy, very helpful. Really liked working with him",
  },
  {
    name: "ali rahmoun",
    country: "Romania",
    gender: "male",
    stars: 5,
    quote: "Salman did a great job, and followed all of my instructions.",
  },
  {
    name: "sneha",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "Salman exceeded my expectations in every possible way. He understood my requirements perfectly and made my website. The best part was, I really annoyed him with a lot of corrections, but he did not hesitate to help and made changes. He's the best! Please do check him out if you need a website, his output is gonna blow your mind.",
  },
  {
    name: "leonard sekyonda",
    country: "United Kingdom",
    gender: "male",
    stars: 5,
    quote:
      "Incredible work, turnaround and very strong communication. I look forwards to working with Salman again.",
  },
  {
    name: "karan bharj",
    country: "Norway",
    gender: "male",
    stars: 5,
    quote:
      "Salman exceeds all expectations, We finally found our go to guy on Framer. He has delivered on all aspects superbly and in a couple of days. He has outperformed other pro vetted people on Framer by far, on every aspects. He has solved issue other pro vetted people have struggled with, and he knows react...",
  },
  {
    name: "milly tamati",
    country: "United Kingdom",
    gender: "female",
    stars: 5,
    quote:
      "It was a breeze working with Salman! Very responsive and quick, we're continuing to work together :)",
  },
  {
    name: "roman martins",
    country: "Denmark",
    gender: "male",
    stars: 5,
    quote:
      "Great work to match the fine desired request in Framer for the website functionality and appearance! Easy to work with! Would come back again when in need for website work",
  },
  {
    name: "hanzala irfan",
    country: "Pakistan",
    gender: "male",
    stars: 5,
    quote:
      "I really liked the work. He was really humble to make some changes and understood what i really needed. He is a real G!",
  },
  {
    name: "HASSABALLA SALIM",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "Went above and beyond, listened to requirements and had a lot of revisions until it was a perfectly I liked happy with the work done and the final product! Recommend for any web development, has great skills!",
  },
  {
    name: "peter yoo",
    country: "United States",
    gender: "male",
    stars: 5,
    quote:
      "Amazing service! Very patient and swift. Would definitely recommend to anyone if you are ever in need of someone who can actualize your portfolio!",
  },
  {
    name: "akhil ghosh",
    country: "United States",
    gender: "male",
    stars: 5,
    quote: "He works efficiently and his work is always amazing!",
  },
  {
    name: "nezzie",
    country: "Belgium",
    gender: "male",
    stars: 5,
    quote:
      "Excellent work! Listens to our needs and was very patient with this project! Definitelly working salman again!",
  },
  {
    name: "jack mclaren",
    country: "Romania",
    gender: "male",
    stars: 5,
    quote:
      "Absolutely excellent service. You won't be disappointed! Highly competent and trustworthy, thank you!",
  },
  {
    name: "nicolas spez",
    country: "Romania",
    gender: "male",
    stars: 5,
    quote:
      "really fast and professional delivery! Don't be scared by the cheap pricing, because the results are top notch!",
  },
];

const dedupeByName = (items: TestimonialsPageTestimonial[]) => {
  const seen = new Map<string, TestimonialsPageTestimonial>();
  for (const t of items) {
    const key = t.name.trim().toLowerCase();
    if (!seen.has(key)) seen.set(key, t);
  }
  return Array.from(seen.values());
};

export const testimonialsPageTestimonials: TestimonialsPageTestimonial[] =
  dedupeByName(
    rawTestimonials.map((t) => ({
      ...t,
      quote: sanitizeQuote(t.quote).replace(/\s+See more\s*$/i, "").trim(),
      country: normalizeCountry(t.country),
    }))
  );

