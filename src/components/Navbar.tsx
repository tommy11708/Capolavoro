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
                            <li><Link to="/considerazioni">Considerazioni finali</Link></li>
                        </ul> : null}
                    </li>
                    <li className="px-8 border-l-1 border-blue-400"><a href="#about">About</a></li>
                </ul>
            </div>

            <div className="mx-10 flex items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path opacity="0.02" fill="rgb(0, 0, 0)" d="M288-32c8 0 15.4 4 19.9 10.6l58.8 87.4 103.4-20.2c7.8-1.5 15.9 .9 21.6 6.6s8.1 13.8 6.6 21.6L478 177.3 565.4 236.1C572 240.5 576 248 576 256s-4 15.4-10.6 19.9L478 334.7 498.2 438c1.5 7.8-.9 15.9-6.6 21.6s-13.8 8.1-21.6 6.6L366.7 446 307.9 533.4C303.4 540 296 544 288 544s-15.4-4-19.9-10.6L209.3 446 105.9 466.2c-7.8 1.5-15.9-.9-21.6-6.6s-8.1-13.8-6.6-21.6L98 334.7 10.6 275.9C4 271.4 0 264 0 256s4-15.4 10.6-19.9L98 177.3 77.8 73.9c-1.5-7.8 .9-15.9 6.6-21.6s13.8-8.1 21.6-6.6l103.3 20.2 58.8-87.4 1.8-2.3C274.4-29 281-32 288-32zm-47.8 138c-5.4 8-15 12-24.5 10.2l-84-16.4 16.4 84c1.8 9.5-2.2 19.1-10.2 24.5L67 256 138 303.8c8 5.4 12 15 10.2 24.5l-16.4 84 84-16.4 3.5-.4c8.3-.4 16.3 3.6 21 10.6l47.8 71 47.8-71 2.2-2.8c5.6-6.1 14-9 22.3-7.3l84 16.4-16.4-84c-1.8-9.5 2.2-19.1 10.2-24.5l71-47.8-71-47.8c-8-5.4-12-15-10.2-24.5l16.4-84-84 16.4c-9.5 1.8-19.1-2.2-24.5-10.2l-47.8-71-47.8 71zM288 376a120 120 0 1 1 0-240 120 120 0 1 1 0 240zm0-192a72 72 0 1 0 0 144 72 72 0 1 0 0-144z"/></svg>
                </div>
                <h3 className="xl-2 text-white"><a href="https://github.com/ErCazzuto/react-interactive-component-map">Github</a></h3>
            </div>
        </nav>
    );
}