import { userData } from './interfaces/interface'

interface Props {
    user: userData
} 

export const UserDetails = (data: Props) => {
    console.log(data)
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: '1rem',
        padding: 30
    }}>
        <p>name: <span style={{fontWeight: "bold"}}>{data.user.name}</span></p>
        <p>username: <span style={{fontWeight: "bold"}}>{data.user.username}</span></p>
        <p>email: <span style={{fontWeight: "bold"}}>{data.user.email}</span></p>
        <p>phone: <span style={{fontWeight: "bold"}}>{data.user.phone}</span></p>
    </div>
  )
}
