/* eslint-disable @next/next/no-img-element */
'use client'
import { Options, documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, INLINES, MARKS, Node } from '@contentful/rich-text-types'
import clsx from 'clsx'
import parse from 'html-react-parser'
import get from 'lodash/get'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { typenameComponentMap } from './handlers'
import { Typography } from 'antd'
import { ContentfulError } from './ContentfulError'

export type Links = {
  entries: { block: Array<{ sys: { id: string }; __typename: string }> }
  assets: { block: Array<{ sys: { id: string }; __typename: string }> }
}

function renderOptions(links?: Links, options?: { theme: 'dark' | 'light' }): Options {
  const entryMap = new Map()
  const { theme = 'light ' } = options || {}

  for (const entry of links?.entries?.block || []) {
    console.log('entry.sys.id - link', entry.sys.id)
    entryMap.set(entry.sys.id, entry)
  }

  for (const entry of links?.assets?.block || []) {
    console.log('entry.sys.id - asset', entry.sys.id)
    entryMap.set(entry.sys.id, entry)
  }

  console.log(links.entries)
  console.log(links.assets)

  return {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <b>{text}</b>,
      [MARKS.SUBSCRIPT]: (node: ReactNode) => <div className="mx-auto w-fit">{parse(node?.toString() || '')}</div>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: Node, children: ReactNode) => (
        <Typography
          className={clsx(
            'whitespace-break-spaces text-dark-grey-2 text-md mb-6 gap-x-1 leading-6 md:text-base md:leading-7',
            theme === 'light' ? 'text-dark-grey-2' : 'text-white',
          )}
        >
          {children}
        </Typography>
      ),
      [BLOCKS.UL_LIST]: (node: Node, children: ReactNode) => (
        <ul className="marker:text-primary list-ul ml-[19px] list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: Node, children: ReactNode) => (
        <ol className="marker:text-primary list-ol ml-[19px] list-decimal">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: Node, children: ReactNode) => <li className="[&>div]:mx-0">{children}</li>,
      [BLOCKS.HEADING_1]: (node: Node, children: ReactNode) => <Typography>{children}</Typography>,
      [BLOCKS.HEADING_2]: (node: Node, children: ReactNode) => <Typography>{children}</Typography>,
      [BLOCKS.HEADING_3]: (node: Node, children: ReactNode) => (
        <Typography className="text-dark-grey-2 mb-6">{children}</Typography>
      ),
      [BLOCKS.HEADING_4]: (node: Node, children: ReactNode) => <Typography>{children}</Typography>,
      [BLOCKS.HEADING_5]: (node: Node, children: ReactNode) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node: Node, children: ReactNode) => <h6>{children}</h6>,
      [BLOCKS.QUOTE]: (node: Node) => {
        const text = get(node, 'content[0].content[0].value', '')
        return text
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const entry = entryMap.get(node.data.target.sys.id)

        if (!entry) {
          return <ContentfulError componentName="EMBEDDED_ENTRY" info={node.data.target.sys.id} />
        }

        const mappedFn = typenameComponentMap[entry?.__typename as keyof typeof typenameComponentMap]
        return mappedFn ? (
          mappedFn(entry, options)
        ) : (
          <ContentfulError componentName="EMBEDDED_ENTRY" info={entry.__typename} />
        )
      },

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const entry = entryMap.get(node.data.target.sys.id)

        if (!entry) {
          return <ContentfulError componentName="BLOCKS.EMBEDDED_ASSET" info={node.data.target.sys.id} />
        }

        const { contentType, url, title } = entry || {}

        const isImage = contentType?.includes('image')
        const isPdf = contentType?.includes('pdf')

        if (isImage) {
          return (
            <div className="mx-auto text-center">
              <img alt={title} src={url} className="inline-block" />
            </div>
          )
        }

        if (isPdf) {
          // return <CustomLink url={url} label={title} openInNewTab />
        }

        return (
          <ContentfulError componentName="BLOCKS.EMBEDDED_ASSET - Unknow contentType" info={node.data.target.sys.id} />
        )
      },

      [INLINES.EMBEDDED_ENTRY]: () => {
        return <></>
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Node, children: ReactNode) => {
        const entry = entryMap.get(node.data.target.sys.id)

        return (
          <Link href={node.data.uri || ''} className="text-red underline">
            {children}
          </Link>
        )
      },
      [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => {
        return (
          <Link href={node.data.uri} className="text-red underline">
            {children}
          </Link>
        )
      },
      [INLINES.ASSET_HYPERLINK]: (node: Node, children: ReactNode) => {
        const entry = entryMap.get(node.data.target.sys.id)
        console.log('asset hyperlink')
        if (!entry) {
          return null
        }

        return (
          <ContentfulError componentName="ASSET_HYPERLINK" info={node.data.target.sys.id} />
          // <CustomLink url={entry.url} openInNewTab={entry.openInNewTab}>
          //   {children}
          // </CustomLink>
        )
      },
    },
  }
}

type Props = {
  json: Document
  links?: Links
  theme?: 'dark' | 'light'
}

const ContentfulRenderer: React.FC<Props> = ({ json, links, theme = 'light' }) => {
  return <>{documentToReactComponents(json, renderOptions(links, { theme }))}</>
}

export default ContentfulRenderer
