import { DndContext } from "@dnd-kit/core"
import { DragEndEvent } from '@dnd-kit/core'
import ListColumn from "./ListColumn/ListColumn"


const BoardContent = () => {
  const handleDragEnd = (event : DragEndEvent) => {
    console.log(event)
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="w-100 vh-100" style={{ background: '#08377b', marginTop: '97px' }}>
        <div className="py-2 px-3">
          <ListColumn />
        </div>
      </div>
    </DndContext>
  )
}

export default BoardContent
