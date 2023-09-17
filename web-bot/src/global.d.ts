declare global {
    interface Window {
      fetchUrl:(url: string) => void
    }
  }