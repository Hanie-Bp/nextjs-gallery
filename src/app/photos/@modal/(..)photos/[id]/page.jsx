import Modal from '@/components/Modal'
import PhotoCard from '@/components/Photocard'
import React from 'react'
import images from '../../../../../../public/photos';

const page = ({params}) => {
  const photo = images.find((photo) => photo.id === Number(params.id));
  return (
    <Modal>
      <PhotoCard photo={photo}/>
    </Modal>
  )
}

export default page