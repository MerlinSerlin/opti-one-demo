import Image from "next/image"

import { useState } from "react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface CardWithImageProps {
    src: string,
    title: string,
    dimensions?: string,
}

type CardProps = React.ComponentProps<typeof Card>

export default function CardWithImage({ className, ...props }: CardWithImageProps & CardProps) {
  return (
    <Card className={cn("w-11/12", className)} {...props}>
      <CardHeader>
      <CardTitle>{props.title}</CardTitle>
      {/* <CardDescription>{props.description}</CardDescription> */}
      </CardHeader>
      <CardContent className="rounded-md border pt-6">
        <div className="relative h-[200px] md:h-[400px] w-full">
          <Image 
              className='data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10'
              src={props.src}
              fill
              style={{objectFit: 'cover', borderRadius: '0.375rem'}}   
              alt={props.title}
              data-loaded='false'
              onLoad={event => {
                event.currentTarget.setAttribute('data-loaded', 'true')
              }}
          />
        </div>
      </CardContent>
    </Card>
  )
}