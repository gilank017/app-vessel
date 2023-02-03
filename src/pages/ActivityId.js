import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Card, Image, Form, InputGroup, Button } from 'react-bootstrap'
import ShipLogo from '../static/img/icon/Ship.svg'
import InWhite from '../static/img/In-White.svg'
import InBlue from '../static/img/In-blue.svg'

import '../static/css/card.css'

export default function ActivityId() {
  const { id } = useParams()
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
  return (
    <Container>
      <div className='title-page mt-4'>Vessel Activity</div>
      <div className='mt-4'>
        <Card className='card-data'>
          <Card.Body className='d-flex p-1'>
            <Image src={ShipLogo} width="30" style={{ marginRight: '12px' }} />
            <div className='text-name'>{dataActivity[id].name}</div>
          </Card.Body>
        </Card>
        <div className="formInput">
          <div className="row mt-4">
            <div className="col-md-6">
              <Form.Group className="mb-4" controlId="formVoyage">
                <Form.Label className="label-name">Voyage</Form.Label>
                <Form.Control className="form-input" type="number" placeholder="Insert Voyage" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formPosition">
                <Form.Label className="label-name">Position</Form.Label>
                <Form.Control className="form-input" type="text" placeholder="Insert Position" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formActivity">
                <Form.Label className="label-name">Activity</Form.Label>
                <Form.Control className="form-input" type="text" placeholder="Insert Activity" />
              </Form.Group>
              <div className="row">
                <div className="col-6">
                  <Form.Group className="mb-4" controlId="formETA">
                    <Form.Label className="label-name">ETA</Form.Label>
                    <Form.Control className="form-input" type="date" placeholder="29/10/2022" />
                  </Form.Group>
                </div>
                <div className="col-6">
                  <Form.Group className="mb-4" controlId="formETD">
                    <Form.Label className="label-name">ETD</Form.Label>
                    <Form.Control className="form-input" type="date" placeholder="29/10/2022" />
                  </Form.Group>
                </div>
              </div>
              <Form.Group className="mb-4" controlId="formCargo">
                <Form.Label className="label-name" >Cargo BL</Form.Label>
                <InputGroup className="mb-4">
                  <InputGroup.Text className="prepend-blue" id="basic-addon1">PSP</InputGroup.Text>
                  <Form.Control className="form-group"
                    placeholder="Insert Cargo BL"
                  />
                </InputGroup>
              </Form.Group>
              
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-5" controlId="formRob">
                <Form.Label className="label-name" >RoB</Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="prepend-gray" id="basic-addon1">PSP</InputGroup.Text>
                  <Form.Control 
                    className="form-group-gray"
                    placeholder="Insert COB"
                    type="number"
                  />
                </InputGroup>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="prepend-gray" id="basic-addon1">Fuel</InputGroup.Text>
                  <Form.Control 
                    className="form-group-gray"
                    placeholder="Insert Fuel"
                    type="number"
                  />
                </InputGroup>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="prepend-gray" id="basic-addon1">LO</InputGroup.Text>
                  <Form.Control 
                    className="form-group-gray"
                    placeholder="Insert LO"
                    type="number"
                  />
                </InputGroup>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="prepend-gray" id="basic-addon1">FW</InputGroup.Text>
                  <Form.Control 
                    className="form-group-gray"
                    placeholder="Insert FW"
                    type="number"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formNote">
                <Form.Label className="label-name">NOTE</Form.Label>
                <Form.Control className="form-input" type="text" placeholder="Insert NOTE" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formPort">
                <Form.Label className="label-name">Next Port</Form.Label>
                <Form.Control className="form-input" type="text" placeholder="Insert Next Port" />
              </Form.Group>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <Button className="button-print d-flex align-items-center">
            <div style={{ marginRight:'20px' }}>Export PDF</div>
            <Image src={InWhite} width="25"/>
          </Button>
          <Button className="button-excel d-flex align-items-center">
            <div style={{ marginRight:'20px' }}>Export Excel</div>
            <Image src={InBlue} width="25"/>
          </Button>
        </div>
      </div>
    </Container>
  )
}
