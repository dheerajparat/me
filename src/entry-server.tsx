import { renderToString } from 'react-dom/server'
import App from './App'
import { profile } from './data'

export function render() {
  return renderToString(<App />)
}

export { profile }
