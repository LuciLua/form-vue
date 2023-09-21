import { AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"


interface AccountIconsProps {

}

function AccountIcons({ }: AccountIconsProps) {
    return (
        <div className="flex text-[25px] gap-[30px]">
            <AiOutlineHeart />
            <AiOutlineUser />
            <AiOutlineShoppingCart />
        </div>
    )
}

export default AccountIcons