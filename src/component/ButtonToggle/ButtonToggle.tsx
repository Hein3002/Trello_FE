import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import React, { ReactNode } from 'react'
import Button from 'react-bootstrap/Button';


interface CustomToggle {
  children: ReactNode;
  eventKey: number | string;
}
const CustomToggle: React.FC<CustomToggle> = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey.toString(), () =>
    console.log('totally custom!'),
  );

  return (
      <Button
        className='border-0'
        variant='dark'
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </Button>
  );
}
export default CustomToggle