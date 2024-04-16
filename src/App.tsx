import { useState } from 'react'
import { Button } from './components/common/Button'
import { ButtonVariants } from './components/common/Button/Button.constants'

export function App() {
  const [count, setCount] = useState(0)

  return (
    //<button onClick={() => setCount((count) => count + 1)}>
    //  count is {count}
    //</button>
    <>
      {count}
      < Button variant={ButtonVariants.Default} onClick={() => setCount(count + 1)}>
        Quero Adotar
      </Button >
      < Button variant={ButtonVariants.Outlined}>
        Tenho um abrigo
      </Button >
      < Button variant={ButtonVariants.Text}>
        Bt Texto
      </Button >
      < Button variant={ButtonVariants.Disabled}>
        Bt Disabled
      </Button >
    </>
  )
}
