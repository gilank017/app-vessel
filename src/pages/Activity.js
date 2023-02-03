import React from 'react'
import { Container, Card, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ShipLogo from '../static/img/icon/Ship.svg'
import '../static/css/card.css'


export default function Activity() {
  const dataActivity = [
    {
      id: 0,
      name: 'KM Abusamah'
    },
    {
      id: 1,
      name: 'KM Ibrahim Zahier'
    },
    {
      id: 2,
      name: 'KM Julianto Moeliodiharjo'
    },
    {
      id: 3,
      name: 'KM Mochtar Prabu Mangkunegara'
    },
    {
      id: 4,
      name: 'KM Pusri Indonesia'
    },
    {
      id: 5,
      name: 'SPUB PI 1'
    },
    {
      id: 6,
      name: 'KM Soemantri Brodjonegoro'
    },
    {
      id: 7,
      name: 'MT Salmon Mustofa'
    },
    {
      id: 8,
      name: 'MT Sultan Mahmud Badaruddin II'
    },
  ]

  const dataList = dataActivity.map((val, index) => {
    return (
      <div key={index} className='col-md-4 p-4'>
        <Link to={`/activity/${val.id}`}>
          <Card className='card-list'>
            <Card.Body>
              <div className='data-vessel'>
                <Image src={ShipLogo} className="logo-ship"/>
                <div className='text-name'>{val.name}</div>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </div>
    )
  })
  return (
    <Container>
      <div className='title-page mt-4'>Vessel Activity</div>
      <div className='mt-5'>
        <div className='row list-activity'>
          {dataList}
        </div>
      </div>
    </Container>
  )
}
