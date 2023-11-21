"use client";

export default function ButtonLinkWithIcon({ text, icon, link }) {
    const handle = () => {
        const handleLink = link;
        window.open(handleLink, "_blank");
    };
    return (
        <button type="button" className="flex w-full justify-center rounded-md border border-gray-300 px-3 py-1.5 font-semibold leading-6  shadow-sm hover:bg-gray-300" onClick={handle}>
            <div className='flex items-center gap-1'>
                <div className={`text-sm`} dangerouslySetInnerHTML={{ __html: icon }} />
                <div className="text-gray-500 hover:text-white text-sm">{text}</div>
            </div>
        </button>
    )
}