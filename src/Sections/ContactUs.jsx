import { useForm } from 'react-hook-form';
import { FaTelegramPlane } from "react-icons/fa";
import img1 from "../assets/mail1.jpeg"
import img3 from "../assets/phone1.jpeg"

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id='contactus' className="flex flex-col md:flex-row justify-center items-center min-h-screen md:ml-16">
      {/* Left side content */}
      <div className="w-full md:w-1/2 p-4 pl-12 flex flex-col justify-center items-center">
        <h2 className="text-5xl text-purple-900 font-bold mb-4 whitespace-nowrap">Let&apos;s Connect</h2>
        <p className="text-gray-600 text-sm mb-8 px-[16%] text-center">Got a business challenge or an idea that needs a boost? Whether you&apos;re looking for collaboration, solutions, or just want to brainstorm the next big thing—reach out! We&apos;re here to help your business thrive.</p>

        {/* Two divs with image, span, and p, vertically centered, shadow, and thicker border */}
        <div className="flex flex-col items-center mb-8 w-full max-w-md p-6 border-b-8 border-orange-500 shadow-lg rounded-lg">
          <img src={img1}  alt="Icon" className="mb-4 w-12"/>
          <div className="text-center">
            <span className="text-xl font-semibold block">(+92) 312 3456789</span>
            <p className="text-gray-600">Contact on WhatsApp and local number</p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8 w-full max-w-md p-6 border-b-8 border-purple-800 shadow-lg rounded-lg">
          <img src={img3} alt="Icon" className="mb-4 w-12"/>
          <div className="text-center">
            <span className="text-xl font-semibold block">Pen&Byte@p&b.com</span>
            <p className="text-gray-600">Send us an email to connect yourself with your prospers.</p>
          </div>
        </div>
      </div>

      {/* Right side form */}
      <div className="w-full md:w-[60%] flex justify-center items-center bg-transparent"> {/* Right side 60% */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg p-8 rounded-lg max-md:shadow-lg"
        >
          {/* Name Field */}
          <div className="mb-4">
            <input
              id="name"
              type="text"
              placeholder="Name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 border-b-1 border-2 shadow-lg focus:outline-none focus:rounded-md focus:ring-1 focus:ring-purple-500"
            />
            {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
          </div>

          {/* Company Name Field */}
          <div className="mb-4">
            <input
              id="companyName"
              type="text"
              placeholder="Company Name"
              {...register('companyName', { required: 'Company Name is required' })}
              className="w-full px-3 py-2 border-b-2 border-2 shadow-lg focus:outline-none focus:rounded-md focus:ring-1 focus:ring-purple-500"
            />
            {errors.companyName && <p className="text-red-500 text-xs mt-2">{errors.companyName.message}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <input
              id="email"
              type="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-3 py-2 border-b-2 border-2 shadow-lg focus:outline-none focus:rounded-md focus:ring-1 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <input
              id="phone"
              type="tel"
              placeholder="Phone"
              {...register('phone', { required: 'Phone number is required' })}
              className="w-full px-3 py-2 border-b-2 border-2 shadow-lg focus:outline-none focus:rounded-md focus:ring-1 focus:ring-purple-500"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone.message}</p>}
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <textarea
              id="message"
              placeholder="Message"
              {...register('message', { required: 'Message is required' })}
              className="w-full px-3 py-2 border-b-2 border-2 shadow-lg focus:outline-none focus:rounded-md focus:ring-1 focus:ring-purple-500 h-32"
            />
            {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
  <button
    type="submit"
    className="flex justify-center items-center bg-purple-700 text-white px-2 py-2 rounded-3xl hover:bg-purple-900 transition-colors duration-200 w-full mx-[5%] gap-2" // Full width minus margin
  >
    {<FaTelegramPlane></FaTelegramPlane>} 
     Send Message
  </button>
</div>

        </form>
      </div>
    </section>
  );
};

export default ContactUs;

