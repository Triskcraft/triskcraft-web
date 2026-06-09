import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MarkdownParagraph } from './markdown-paragraph'
import { MarkdownHeading } from './markdown-heading'
import { MarkdownList } from './markdown-list'
import { MarkdownCodeBlock } from './markdown-code-block'

const components: Components = {
    p: MarkdownParagraph,
    h1: props => <MarkdownHeading level={1} {...props} />,
    h2: props => <MarkdownHeading level={2} {...props} />,
    h3: props => <MarkdownHeading level={3} {...props} />,
    h4: props => <MarkdownHeading level={4} {...props} />,
    h5: props => <MarkdownHeading level={5} {...props} />,
    h6: props => <MarkdownHeading level={6} {...props} />,
    ul: props => <MarkdownList {...props} />,
    ol: props => <MarkdownList ordered {...props} />,
    code: MarkdownCodeBlock,
    // The code block renders its own container, so flatten the wrapping <pre>.
    pre: ({ children }) => <>{children}</>,
    a: ({ node, ...props }) => (
        <a
            className='text-triskgold font-semibold underline-offset-4 transition hover:text-white hover:underline'
            target={props.href?.startsWith('http') ? '_blank' : undefined}
            rel={
                props.href?.startsWith('http') ?
                    'noopener noreferrer'
                :   undefined
            }
            {...props}
        />
    ),
    blockquote: ({ node, ...props }) => (
        <blockquote
            className='border-triskgold/50 my-5 border-l-4 bg-white/[0.03] py-2 pl-4 text-white/70 italic'
            {...props}
        />
    ),
    hr: () => <hr className='my-8 border-white/10' />,
    img: ({ node, ...props }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className='my-5 rounded-xl' alt={props.alt ?? ''} {...props} />
    ),
    table: ({ node, ...props }) => (
        <div className='my-5 overflow-x-auto rounded-xl border border-white/10'>
            <table
                className='w-full border-collapse text-left text-sm'
                {...props}
            />
        </div>
    ),
    th: ({ node, ...props }) => (
        <th
            className='border-b border-white/10 bg-white/5 px-4 py-2 font-semibold text-white'
            {...props}
        />
    ),
    td: ({ node, ...props }) => (
        <td
            className='border-b border-white/5 px-4 py-2 text-white/75'
            {...props}
        />
    ),
}

type MarkdownProps = {
    children: string
}

export function Markdown({ children }: MarkdownProps) {
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {children}
        </ReactMarkdown>
    )
}
