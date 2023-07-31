import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Pointer move
  useEffect(() => {
    const handlerMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handlerMove)
    }

    // CleanUp
    // Se ejecuta cuando el componente se desmonta y cuando cambian la dependencias antes de ejecutar el evento de nuevo

    return () => {
      window.removeEventListener('pointermove', handlerMove)
    }
  }, [enabled])

  // Como se ejecuta el useEffect
  // [] _> Solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> Se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> Se ejecuta cada vez que se renderiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>

  )
}

function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
