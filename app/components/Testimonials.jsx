import Image from 'next/image';
import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';
import profile4 from '../assets/profile-4.jpg';


const testimonials = [
  {
    id: 1,
    name: 'Samantha R.',
    quote: 'This skincare serum is a miracle! My skin has never looked better. Absolutely love it!',
    image:  profile1,
  },
  {
    id: 2,
    name: 'Jessica M.',
    quote: 'I have sensitive skin, and this product worked wonders without any irritation!',
    image: profile2,
  },
  {
    id: 3,
    name: 'Emily A.',
    quote: 'The glow I get after using this is unreal. I get so many compliments!',
    image: profile2,
  },
  {
    id: 4,
    name: 'Olivia P.',
    quote: 'It’s been a game-changer for my skincare routine. Worth every penny!',
    image: profile4,
  }
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      
      <div className="lg:grid lg:grid-cols-3 gap-6 md:block">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 shadow-md rounded-lg">
            <div className="flex items-center mb-4">
              <Image 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </div>
            </div>
            <p className="text-gray-700 italic">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
