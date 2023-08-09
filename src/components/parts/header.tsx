import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)
    
    const handleToggle = () => {
        setIsOpen(!isOpen)
    
        // オーバーレイの表示を遅延させる
        setTimeout(() => {
            setShowOverlay(!isOpen)
        }, 700)
    }

    return (
        <header className="flex justify-between items-center p-4 text-black">
            <div>BushCraft</div>
            <button onClick={handleToggle}>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            </button>

            <div
                className={`fixed inset-0 bg-black z-10 transition-opacity duration-1000 ${showOverlay ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
                onClick={handleToggle}
            ></div>
    
            <div className={`fixed top-0 right-0 h-full w-3/4 text-black p-4 z-20 transition-transform duration-1000 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button className="mb-4" onClick={handleToggle}></button>
                <ul>
                    <li className={`bg-white mb-1 transition-transform transform duration-700 delay-100 ${isOpen ? 'translate-x-0' : 'translate-x-60'}`}>メニュー1</li>
                    <li className={`bg-white mb-1 transition-transform transform duration-700 delay-200 ${isOpen ? 'translate-x-0' : 'translate-x-60'}`}>メニュー2</li>
                    <li className={`bg-white mb-1 transition-transform transform duration-700 delay-300 ${isOpen ? 'translate-x-0' : 'translate-x-60'}`}>メニュー3</li>
                    <li className={`bg-white mb-1 transition-transform transform duration-700 delay-400 ${isOpen ? 'translate-x-0' : 'translate-x-60'}`}>メニュー4</li>
                    <li className={`bg-white mb-1 transition-transform transform duration-700 delay-500 ${isOpen ? 'translate-x-0' : 'translate-x-60'}`}>メニュー5</li>
                    <li className={`bg-white mb-1 transition-transform transform duration-700 delay-600 ${isOpen ? 'translate-x-0' : 'translate-x-60'}`}>メニュー6</li>
                    {/* ...他のメニューアイテム... */}
                </ul>
            </div>
        </header>
    );
}

export default Header