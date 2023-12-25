
import Link from "next/link"

const NavigationBar = () => {
    return (
        <>
            <section className="nav-container">
                <Link href={"/csr"}><h3 className="logo">Rendering Strategies in Next.js</h3></Link>
                <nav>
                    <Link href={"/csr"}>CSR</Link>
                    <Link href={"/csr-swr"}>CSR-SWR</Link>
                    <Link href={"/ssr"}>SSR</Link>
                    <Link href={"/ssg"}>SSG</Link>
                    <Link href={"/suspense"}>Suspense</Link>
                </nav>
                
           </section>
        </>
)
}
export default NavigationBar