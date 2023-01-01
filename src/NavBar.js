import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './dist/output.css'
export default function NavBar() {
    return (
        <div>
            <nav className="nav">
                <Link to="/home">
                    <p className="nav-item text-2xl font-semibold inline-block block border border-white rounded  py-2 px-4">Hayun Jung</p>
                </Link>
                <ul>
                    <CustomLink to="/blog">
                        <p className="nav-item text-2xl font-semibold inline-block block border border-white rounded py-2 px-4 ">Blog</p>
                    </CustomLink>
                    <CustomLink to="/project">
                        <p className="nav-item text-2xl font-semibold inline-block block border border-white rounded py-2 px-4">Project</p>
                    </CustomLink>
                </ul>
            </nav>
        </div>

    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}