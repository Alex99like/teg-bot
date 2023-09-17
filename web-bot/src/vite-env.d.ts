/// <reference types="vite/client" />

declare global {
  interface Window {
    fetchUrl:(url: string) => void
  }
}