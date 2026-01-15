import React from 'react'
import {Bookmark, Car} from 'lucide-react'
import Card from './components/Card'
const App = () => {
  
  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/X_4YQRvOg5BosZyDwN5ERLdjUfytL2lmssb2ZzxR_Cc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/ODgxLzkzOS9zbWFs/bC9nb29nbGUtbG9n/by1zZWFyY2gtbWVk/aWEtYnJvd3Nlci1l/ZGl0b3JpYWwtZnJl/ZS12ZWN0b3IuanBn",
    companyName: "Google",
    datePosted: "5 Days Ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/WiIbXsBZvGwJGdAjlIMCU-ULlnmoz-aC_JrFPcXJg3s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FtYXpvbi1wbmct/bG9nby12ZWN0b3Iv/d29ybGQtYnJhbmQt/YW1hem9uLXBuZy1s/b2dvLXZlY3Rvci0y/Ny5wbmc",
    companyName: "Amazon",
    datePosted: "10 Days Ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$60/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/DzF429iIjcgfhk0pJCKDMQYDLonOYkei9DZ_3Yl8s8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    companyName: "Apple",
    datePosted: "2 Weeks Ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/LY2taOaJ164Exo29kfHpylmKkov2r0ZQx1tBlpuDi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MTM1LzMyMC9zbWFs/bC9tZXRhLXNvY2lh/bC1tZWRpYS1zeW1i/b2wtbG9nby1kZXNp/Z24taWxsdXN0cmF0/aW9uLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Meta",
    datePosted: "1 Week Ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$65/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/hAiypPNDgbK6Kb8JyK8JFh-zXXBBL-UMaPg5XDuqvtk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzQ1LzIvbmV0Zmxp/eC1sb2dvLXBuZ19z/ZWVrbG9nby00NTE5/ODEucG5n",
    companyName: "Netflix",
    datePosted: "3 Weeks Ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    payPerHour: "$70/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/tEh-8qh-Tw7E49MS85qJ1g0AnnabTUoouFc7xqJvX9w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85Mi80NS9t/aWNyb3NvZnQtc29m/dHdhcmUtYnJhbmQt/bG9nby1zeW1ib2wt/d2l0aC1uYW1lLXZl/Y3Rvci00NjQwOTI0/NS5qcGc",
    companyName: "Microsoft",
    datePosted: "4 Days Ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$40/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/F5OTIiXQsj1Oyc_QZ1Pcf1XFN1HfraeROF6QZqwmMHw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvLndp/bmUuc3Zn",
    companyName: "Tesla",
    datePosted: "6 Days Ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$58/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/nBja2JiVWriRKDYVkpHvzvw-CuNe1pehGMLBarT1RVQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy91/YmVyLXRleHQtd29y/ZC1sb2dvLWltYWdl/LXBuZy03MDE3NTE2/OTQ3MDcyMjZidGVk/bHE2bGczLnBuZz92/PTIwMjUxMjA1MTQ",
    companyName: "Uber",
    datePosted: "8 Days Ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$62/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/4KbXZENT7jtzU6OXRgbq30T4-JTt83xoYyxVMtixORA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDcvQWlyYm5iLVN5/bWJvbC03MDB4Mzk0/LmpwZw",
    companyName: "Airbnb",
    datePosted: "2 Months Ago",
    post: "Product Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$59/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/E8FApZIHwpK-9NacuuQZr2NcCoJDQP_D-JAtwWXX4VY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWticmFuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9PcmFj/bGUtTG9nby1IaXN0/b3J5LTQtODY0eDU0/MC5wbmc",
    companyName: "Oracle",
    datePosted: "10 Weeks Ago",
    post: "Database Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    payPerHour: "$50/hr",
    location: "Mumbai, India"
  }
];

console.log(jobOpenings);

  
  return (
    <div className='parent'>
      {jobOpenings.map(function(el){
        return <Card company={el.companyName} datePosted ={el.datePosted} post={el.post} tag1={el.tag1} tag2={el.tag2} price={el.payPerHour} loc={el.location} logo={el.brandLogo}/>
      })}
     
    </div>
  )
}

export default App