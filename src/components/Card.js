import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Card.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card(user) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
   <animated.div class="animatedCard"
    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
    onMouseLeave={() => set({ xys: [0, 0, 1] })}
    style={{ transform: props.xys.interpolate(trans) }}>
        <h1>{user.user.employee_name}</h1>
        <p classname="title">Salary: {user.user.employee_salary}</p>
        <p>Age: {user.user.employee_age}</p>
   </animated.div>
  )
}

export default Card
