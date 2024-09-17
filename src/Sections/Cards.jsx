import { useMediaQuery } from 'react-responsive';
import Card from "../components/Card_1"

const Cards = () => {

    const isMediumScreen = useMediaQuery({ query: '(max-width: 1024px) and (min-width: 640px)' });
    const heading1="Web Development"
    const heading2="Copy writing"
    const heading3="Advertisements"
    const s1="Our team of experienced web designers and developers is dedicated to creating custom websites that not only look stunning but also drive measurable results. We leverage the latest technologies and industry best practices to build websites that are not only visually appealing but also optimized for search engines, ensuring maximum visibility and engagement. Whether you're looking to launch a new online store, enhance your brand's digital presence, or create a platform for your business, we have the expertise to deliver a solution that exceeds your expectations."
    const s2="Tired of generic, forgettable content? Let's craft compelling copy that captivates your audience and drives results. Our skilled copywriters specialize in creating persuasive narratives that resonate with your target market. From website content and blog posts to social media captions and email campaigns, we'll infuse your brand's voice into every word. Looking to nurture leads and boost conversions? Our email marketing experts will design personalized campaigns that deliver the right message at the right time. We'll segment your audience, create engaging content, and optimize your email deliverability for maximum impact."
    const s3="Our team is a group of dedicated individuals united by a shared passion for crafting compelling advertisements that drive fruitful results. We work collaboratively to develop effective marketing campaigns across various channels. Through our diverse skills and perspectives, we strive to deliver impactful messages that resonate with target audiences. We value creativity, strategy, and data-driven insights and foster a supportive and inclusive environment where everyone feels valued and empowered."

  return (
    <div className=' mx-auto flex flex-wrap items-center justify-around mt-7'>
      {isMediumScreen?<Card pad={true} heading={heading1} string={s1} bool={false}></Card>:<Card pad={false} heading={heading1} string={s1} bool={true}></Card>}
      <Card pad={false} heading={heading2} string={s2} bool={false}></Card>
      <Card pad={true} heading={heading3} string={s3} bool={true}></Card>
   </div>
  )
}

export default Cards

