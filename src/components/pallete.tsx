

type Props = {
    onSelectColor: (color: string) => void
}
const colorList: Array<string> = [
    'bg-[#ffffff]', 
     // 부드러운 라이트톤
    'bg-[#f4f6fb]', // very light blue gray
    'bg-[#fef3f2]', // soft peach
    'bg-[#f0fdf4]', // soft mint
    'bg-[#fff7ed]', // soft orange cream

    // 중간톤 (가장 쓰기 좋음)
    'bg-[#e0f2fe]', // sky blue
    'bg-[#e9d5ff]', // lavender
    'bg-[#fde68a]', // warm yellow
    'bg-[#fecaca]', // soft red

    // low saturation muted colors
    'bg-[#e5e7eb]', // neutral gray
    'bg-[#e2e8f0]', // blue gray
    'bg-[#e7e5e4]', // warm gray
    'bg-[#e6e1d9]', // beige gray
    'bg-[#dde5df]', // sage gray

    // 딱 하나만 다크톤 (다크모드용)
    'bg-[#1f2937]', // dark slate
]
export function Pallete({onSelectColor}: Props) {


    return (
        <div className="flex w-full items-center gap-3 h-[100px] px-4 py-4">
            {
                colorList.map((col) => {
                    return (
                        <button key={col} onClick={() => onSelectColor(col)} className={`${col} rounded-full w-[50px] h-[50px] border border-[#dddddd] drop-shadow-[2px_2px_3px_#dddddd] cursor-pointer`}></button>
                    )
                })
            }
        </div>
    )
    
}

export default Pallete