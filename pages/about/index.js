import React from 'react'
import Layout from '@components/layout/layout'
import Card from 'react-bootstrap/Card'
import Image from "next/image"
import { avoFacts } from './avoFacts'
import avocados from '@public/images/avocados.jpg'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

const card = {
  width: '60rem',
  height: 'auto',
  border: 'none',
  position: 'relative',
}

const divContainer = {
  display:"flex",
  justifyContent:'center',
  alignItems:'center',
}


const AboutPage = () => {
    return (
      <div className="container" style={divContainer}>
      <Card style={card} >
        <Layout>
            <section>
                <Card.Header as="h1" style={{ textAlign:"center", background:'none', border:'none'}}>
                    13 Surprising Facts About Avocados
                </Card.Header>
                <div  style={{display:'flex', justifyContent:'center', padding:'0.5rem 0rem'}}>
                  <Image src={avocados} alt="Avocados on a table" width={480}/>
                </div>
                <ol>
                    {avoFacts.map(({ title, content }) => (
                        <li key={title}>
                            <h3 >{title}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <style jsx>{`
        ol {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        ol {
          margin-top: 3rem;
          // Look ma! Responsive grid with no Media queries :)
          // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;

          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);
          padding: 0rem;
          margin: 0rem;

          // Boring stuff
          position: absolute;
          top: -43px;
          left: -3px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }

        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          font-size: 1.5rem;
          padding-left: 50px;
          margin-bottom: 2rem;
        }
        p {
          font-size: 1.25rem;
          font-weight: 400;
          text-align: justify;
        }
      `}</style>
        </Layout>
        </Card>
        </div>
    )
}

export default AboutPage