import fachada from './../../../../assets/images/imgOffice/fachada-1.png'
import street from './../../../../assets/images/imgOffice/street.png'
import team from './../../../../assets/images/imgOffice/team-1.jpg'
import realidadvirtual from './../../../../assets/images/imgOffice/realidadvirtual.jpg'
import andrea from './../../../../assets/images/imgOffice/andrea-1.jpg'
import andrea2 from './../../../../assets/images/imgOffice/andre-2.jpg'
import programing from './../../../../assets/images/imgOffice/girlprograming.jpg'
import offices from './../../../../assets/images/imgOffice/offices-1.png'
import team2 from './../../../../assets/images/imgOffice/team-2.jpg'
import { CollageContainer, CollageItem } from './CollageOffice.style'

interface ICollage {
  id: number
  src: string
  name: string
}

const ImageCollage: ICollage[] = [
  {
    id: 1,
    src: fachada,
    name: 'fachada',
  },
  {
    id: 2,
    src: street,
    name: 'street',
  },
  {
    id: 3,
    src: team2,
    name: 'team2',
  },
  {
    id: 4,
    src: realidadvirtual,
    name: 'realidad-virtual',
  },
  {
    id: 5,
    src: andrea,
    name: 'andrea',
  },
  {
    id: 6,
    src: andrea2,
    name: 'andrea2',
  },
  {
    id: 7,
    src: programing,
    name: 'programing',
  },
  {
    id: 8,
    src: offices,
    name: 'offices',
  },
  {
    id: 9,
    src: team,
    name: 'team',
  },
]

const CollageOffice = () => {
  return (
    <CollageContainer>
      {ImageCollage.map((image) => (
        <CollageItem
          key={image.id}
          className={`${image.name}-item`}
          src={image.src}
          alt={image.name}
        />
      ))}
    </CollageContainer>
  )
}

export default CollageOffice
