import { Icon } from "@iconify/react/dist/iconify.js";

export default function Fruta({ nome, iconName }) {

    return (
        <>
            <div className="flex items-center gap-1">
                <Icon icon={iconName} className="text-2xl text-green-600" />
                Fruta { nome }
            </div>
        </>
    )
}