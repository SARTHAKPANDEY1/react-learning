import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  console.log(props);
  
  return (
    <div className='h-screen w-full bg-blue-950'>Section1
    <Navbar />
    <Page1Content users={props.users}/>
    </div>

  )
}

export default Section1