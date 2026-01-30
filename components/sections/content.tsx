import { ReactNode } from "react"

type ContentProps = {
    children: ReactNode
}

export function Content({ children }: ContentProps) {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </section>
    )
}
