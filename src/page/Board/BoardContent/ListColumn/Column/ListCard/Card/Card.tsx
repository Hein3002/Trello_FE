import avatar from '../../../../../../../assets/image/avatar.jpg'
import { Card as BCard } from 'react-bootstrap'

interface Props {
  cover?: boolean;
}

const Card: React.FC<Props> = ({ cover = false }) => {
  return (
    <>
      <BCard className='w-100 list-group-item-action' style={{ cursor: 'pointer' }}>
        {cover &&
          <BCard.Img variant="top" src={avatar} style={{ height: "150px", objectFit: "cover" }} />
        }
        <BCard.Body className='py-2'>
          <BCard.Text>
            Tao là hiển
          </BCard.Text>
        </BCard.Body>
      </BCard>
    </>
  )
}

export default Card
