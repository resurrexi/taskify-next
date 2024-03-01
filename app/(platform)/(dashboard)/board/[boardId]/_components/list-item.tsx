"use client"

import { ListWithCards } from "@/types"
import { ElementRef, useRef, useState } from "react"
import { CardForm } from "./card-form"
import { ListHeader } from "./list-header"

interface ListItemProps {
  data: ListWithCards
  index: number
}

export const ListItem = ({ data, index }: ListItemProps) => {
  const textareaRef = useRef<ElementRef<"textarea">>(null)
  const [isEditing, setIsEditing] = useState(false)

  const disableEditing = () => {
    setIsEditing(false)
  }

  const enableEditing = () => {
    setIsEditing(true)
    setTimeout(() => {
      textareaRef.current?.focus()
    })
  }

  return (
    <li className="h-full w-[272px] shrink-0 select-none">
      <div className="w-full rounded-md bg-[#f1f2f4] pb-2 shadow-md">
        <ListHeader onAddCard={enableEditing} data={data} />
        <CardForm
          listId={data.id}
          ref={textareaRef}
          isEditing={isEditing}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
        />
      </div>
    </li>
  )
}
