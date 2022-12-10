// import Button from "../components/Button";
import Accordion from '../components/Accordion';


function AccordionPage() {

  const items=[
    {
      id:'asfa',
      label:'Can I use React on a Project',
      content:'You can use React'
    },
    {
      id:'as1fas',
      label:'Can I use JS on a Project',
      content:'You can use JS'
    },
    {
      id:'aa2asf',
      label:'Can I use CSS on a Project',
      content:'You can use CSS'
    }
  ]

  return <Accordion items={items}/>


}


export default AccordionPage;