"use client";

export default function ButtonLinkWithIcon({ text, icon, link, iconColorClass }) {
    const handle = () => {
        const handleLink = link;
        window.open(handleLink, "_blank");
    };
    return (
        <button type="button" class="flex w-full justify-center rounded-md border border-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-500 shadow-sm hover:bg-gray-300 hover:text-white" onClick={handle}>
            <div className='flex items-center gap-1'>
                <div className={`text-xl ${iconColorClass}`} dangerouslySetInnerHTML={{ __html: icon }} />
                <div>{text}</div>
            </div>
        </button>
    )
}