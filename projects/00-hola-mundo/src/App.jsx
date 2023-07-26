import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'cjlozanodev',
    name: ' Carlos Javier Lozano Pérez',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  },
  {
    userName: 'mouredev',
    name: 'Brais Moure',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='app'>
      {users.map((user) => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
