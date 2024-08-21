import Card from "./Card/Card"



const ListCard = () => {
  return (
    <>
      <div className='list-group align-items-center flex-column gap-2'>
        <Card cover= {true}/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default ListCard
