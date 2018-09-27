// @flow

import React from "react"

import Image from "./Image"
import PlainLink from "designSystem/PlainLink"

export type BookProps = {
  author: string,
  cover: string,
  title: string,
  url: string,
}

export default function Book({ author, cover, title, url }: BookProps) {
  return (
    <div className="small">
      <PlainLink href={url}>
        <Image margin="none" src={cover} />
        <div>{title}</div>
        <em className="meta">{author}</em>
      </PlainLink>
    </div>
  )
}
