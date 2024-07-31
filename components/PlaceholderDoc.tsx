import React from 'react';
import { Button } from './ui/button';
import { PlusCircleIcon } from 'lucide-react';

const PlaceholderDoc = () => {
  return (
    <Button className='flex flex-col items-center gap-2 w-52 h-72 bg-green-200 hover:bg-green-300 text-green-800'>
        <PlusCircleIcon className='h-12 w-12'/>
      Add a document
    </Button>  
  );
}

export default PlaceholderDoc;
