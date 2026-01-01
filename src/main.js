import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

// Entry point buat svelte app
const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
