import { DndContext } from "@dnd-kit/core"
import { DragEndEvent } from '@dnd-kit/core'
import ListColumn from "./ListColumn/ListColumn"


const BoardContent = () => {
  const handleDragEnd = (event : DragEndEvent) => {
    console.log(event)
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      board content
    </DndContext>
  )
}

export default BoardContent
