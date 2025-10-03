// en nuestra Card importamos los componentes mediante import (esto siempre va a la principio)
 
 
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
 
 
// La función App se encarga de renderizar el contenido mediante etiquetas html
function App() {
  return (
    // Dentro del return (es lo que renderizamos en pantalla)
    <div className="p-10 flex justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Esta es mi primera Card</CardTitle>
          <CardDescription>
            Esto es un ejemplo de mi primer componente renderizado mediante Vite + React + Tailwind + Shadcn
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime labore veniam corporis ex tempora nesciunt neque minima natus atque deleniti, tempore sunt ducimus necessitatibus voluptatibus ab at veritatis pariatur molestiae dignissimos! Sit quidem, dolorem ratione explicabo maxime facere, fugiat harum neque quibusdam, quam aliquam similique unde voluptate et corporis?</p>
        </CardContent>
        <CardFooter>
          {/* En footer hemos añadido Button!!! */}
          <Button className="w-full">Haz click aqui</Button>
        </CardFooter>
      </Card>
    </div>
    // Hasta aquí renderizamos...
  )
}
// Y exportamos, si no exportamos, no veremos nada
export default App