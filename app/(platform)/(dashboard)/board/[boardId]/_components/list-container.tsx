"use client"

import { updateCardOrder } from "@/actions/update-card-order"
import { updateListOrder } from "@/actions/update-list-order"
import { useAction } from "@/hooks/use-action"
import { ListWithCards } from "@/types"
import { DragDropContext, Droppable } from "@hello-pangea/dnd"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { ListForm } from "./list-form"
import { ListItem } from "./list-item"

interface ListContainerProps {
  data: ListWithCards[]
  boardId: string
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data)

  const { execute: executeUpdateListOrder } = useAction(updateListOrder, {
    onSuccess: () => {
      toast.success("List reordered")
    },
    onError: (error) => {
      toast.error(error)
    },
  })

  const { execute: executeUpdateCardOrder } = useAction(updateCardOrder, {
    onSuccess: () => {
      toast.success("Card reordered")
    },
    onError: (error) => {
      toast.error(error)
    },
  })

  const onDragEnd = (result: any) => {
    const { destination, source, type } = result

    // If drop is terminated
    if (!destination) {
      return
    }

    // If dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    // If user moves list
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index }),
      )

      setOrderedData(items)
      executeUpdateListOrder({ items, boardId })
    }

    // If user moves card
    if (type === "card") {
      let newOrderedData = [...orderedData]

      // source and destination list
      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId,
      )
      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId,
      )

      if (!sourceList || !destList) {
        return
      }

      // Check if cards exist on sourceList
      if (!sourceList.cards) {
        sourceList.cards = []
      }

      // Check if cards exist on destList
      if (!destList.cards) {
        destList.cards = []
      }

      // If card is moved in same list
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index,
        )

        // Update order for each card in list
        reorderedCards.forEach((card, index) => {
          card.order = index
        })

        sourceList.cards = reorderedCards

        setOrderedData(newOrderedData)
        executeUpdateCardOrder({ items: reorderedCards, boardId })
      } else {
        // If card is moved to another list

        // Remove card from source list
        const [movedCard] = sourceList.cards.splice(source.index, 1)

        // Assign new listId to the moved card
        movedCard.listId = destination.droppableId

        // Add card to destList
        destList.cards.splice(destination.index, 0, movedCard)

        // Update order for each card in sourceList
        sourceList.cards.forEach((card, index) => {
          card.order = index
        })

        // Update order for each card in destList
        destList.cards.forEach((card, index) => {
          card.order = index
        })

        setOrderedData(newOrderedData)
        executeUpdateCardOrder({ items: destList.cards, boardId })
      }
    }
  }

  useEffect(() => {
    setOrderedData(data)
  }, [data])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex h-full gap-x-3"
          >
            {orderedData.map((list, index) => {
              return <ListItem key={list.id} index={index} data={list} />
            })}
            {provided.placeholder}
            <ListForm />
            <div className="w-1 flex-shrink-0" />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  )
}
