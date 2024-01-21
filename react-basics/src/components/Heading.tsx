import { ReactNode } from "react"
const Heading = ( props : {title: string, children: ReactNode}) => {
  console.log(props)
  return (
    <div style={{
      fontSize: 30
    }}>{props.title}
    <p>{props.children}</p>
    </div>
  )
}

export default Heading