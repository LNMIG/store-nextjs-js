import React from "react"
import { ListGroup } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

export default function ProductAttributes({ description, ...otherAttributes }) {
  return (
    <Card style={{ border: 'none' }}>
      <Card.Header
        style={{
          backgroundColor: 'transparent',

        }}
      >

        <h5>About this avocado</h5>
        <p
          style={{
            fontSize: '1rem',
            fontWeight: '400',
            textAlign: 'justify'
          }}
        >
          {description}
        </p>
      </Card.Header>

      <Card responsive='sm' size='sm' style={{ marginTop: '20px', fontSize: '1.25rem' }}>

        <Card.Header> Attributes </Card.Header>

        <Table borderless hover style={{ fontSize: '1rem', fontWeight: '400', marginLeft: '0.5rem' }}>
          <tbody>
            <tr>
              <td>Shape</td><td>{otherAttributes.shape}</td>
            </tr>
            <tr>
              <td>Hardiness</td><td>{otherAttributes.hardiness}</td>
            </tr>
            <tr>
              <td>Taste</td><td>{otherAttributes.taste}</td>
            </tr>
          </tbody>
        </Table>

      </Card>

    </Card>
  )
}