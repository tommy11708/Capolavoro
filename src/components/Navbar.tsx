import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    let [openDropdown, setOpenDropdown] = useState(0);
    const dropdownRef = useRef<HTMLLIElement>(null);

    const handleMouseEnter = () => {
        setOpenDropdown(1);
    }

    const handleMouseLeave = () => {
        setOpenDropdown(0);
    }

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setOpenDropdown(0);
        
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(0);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    
    return (
        <nav className="absolute fixed top-0 left-0 right-0 mx-4 h-18 rounded-b-3xl flex flex-row items-center justify-between px-4 bg-[#212121] z-20 border-2 border-t-0 border-blue-400">
            <div className="relative bg-red flex flex-row items-center">
                <svg className="font-4xl color-white m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path opacity="0.02" fill="rgb(0, 0, 0)" d="M348.8 32C340.7 46.1 336 62.5 336 80l0 16-272 0 0 224 272 0 0 64-272 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l284.8 0zM336 432c0 17.5 4.7 33.9 12.8 48L120 480c-13.3 0-24-10.7-24-24s10.7-24 24-24l216 0zM432 32l96 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-352c0-26.5 21.5-48 48-48zm24 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm56 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                <div className="ml-4 flex flex-col">
                    <Link to="/" className="no-underline">
                     <h1 className="text-4xl font-bold text-white cursor-pointer">Capolavoro</h1>
                    </Link>
                    <h2 className="text-sm text-white">Tommaso Gironi</h2>
                </div>
            </div>
            <div className=" flex items-center">
                <ul className="relative flex flex-row gap-3 items-center text-white text-lg">
                    
                    <li className=" no-underline px-8 border-r-1 border-blue-400"><Link to="/pc">PC</Link></li>
                    <li id="dropdownNvbarButton" ref={dropdownRef} onClick={handleMouseEnter} onMouseEnter={handleMouseEnter}
                        className="relative px-8">
                        <div className="hover:cursor-pointer flex flex-row items-center">Il processo
                            <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                        </div>
                        {openDropdown ? 
                        <ul onMouseLeave={handleMouseLeave} id="dropdownNavbar" 
                            className="absolute top-14 left-0 bg-[#212121] rounded-lg p-3 w-72 flex flex-col gap-4 border-2 border-blue-400">
                            <li><Link to="/fase1">Fase 1: la ricerca dei componenti</Link></li>
                            <li><Link to="/fase2">Fase 2: l'assemblaggio</Link></li>
                            <li><Link to="/fase3">Fase 3: la configurazione</Link></li>
                        </ul> : null}
                    </li>
                    <li className="px-8 border-l-1 border-blue-400"><Link to="/considerazioni">Considerazioni finali</Link></li>
                </ul>
            </div>

            <div className="mx-10 flex items-center">
                
                <h3 className="xl-2 text-white"><a href="https://github.com/tommy11708/Capolavoro.git">Github</a></h3>
            </div>
        </nav>
    );
}