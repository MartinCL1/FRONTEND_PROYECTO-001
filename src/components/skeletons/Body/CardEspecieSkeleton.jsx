const CardEspecieSkeleton = ({ url, carga }) => {
    return (
        <div className="mb-4 break-inside-avoid relative rounded-xl animate-pulse bg-gray-200 w-full h- 20">
            <img src={url} className="opacity-0" alt="" onLoad={carga} />
        </div>
    )
}

export default CardEspecieSkeleton;