import Button from "./components/Button"
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default"

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <h1>fneiwomdio;</h1>
      <Button variant={"primary"} />
      <Button variant={"secondary"} />
      <Button variant={"danger"}/>
      <Button variant={"success"}/>
      <Button variant={"warning"}/>
    </ThemeProvider>
  )
}

export default App
