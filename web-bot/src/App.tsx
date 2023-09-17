import { useEffect } from "react";

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }
  
  return (
    <main>
      work
      <button onClick={onClose}>Закрыть</button>
    </main>
  )
}

export default App
