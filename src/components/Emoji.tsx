import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import  { Image, ImageProps } from '@chakra-ui/react'

// need the rating of the game to determine what emoji to use
// pass in the rating as a prop
interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if(rating < 3) return null;

    // key: number that represent the rating of a game
    // val: emoji
    const emojiMap: { [key: number]: ImageProps } = {       // index signature. Tells TypeScript compiler the object can have any number of keys of type number
        3: { src: meh, alt: 'meh', boxSize: '25px' },
        4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
        5: { src: bullsEye, alt: 'exceptional', boxSize: '35px' } 
    }

  return (
    // render value associated wit given key
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji