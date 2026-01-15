import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {

  const users = [
    { 
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      color:'blue', 
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: '', 
      color:'pink',
      tag: 'Undeserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1542767352-e98201e84ed8?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: '', 
      color:'lightseagreen',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1522206038088-8698bcefa6a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro: '', 
      color:'orange',
      tag: 'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App