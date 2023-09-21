import AccountIcons from "./AccountIcons"
import SearchBar from "./SearchBar"

interface HeaderProps {

}

function Header({ }: HeaderProps) {
    return (
        <header className="h-[80px] flex bg-[#fff] border-b-[#ddd] border-b-[1px]">
            <div className="max-w-[1300px] w-full flex mx-auto items-center justify-between">
                <a href="/" className="text-[20px] font-[900]">KH<span className="text-orange-500">OO</span>MI</a>
                <SearchBar placeholder="Busque por um produto" icon="search" />
                <AccountIcons />
            </div>
        </header>
    )
}

export default Header